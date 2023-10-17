import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/movieApi';
import CastList from 'components/CastList';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        setError(null);
        const { cast } = await getMovieCredits(movieId);
        setCast(cast);
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
      {cast && <CastList cast={cast} />}
    </>
  );
};

export default Cast;
