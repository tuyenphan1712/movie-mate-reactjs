import React, { useEffect, useState } from "react";
import { UpComingMovieCard } from "./UpComingMovieCard";
import { useNavigate } from "react-router-dom";
import { ROUTING_MOVIELIST_UC } from "../router/path";

const UpComingMovieList = ({ movies = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [groupSize, setGroupSize] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const updateGroupSize = () => {
      setGroupSize(window.innerWidth < 768 ? 1 : 4);
      setCurrentIndex(0);
    };

    updateGroupSize();
    window.addEventListener("resize", updateGroupSize);

    return () => window.removeEventListener("resize", updateGroupSize);
  }, []);

  const groupMovies = (items, groupSize) => {
    const result = [];
    for (let i = 0; i < items.length; i += groupSize) {
      result.push(items.slice(i, i + groupSize));
    }
    return result;
  };

  const movieGroups = groupMovies(movies, groupSize);
  const groupCount = movieGroups.length || 1;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : movieGroups.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < movieGroups.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleSeeMore = () => {
    navigate(ROUTING_MOVIELIST_UC);
  };

  return (
    <div className="bg-transparent py-8">
      <div className="mb-6 text-center text-xl font-bold text-white md:text-2xl">
        PHIM SẮP CHIẾU
      </div>
      <div className="relative mb-6 flex items-center justify-center gap-2 md:gap-0">
        <button
          onClick={handlePrev}
          className="left-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 p-2 text-white transition hover:bg-gray-700 md:h-auto md:w-auto"
        >
          {"<"}
        </button>

        <div className="w-full overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / groupCount)}%)`,
              width: `${groupCount * 100}%`,
            }}
          >
            {movieGroups.map((group, index) => (
              <div
                key={index}
                className="grid w-full grid-cols-1 justify-items-center gap-4 px-1 md:mx-2 md:flex md:justify-around md:gap-0 md:px-0"
              >
                {group.map((movie) => (
                  <UpComingMovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="right-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 p-2 text-white transition hover:bg-gray-700 md:h-auto md:w-auto"
        >
          {">"}
        </button>
      </div>

      <div className="text-center mt-4">
        <button
          className="w-[200px] bg-[#9CB2F5] text-black font-bold py-2 px-6 rounded-sm hover:bg-blue-600 transition"
          onClick={handleSeeMore}
        >
          XEM THÊM
        </button>
      </div>
    </div>
  );
};

export { UpComingMovieList };
