import moviesData from "./MovieData";

const normalizeMovie = (movie, index, status) => {
  const name = movie.name || movie.title || `Movie ${index + 1}`;

  return {
    ...movie,
    id: movie.id || `${status.toLowerCase()}-${index + 1}`,
    name,
    title: movie.title || name,
    duration: movie.duration || movie.time || "2h 4m",
    poster: movie.poster,
    rating: movie.rating || "N/A",
    status,
    genre: movie.genre || "Hanh dong",
    genres: movie.genres || movie.genre?.split(",") || ["Hanh dong"],
    classify: movie.classify || "T13",
    director: movie.director || "MovieMate",
    actor: movie.actor || "Dang cap nhat",
    origin: movie.origin || "Dang cap nhat",
    language: movie.language || "Dang cap nhat",
    opening: movie.opening || "2024-12-01",
    description:
      movie.description ||
      `${name} hien dang co lich chieu tai MovieMate. Hay chon suat chieu va ghe ngoi phu hop de dat ve.`,
    trailer: movie.trailer || "#",
  };
};

const localMoviesData = {
  ...moviesData,
  nowShowing: moviesData.nowShowing.map((movie, index) =>
    normalizeMovie(movie, index, "NOW_SHOWING")
  ),
  upcoming: moviesData.upcoming.map((movie, index) =>
    normalizeMovie(movie, index, "UPCOMING")
  ),
};

const allMovies = [...localMoviesData.nowShowing, ...localMoviesData.upcoming];

export const getLocalMoviesData = () => localMoviesData;

export const getLocalMovies = () => allMovies;

export const getLocalMovieById = (id) =>
  allMovies.find((movie) => String(movie.id) === String(id)) || allMovies[0];
