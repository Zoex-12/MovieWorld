import { useEffect, useState } from "react";
import { BASE_URL, API_KEY } from "../api/config";
const useMovie = () => {
  const [movies, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
        );
        const data = await response.json();
        setMovie(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);
  return { movies, isLoading, error };
};

export default useMovie;
