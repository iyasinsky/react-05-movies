import { useEffect, useState } from 'react';
import { getTrending } from 'services/movieApi';
import MoviesList from 'components/MoviesList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        setError(null);
        const { results } = await getTrending();
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    })();
  }, []);

  return (
    <>
      {movies && (
        <MoviesList movies={movies} to="movies/" title location={location} />
      )}
      {loader && <p>Loading...</p>}
      {error && <p>Oops... {error}. Please reload the page to try again.</p>}
    </>
  );
};

export default Home;
