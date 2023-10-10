import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/movieApi';
import MovieCard from 'components/MovieCard';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        setError(null);
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    })();
  }, [movieId]);

  return (
    <>
      {loader && <p>Loading...</p>}
      {error && <p>Oops... {error}. Please reload the page to try again.</p>}
      {movie && <MovieCard movie={movie} />}
      <Suspense fallback={<p>MovieDetails Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
