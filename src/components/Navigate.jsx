import React, { useState } from "react";
import images from "../asset";
import { ROUTING_MOVIEDETAIL_NS } from "../router/path";
import { Link } from "react-router-dom";

const Navigate = ({ movie, days, cinemas, times }) => {
  const [selectedCinema, setSelectedCinema] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedShow, setSelectedShow] = useState("");

  const selectClass =
    "w-full rounded-lg border-2 border-white bg-[#27282D] p-2 text-center text-base font-bold text-yellow-400 md:border-4 md:text-lg";

  return (
    <div className="grid grid-cols-1 gap-3 rounded-lg bg-[#27282D] p-4 md:flex md:items-center md:justify-center md:space-x-4 md:gap-0">
      <div className="flex-1">
        <select
          value={selectedCinema}
          onChange={(e) => setSelectedCinema(e.target.value)}
          className={selectClass}
        >
          <option value="" disabled hidden>
            1. Chọn rạp
          </option>
          {cinemas.map((cinema, index) => (
            <option key={index} value={cinema}>
              {cinema}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <select
          value={selectedMovie}
          onChange={(e) => setSelectedMovie(e.target.value)}
          className={selectClass}
        >
          <option value="" disabled hidden>
            2. Chọn phim
          </option>
          {movie.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          className={selectClass}
        >
          <option value="" disabled hidden>
            3. Chọn ngày
          </option>
          {days.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <select
          value={selectedShow}
          onChange={(e) => setSelectedShow(e.target.value)}
          className={selectClass}
        >
          <option value="" disabled hidden>
            4. Chọn suất
          </option>
          {times.map((show, index) => (
            <option key={index} value={show}>
              {show}
            </option>
          ))}
        </select>
      </div>

      <Link to={ROUTING_MOVIEDETAIL_NS} className="w-full md:w-auto">
        <button className="flex w-full items-center justify-center rounded-lg border-2 border-yellow-400 bg-yellow-400 px-4 py-2 text-base font-bold text-black md:w-auto md:border-4 md:text-lg">
          <img src={images.bookingIcon} alt="Booking" className="h-6 w-6" />
          <span className="ms-2">Đặt vé nhanh</span>
        </button>
      </Link>
    </div>
  );
};

export { Navigate };
