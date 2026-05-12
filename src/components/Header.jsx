import { Link } from "react-router-dom";
import {
  ROUTING_HOME,
  ROUTING_LOGIN,
  ROUTING_PROMOTIONLIST,
  ROUTING_THEATER_DETAIL,
  ROUTING_MOVIELIST_NS,
  ROUTING_MOVIELIST_UC,
  ROUTING_TICKET_HISTORY,
  ROUTING_INFO
} from "../router";
import images from "../asset";
import { useState, useEffect } from "react";

const Header = () => {
  // State để theo dõi tình trạng đăng nhập và icon khi hover
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [iconHovered, setIconHovered] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    };

    // Lắng nghe sự kiện thay đổi localStorage
    window.addEventListener("storage", handleStorageChange);

    // Cleanup sự kiện khi component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // Xóa toàn bộ dữ liệu trong localStorage
    setIsLoggedIn(false); // Cập nhật trạng thái đăng nhập
    setUser(null); // Xóa thông tin người dùng
  };

  return (
    <header className="flex flex-col gap-4 border-b border-white border-opacity-20 bg-[#27282D] px-4 py-4 text-white md:flex-row md:items-center md:justify-between md:px-8">
      {/* Logo */}
      <Link to={ROUTING_HOME}>
        <div className="flex items-center justify-center md:ml-8 md:justify-start">
          <img src={images.logo} alt="MovieMate Logo" className="h-auto w-36 md:w-50" />
        </div>
      </Link>

      {/* Navigation Links */}
      <nav className="relative flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:space-x-10 md:gap-0">
        {/* Trang chủ */}
        <div className="relative group">
          <Link to={ROUTING_HOME} className="hover:text-yellow-500 text-lg">
            Trang chủ
          </Link>
        </div>

        {/* Menu Phim */}
        <div className="relative group">
          <Link to="#" className="hover:text-yellow-500 text-lg">
            Phim
          </Link>
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 hidden group-focus-within:block bg-[#2A2A2A] rounded-lg shadow-lg mt-2 w-48 p-3 space-y-4 z-10">
            <Link
              to={ROUTING_MOVIELIST_NS}
              className="block text-white hover:text-yellow-500"
            >
              Phim đang chiếu
            </Link>
            <Link
              to={ROUTING_MOVIELIST_UC}
              className="block text-white hover:text-yellow-500"
            >
              Phim sắp chiếu
            </Link>
          </div>
        </div>

        {/* Khuyến mãi */}
        <div className="hover:text-yellow-500 text-lg">
          <Link to={ROUTING_PROMOTIONLIST} className="hover:text-yellow-500">
            Khuyến mãi
          </Link>
        </div>

        {/* Menu Rạp chiếu phim */}
        <div className="relative group">
          <Link to="#" className="hover:text-yellow-500 text-lg">
            Rạp chiếu phim
          </Link>
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 hidden group-focus-within:block bg-[#2A2A2A] rounded-lg shadow-lg mt-2 w-52 p-3 space-y-4 z-20">
            <Link
              to={ROUTING_THEATER_DETAIL}
              className="block text-white hover:text-yellow-500"
            >
              Moviemate Nguyễn Du
            </Link>
            <Link
              to={ROUTING_THEATER_DETAIL}
              className="block text-white hover:text-yellow-500"
            >
              Moviemate Quế Thanh
            </Link>
            <Link
              to={ROUTING_THEATER_DETAIL}
              className="block text-white hover:text-yellow-500"
            >
              Moviemate Hải Bà Trưng
            </Link>
            <Link
              to={ROUTING_THEATER_DETAIL}
              className="block text-white hover:text-yellow-500"
            >
              Moviemate Mỹ Tho
            </Link>
          </div>
        </div>
      </nav>

      {/* Search and Login */}
      <div className="flex w-full flex-col items-stretch gap-3 md:me-10 md:w-auto md:flex-row md:items-center md:space-x-5 md:gap-0">
        {/* Search Bar */}
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Tìm phim"
            className="w-full rounded-full bg-white px-4 py-2 pl-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black md:w-auto"
          />
          {/* Search Icon */}
          <i className="fa-solid fa-magnifying-glass text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 text-lg"></i>
        </div>

        {/* Login or User Info */}
        {isLoggedIn ? (
          <div className="relative group">
            <Link
              to="#"
          className="flex items-center justify-center space-x-1 hover:text-yellow-500 md:justify-start"
              onMouseEnter={() => setIconHovered(true)} // Khi hover vào icon, thay đổi state
              onMouseLeave={() => setIconHovered(false)} // Khi rời khỏi icon, quay lại màu mặc định
            >
              <img
                src={iconHovered ? images.userYellowIcon : images.userWhiteIcon}
                alt="User Icon"
              />
              <span>{user.name}</span>
            </Link>
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 hidden group-focus-within:block bg-[#2A2A2A] rounded-lg shadow-lg mt-2 w-44 p-3 space-y-4 z-10">
              <Link to={ROUTING_INFO} className="block text-white hover:text-yellow-500">
                Thông tin cá nhân
              </Link>
              <Link to={ROUTING_TICKET_HISTORY} className="block text-white hover:text-yellow-500">
                Thông tin vé đã đặt
              </Link>
              <Link
                to=""
                className="block text-white hover:text-yellow-500"
                onClick={handleLogout}
              >
                Đăng xuất
              </Link>
            </div>
          </div>
        ) : (
          <Link
            to={ROUTING_LOGIN}
            className="flex items-center justify-center space-x-1 hover:text-yellow-500 md:justify-start"
          >
            <img
              src={iconHovered ? images.userYellowIcon : images.userWhiteIcon}
              alt="User Icon"
              onMouseEnter={() => setIconHovered(true)} // Khi hover vào icon, thay đổi state
              onMouseLeave={() => setIconHovered(false)} // Khi rời khỏi icon, quay lại màu mặc định
            />
            <span>Đăng nhập</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export { Header };
