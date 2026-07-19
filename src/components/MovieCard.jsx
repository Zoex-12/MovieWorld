import { useState } from "react";

const MovieCard = ({ movies }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <>
      <div className="group relative rounded-lg overflow-hidden shadow-lg">
        <img
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
          src={
            movies.poster_path
              ? `https://image.tmdb.org/t/p/w500${movies.poster_path}`
              : "/placeholder-poster.png"
          }
          alt={movies.title}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h2 className="font-bold text-lg">{movies.title}</h2>
          <p className="text-sm text-gray-300">
            {movies.release_date?.slice(0, 4)}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-yellow-400 text-sm">
              ★ {movies.vote_average?.toFixed(1)}
            </span>
          </div>
          <button
            onClick={() => setIsFavourite((prev) => !prev)}
            className="mt-2 self-start text-xl"
          >
            {isFavourite ? "★" : "☆"}
          </button>
        </div>
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold">
          ★ {movies.vote_average?.toFixed(1)}
        </div>
      </div>
    </>
  );
};
export default MovieCard;
