
import React, { useEffect, useState } from 'react';
import { fetchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const HomePage = () => {

   const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a movie name to search.");
      setMovies([]);
      return;
    }
    setError("");
    const data = await fetchMovies(query, page, type);
    if (data && data.Search) {
      setMovies(data.Search);
      setTotalResults(data.totalResults);
    } else {
      setError("No movies found. Try a different keyword.");
    }
  };

  useEffect(() => {
    if (query) handleSearch();
  }, [page, type]);

  return (
    <div>
       <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Movie Search App 🎬</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="border p-2 flex-1"
        />
        <select
          onChange={(e) => setType(e.target.value)}
          className="border p-2"
        >
          <option value="">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4">
          Search
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalResults={totalResults}
        onPageChange={setPage}
      />
    </div>
      
    </div>
  );
};

export default HomePage

 