import React, { useState } from "react";
import { useMovies } from "../context/MovieContext";
import images from "../asset";

const Banner = () => {
  const { movies } = useMovies();
  const banner = movies.banners || [];
  const [selectedMovie, setSelectedMovie] = useState(banner[0]);

  if (!selectedMovie) {
    return null;
  }

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ));

  return (
    <div
      className="relative w-full min-h-[640px] overflow-hidden rounded-lg border border-white bg-cover bg-center md:h-[600px] md:min-h-0"
      style={{ backgroundImage: `url(${selectedMovie.backgroundImage})` }}
    >
      <div className="absolute inset-0 rounded-lg bg-black bg-opacity-60 px-4 py-6 md:px-12 md:py-10">
        <div className="max-w-full space-y-3 text-left text-white md:max-w-md md:space-y-4">
          <div className="mb-2 flex items-center space-x-1 text-xl text-yellow-400 md:mb-4 md:text-2xl">
            {renderStars(selectedMovie.rating)}
          </div>

          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            {selectedMovie.title}
          </h1>

          <p className="mt-3 text-sm font-medium text-yellow-400 md:mt-4 md:text-lg">
            Phát hành vào ngày {selectedMovie.releaseDate}
          </p>

          <p className="mt-3 line-clamp-[8] text-sm leading-relaxed text-gray-300 md:mt-4 md:line-clamp-none md:text-base">
            {selectedMovie.description}
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-6 md:pt-20">
            <button className="flex h-12 w-full items-center justify-center rounded-lg bg-yellow-400 px-4 py-2 text-base font-bold text-black sm:w-40 md:text-lg">
              <img src={images.bookingIcon} alt="Booking" className="h-6 w-6" />
              <span className="ps-2">Đặt vé</span>
            </button>

            <button className="flex h-12 w-full items-center justify-center rounded-lg border border-white bg-transparent px-4 py-2 text-sm font-bold text-white sm:w-40">
              <img src={images.trailerIcon} alt="Trailer" className="h-6 w-6" />
              <span className="ps-2">Xem Trailer</span>
            </button>
          </div>
        </div>
      </div>

      <div className="custom-scrollbar absolute bottom-4 left-4 right-4 flex gap-3 overflow-x-auto pb-1 md:bottom-auto md:left-auto md:right-10 md:top-10 md:block md:h-[500px] md:space-y-4 md:overflow-x-hidden md:overflow-y-auto md:pr-4">
        {banner.map((movie) => (
          <button
            key={movie.id}
            type="button"
            className="relative flex-shrink-0 cursor-pointer overflow-hidden rounded-md"
            onClick={() => setSelectedMovie(movie)}
          >
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className={`h-[82px] w-[130px] object-cover transition-transform md:h-[150px] md:w-[230px] ${
                selectedMovie.id === movie.id ? "scale-105" : ""
              }`}
            />

            <span
              className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity ${
                selectedMovie.id === movie.id
                  ? "opacity-100"
                  : "opacity-0 hover:opacity-80"
              }`}
            />

            {selectedMovie.id === movie.id && (
              <span className="absolute inset-0 rounded-md border-2 border-yellow-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export { Banner };
