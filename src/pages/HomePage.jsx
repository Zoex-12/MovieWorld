import NavBar from "../components/NavBar";
import useMovie from "../hooks/useMovie";

const HomePage = () => {
  const { movies, isLoading, error } = useMovie();
  return (
    <>
      <div className="wrapper min-h-screen container">
        <NavBar />
      </div>
    </>
  );
};

export default HomePage;
