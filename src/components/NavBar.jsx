const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-transparent">
      <div className="logo flex gap-2 items-center">
        <p className="text-2xl">WatchDaddy</p>
        <ul className="flex gap-6 ml-4">
          <li>
            <a href="" className="link relative">
              Home
            </a>
          </li>
          <li>
            <a href="" className="link relative">
              Top IMDB
            </a>
          </li>
          <li>
            <a href="" className="link relative">
              Movies
            </a>
          </li>
          <li>
            <a href="" className="link relative">
              TV Shows
            </a>
          </li>
          <li>
            <a href="" className="link relative">
              Genre
            </a>
          </li>
        </ul>
      </div>

      <div className="searchBar">
        <input type="text" className="border-2 border-white" />
      </div>
    </nav>
  );
};
export default NavBar;
