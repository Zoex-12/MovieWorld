import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/movie-logo.png";
import { GiCrossedAirFlows } from "react-icons/gi";

import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-transparent">
      <div className="logo flex gap-8 items-center">
        <a href="/" className="flex justify-center items-center">
          <img src={logo} alt="logo" className="w-15" />
          <p className="text-2xl">WatchDaddy</p>
        </a>
        <ul className="lg:flex gap-6 ml-4 font-semibold hidden">
          <li>
            <a href="" className="link relative hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="" className="link relative hover:text-gray-400">
              Top IMDB
            </a>
          </li>
          <li>
            <a href="" className="link relative hover:text-gray-400">
              Movies
            </a>
          </li>
          <li>
            <a href="" className="link relative hover:text-gray-400">
              TV Shows
            </a>
          </li>
          <li>
            <a href="" className="link relative hover:text-gray-400">
              Genre
            </a>
          </li>
        </ul>
      </div>

      <div className="searchBar hidden lg:block">
        <input
          type="text"
          className="border-2 border-white bg-black/40 px-4 py-2 rounded-2xl"
          placeholder="Search movies..."
        />
      </div>

      {/* Hamburger-menu */}

      <button
        className="lg:hidden text-2xl cursor-pointer"
        onClick={() => setIsMenuOpen((prev) => !prev)}
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
        className={` lg:hidden fixed top-20 right-0 h-full w-54 bg-neutral-900 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className=" gap-6 ml-4 font-semibold flex flex-col mt-4">
          <li>
            <a href="" className="link relative hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="" className="link relative hover:text-gray-400">
              Top IMDB
            </a>
          </li>
          <li>
            <a href="" className="link relative hover:text-gray-400">
              Movies
            </a>
          </li>
          <li>
            <a href="" className="link relative hover:text-gray-400">
              TV Shows
            </a>
          </li>
          <li>
            <a href="" className="link relative hover:text-gray-400">
              Genre
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
