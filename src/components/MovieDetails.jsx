import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
    const { id } = useParams(); // Get the movie ID from the URL
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
          try {
            const response = await axios.get(
              `https://www.omdbapi.com/?i=${id}&apikey=94c2abe6`
            );
            setMovieDetails(response.data);
            setLoading(false);
          } catch (error) {
            setError("Failed to fetch movie details");
            setLoading(false);
          }
        };
    
        fetchMovieDetails();
      }, [id]);
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;
    
      if (!movieDetails) return <p>No details available</p>;
  
    return (
        <div>
            <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={movieDetails.Poster !== "N/A" ? movieDetails.Poster : "https://via.placeholder.com/500"}
          alt={movieDetails.Title}
          className="w-full md:w-1/3 object-cover"
        />
        <div className="md:ml-6">
          <h2 className="text-3xl font-bold">{movieDetails.Title}</h2>
          <p className="text-lg text-gray-700">{movieDetails.Year}</p>
          <p className="mt-2">{movieDetails.Plot}</p>
          <div className="mt-4">
            <p><strong>Genre:</strong> {movieDetails.Genre}</p>
            <p><strong>Ratings:</strong> {movieDetails.Ratings?.map(rating => (
              <span key={rating.Source}>{rating.Source}: {rating.Value} </span>
            ))}</p>
            <p><strong>Actors:</strong> {movieDetails.Actors}</p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default MovieDetails;