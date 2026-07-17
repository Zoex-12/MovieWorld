import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import useMovie from "../hooks/useMovie";

const HomePage = () => {
  const { movies, isLoading, error } = useMovie();
  return (
    <>
      <div className="wrapper min-h-screen relative">
        <div className="absolute top-0 left-0 w-full z-50 navigation">
          <NavBar />
        </div>
        <div className="Hero-section">
          {isLoading && <p>Loading ...</p>}
          {error && <p>{error}</p>}
          {!isLoading && !error && <Hero movies={movies} />}
        </div>
      </div>
    </>
  );
};

export default HomePage;
