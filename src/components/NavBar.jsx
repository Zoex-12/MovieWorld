import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/movie-logo.png";
import { GiCrossedAirFlows } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";

import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <li>
            <a href="#" className="link relative hover:text-gray-400">
              Genre
            </a>
          </li>
        </ul>
      </div>

      <div className="searchBar hidden lg:block relative w-100 h-10">
        <input
          type="text"
          className="border-2 w-full border-gray-400 bg-black/40 px-4 py-2 rounded-lg h-full"
          placeholder="Search movies..."
        />
        <button
          className="searchIcon cursor-pointer absolute top-0 right-0 bg-transparent w-10 h-full rounded-md  flex justify-center items-center text-white text-2xl"
          aria-label="Toggle menu"
        >
          <IoSearchSharp />
        </button>
      </div>

      {/* Hamburger-menu */}

      <button
        className="lg:hidden text-2xl cursor-pointer z-50"
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
        className={` lg:hidden fixed top-20 right-0 h-full w-60 bg-neutral-900 z-50 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"} p-4`}
      >
        <div className="searchBar lg:block relative w-full h-10">
          <input
            type="text"
            className="border-2 w-full border-white bg-black/40 px-4 py-2 rounded-md h-full"
            placeholder="Search movies..."
          />
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
            <a href="#" className="link relative hover:text-gray-400">
              Genre
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
