import React from 'react';
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="border p-4">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
        className="w-full h-40 object-cover"
      />
      <h3 className="text-lg font-bold">{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link to={`/details/${movie.imdbID}`} className="text-blue-500">
        View Details
      </Link>
    </div>
    </div>
  );
};

export default MovieCard;