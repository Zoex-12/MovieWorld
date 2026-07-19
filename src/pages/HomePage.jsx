import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
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

        {isLoading && <p>Loading ...</p>}
        {error && <p>{error}</p>}

        {!isLoading && !error && (
          <>
            <div className="Hero-section">
              <Hero movies={movies} />
            </div>

            <div className="Movies-section grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-8 py-6">
              {movies.map((movie) => (
                <MovieCard movies={movie} key={movie.id} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
