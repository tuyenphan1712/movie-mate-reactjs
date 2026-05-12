import React, { useState } from "react";
import { NowShowingMovieCard } from "../components/NowShowingMovieCard";
import { useMovies } from "../context/MovieContext";

const defaultImages = Array.from({ length: 16 }, (_, index) =>
  require(`../asset/NowShowingMovie${index}.jpg`)
);

const MovieListNS = () => {
  const { movies } = useMovies();
  const nowShowingMovies = movies.nowShowing || [];
  const [visibleMovies, setVisibleMovies] = useState(12);

  const handleSeeMore = () => {
    setVisibleMovies(visibleMovies + 4);
  };

  return (
    <div className="bg-[#151515] min-h-screen flex flex-col">
      <div className="container w-[90%] mx-auto px-8 py-4 flex-1">
        <div className="flex justify-center items-center mt-4 mb-10 p-4 bg-blue-950 rounded-lg">
          <h2 className="text-white text-2xl font-bold">
            DANH SÁCH PHIM ĐANG CHIẾU
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-x-1 gap-y-8 mb-8 justify-items-center">
          {nowShowingMovies.slice(0, visibleMovies).map((movie, index) => (
            <NowShowingMovieCard
              key={movie.id}
              movie={movie}
              image={movie.poster || defaultImages[index % defaultImages.length]}
            />
          ))}
        </div>
      </div>

      {visibleMovies < nowShowingMovies.length && (
        <div className="flex justify-center items-center mb-8">
          <button
            onClick={handleSeeMore}
            className="w-[200px] bg-blue-500 text-black font-bold py-2 px-6 rounded-sm hover:bg-blue-600 transition"
          >
            Xem thêm
          </button>
        </div>
      )}
    </div>
  );
};

export { MovieListNS };
