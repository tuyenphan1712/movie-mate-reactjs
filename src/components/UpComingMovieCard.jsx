import React from "react";
import images from "../asset";
import { useNavigate } from "react-router-dom";
import { ROUTING_WATCHTRAILER_UC } from "../router/path";
import { ROUTING_MOVIEDETAIL_UC } from "../router/path";

const UpComingMovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTING_MOVIEDETAIL_UC);
  };

  const handleWatchTrailerClick = () => {
    window.open(ROUTING_WATCHTRAILER_UC, "_blank"); // Mở đường dẫn trong tab mới
  };

  return (
    <div
      className="w-full max-w-64 rounded-lg border border-gray-500 bg-transparent text-white shadow-lg"
      style={{ cursor: "pointer" }}
    >
      <div className="relative">
        {/* Poster phim*/}
        <div className="relative w-55 h-80 rounded-lg overflow-hidden">
          <img
            src={movie.poster}
            alt="Movie Poster"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Hiệu ứng Hover*/}
        <div
          className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          onClick={handleClick}
        >
          <button
            className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg mb-2 flex items-center justify-center text-sm w-40"
            onClick={(e) => {
              e.stopPropagation(); // Ngăn sự kiện lan đến thẻ cha
              handleClick(); // Gọi hàm điều hướng
            }}
          >
            <img src={images.searchIcon} alt="Booking" className="w-6 h-6" />
            <p className="ps-2">Tìm hiểu ngay</p>
          </button>
          <button
            className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center text-sm w-40 "
            onClick={(e) => {
              e.stopPropagation(); // Ngăn sự kiện lan đến thẻ cha
              handleWatchTrailerClick(); // Mở trailer
            }}
          >
            <img src={images.trailerIcon} alt="Trailer" className="w-6 h-6" />
            <p className="ps-2">Xem Trailer</p>
          </button>
        </div>
      </div>

      {/* Tên phim */}
      <div className="items-center p-2">
        <h3 className="font-bold text-sm">{movie.title}</h3>
      </div>
    </div>
  );
};

export { UpComingMovieCard };
