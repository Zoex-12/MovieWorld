import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <>
      <div className="w-70 border-2 border-neutral-700  mb-3 rounded-lg bg-neutral-800 text-white p-4 shadow-md flex flex-col gap-2">
        <h1 className="text-2xl">{movie.title}</h1>
        <p>{movie.release_date}</p>
        <button
          className="cursor-pointer bg-blue-600 px-3 py-1 rounded-2xl hover:bg-blue-400"
          onClick={() => setIsFavourite((prev) => !prev)}
        >
          {isFavourite ? "★ Favorited" : "☆ Favorite"}
        </button>
      </div>
    </>
  );
};
export default MovieCard;
