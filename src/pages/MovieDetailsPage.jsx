import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";

const MovieDetailsPage = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    fetchDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>

       <div className="p-5">
      <h1 className="text-2xl font-bold">{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} className="w-1/3 my-4" />
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Ratings:</strong> {movie.imdbRating}</p>
    </div>

    </div>
  );
};

export default MovieDetailsPage;