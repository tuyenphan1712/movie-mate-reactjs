import { getLocalMovieById, getLocalMovies } from "../../data/movieStore";

export const getMovie = async () => {
  return getLocalMovies();
};

export const getMovieById = async (id) => {
  return getLocalMovieById(id);
};

export const createMovie = async (movie) => {
  return {
    id: `local-${Date.now()}`,
    ...movie,
  };
};

export const updateMovie = async (movie) => {
  return movie;
};

export const deleteMovie = async (id) => {
  return { id };
};
