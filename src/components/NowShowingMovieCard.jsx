import React from "react";
import images from "../asset";
import { useNavigate } from "react-router-dom";
import {
  ROUTING_WATCHTRAILER_NS,
  ROUTING_MOVIEDETAIL_NS,
  ROUTING_LOGIN,
} from "../router";

const NowShowingMovieCard = ({ movie, image }) => {
  const navigate = useNavigate();
  const poster = image || movie.poster || images.defaultPoster;

  const handleClick = () => {
    const user = localStorage.getItem("user");
    const routeState = {
      redirectTo: ROUTING_MOVIEDETAIL_NS,
      movieId: movie.id,
      poster,
    };

    if (!user) {
      navigate(ROUTING_LOGIN, { state: routeState });
      return;
    }

    navigate(ROUTING_MOVIEDETAIL_NS, { state: routeState });
  };

  const handleWatchTrailerClick = () => {
    window.open(ROUTING_WATCHTRAILER_NS, "_blank");
  };

  return (
    <div className="w-full max-w-64 rounded-lg border border-gray-500 bg-transparent text-white shadow-lg">
      <div className="relative">
        <div className="relative w-55 h-80 rounded-lg overflow-hidden">
          <img
            src={poster}
            alt={movie.name || movie.title || "Movie Poster"}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="absolute top-2 right-2 bg-black bg-opacity-50 px-2 py-1 rounded-md flex items-center">
          <span className="text-yellow-400 text-sm mr-1">
            {movie.rating || "N/A"}
          </span>
        </div>

        <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded-md flex items-center">
          <span className="text-white text-sm">
            {movie.duration || movie.time || "N/A"}
          </span>
        </div>

        <div
          className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          onClick={handleClick}
        >
          <button
            className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg mb-2 flex items-center justify-center text-lg w-36"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            <img src={images.bookingIcon} alt="Booking" className="w-6 h-6" />
            <p className="ps-2">Đặt vé</p>
          </button>
          <button
            className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center text-sm"
            onClick={(e) => {
              e.stopPropagation();
              handleWatchTrailerClick();
            }}
          >
            <img src={images.trailerIcon} alt="Trailer" className="w-6 h-6" />
            <p className="ps-2">Xem Trailer</p>
          </button>
        </div>
      </div>

      <div className="items-center p-2">
        <h3 className="font-bold text-sm">
          {movie.name || movie.title || "Tên phim"}
        </h3>
      </div>
    </div>
  );
};

export { NowShowingMovieCard };
