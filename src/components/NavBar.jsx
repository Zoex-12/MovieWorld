import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/movie-logo.png";
import { GiCrossedAirFlows } from "react-icons/gi";
import { FaSkullCrossbones } from "react-icons/fa6";

import { IoSearchSharp } from "react-icons/io5";
import { BASE_URL, API_KEY } from "../api/config";

import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);
  const [searchResults, setSearchResults] = useState([]);
  const [isGenreOpen, setIsGenreOpen] = useState(false);

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      return;
    }

    const searchMovies = async () => {
      try {
        setIsSearching(true);
        const response = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${debouncedQuery}`,
        );

        const data = await response.json();
        setSearchResults(data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setIsSearching(false);
      }
    };
    searchMovies();
  }, [debouncedQuery]);

  return (
    <nav className="flex items-center justify-between px-8 py-1 bg-transparent">
      <div className="logo flex gap-8 items-center">
        <a href="/" className="flex justify-center items-center">
          <img src={logo} alt="logo" className="w-15" />
          <p className="text-2xl">WatchDaddy</p>
        </a>
        <ul className="lg:flex gap-6 ml-4 font-semibold hidden">
          <li>
            <a href="#" className="link relative hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="link relative hover:text-gray-400">
              Top IMDB
            </a>
          </li>
          <li>
            <a href="#" className="link relative hover:text-gray-400">
              Movies
            </a>
          </li>
          <li>
            <a href="#" className="link relative hover:text-gray-400">
              TV Shows
            </a>
          </li>
          <li className="group relative">
            <a
              href="#"
              className="link relative hover:text-gray-400 flex items-center gap-1"
            >
              Genre
            </a>

            <div className="hidden group-hover:block absolute top-full left-0 mt-3 bg-neutral-900 rounded-lg shadow-xl py-2 w-44 border border-white/10 z-50">
              {[
                "Action",
                "Comedy",
                "Drama",
                "Horror",
                "Sci-Fi",
                "Thriller",
                "Romance",
                "Animation",
              ].map((genre) => (
                <a
                  key={genre}
                  href="#"
                  className="link relative  block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-150"
                >
                  {genre}
                </a>
              ))}
            </div>
          </li>
        </ul>
      </div>

      <div className="searchBar hidden lg:block relative w-100 h-10">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-full bg-black/50 backdrop-blur-sm border border-white/20 rounded-full pl-4 pr-16 text-sm text-white placeholder-white/50 outline-none focus:border-gray-500 transition-all duration-300"
          placeholder="Search movies..."
        />

        {query.trim() && searchResults.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-neutral-900 mt-2 rounded-md overflow-hidden max-h-96 overflow-y-auto">
            {searchResults.map((movie) => (
              <div
                key={movie.id}
                className="flex items-center gap-3 p-2 hover:bg-neutral-800"
              >
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                      : "/placeholder.png"
                  }
                  alt={movie.title}
                  className="w-10 h-14 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-semibold">{movie.title}</p>
                  <p className="text-xs text-gray-400">
                    {movie.release_date?.slice(0, 4)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute top-0 right-10 h-full w-8 flex items-center justify-center text-white/70 hover:text-white cursor-pointer"
          >
            <FaSkullCrossbones />
          </button>
        )}

        <button className="searchIcon cursor-pointer absolute top-0 right-0 bg-transparent w-10 h-full rounded-md  flex justify-center items-center text-white text-2xl">
          <IoSearchSharp />
        </button>
      </div>

      {/* Hamburger-menu */}

      <button
        className="lg:hidden text-2xl cursor-pointer z-50"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {!isMenuOpen && <RxHamburgerMenu />}
        {isMenuOpen && <GiCrossedAirFlows />}
      </button>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
        />
      )}

      <div
        className={` lg:hidden fixed top-20 right-0 h-full w-60 bg-neutral-900 z-50 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"} p-4`}
      >
        <div className="searchBar lg:block relative w-full h-10">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-full bg-black/50 backdrop-blur-sm border border-white/20 rounded-full pl-4 pr-16 text-sm text-white placeholder-white/50 outline-none focus:border-gray-500 transition-all duration-300"
            placeholder="Search movies..."
          />
          {query.trim() && searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-neutral-900 mt-2 rounded-md overflow-hidden max-h-96 overflow-y-auto z-50">
              {searchResults.map((movie) => (
                <div
                  key={movie.id}
                  className="flex items-center gap-3 p-2 hover:bg-neutral-800"
                >
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                        : "/placeholder.png"
                    }
                    alt={movie.title}
                    className="w-10 h-14 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-semibold">{movie.title}</p>
                    <p className="text-xs text-gray-400">
                      {movie.release_date?.slice(0, 4)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute top-0 right-10 h-full w-8 flex items-center justify-center text-white/70 hover:text-white cursor-pointer"
            >
              ✕
            </button>
          )}

          <button className="searchIcon cursor-pointer absolute top-0 right-0 bg-transparent w-10 h-full rounded-md  flex justify-center items-center text-white text-2xl">
            <IoSearchSharp />
          </button>
        </div>
        <ul className=" gap-6 ml-4 font-semibold flex flex-col mt-4">
          <li>
            <a href="#" className="link relative hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="link relative hover:text-gray-400">
              Top IMDB
            </a>
          </li>
          <li>
            <a href="#" className="link relative hover:text-gray-400">
              Movies
            </a>
          </li>
          <li>
            <a href="#" className="link relative hover:text-gray-400">
              TV Shows
            </a>
          </li>
          <li>
            <button
              onClick={() => setIsGenreOpen((prev) => !prev)}
              className="flex items-center justify-between w-full link relative hover:text-gray-400"
            >
              Genre
              <span
                className={`transition-transform duration-200 ${isGenreOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>

            {isGenreOpen && (
              <div className="absolute pl-4 mt-1 flex flex-col">
                {[
                  "Action",
                  "Comedy",
                  "Drama",
                  "Horror",
                  "Sci-Fi",
                  "Thriller",
                  "Romance",
                  "Animation",
                ].map((genre) => (
                  <a
                    key={genre}
                    href="#"
                    className="link relative py-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {genre}
                  </a>
                ))}
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
