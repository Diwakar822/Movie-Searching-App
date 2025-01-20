import axios from "axios";

const API_KEY = "94c2abe6";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (searchTerm, page = 1, type = "") => {
  try {
    const response = await axios.get(
      `${BASE_URL}?s=${searchTerm}&type=${type}&page=${page}&apikey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null;
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};