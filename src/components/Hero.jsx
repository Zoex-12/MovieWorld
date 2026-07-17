import { FaPlay } from "react-icons/fa";

import { useEffect, useState } from "react";
const Hero = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const SLIDE_INTERVAL_MS = 5000;

  useEffect(() => {
    const interVal = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(interVal);
  }, [movies.length]);

  const currentMovie = movies[currentIndex];
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
      <div className="absolute bottom-10 left-8 max-w-lg">
        <h1 className="text-4xl font-bold mb-2">{currentMovie.title}</h1>
        <div className="flex gap-3 items-center mb-3 text-sm">
          <span className="bg-green-600 px-2 py-1 rounded">HD</span>
          <span>★ {currentMovie.vote_average.toFixed(1)} IMDB</span>
        </div>
        <button className="bg-green-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 flex justify-center items-center gap-2 cursor-pointer">
          <FaPlay /> Watch Now
        </button>
      </div>
    </div>
  );
};
export default Hero;
