import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieApi';
import ReviewsList from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        setError(null);
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
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
      {reviews && <ReviewsList reviews={reviews} />}
    </>
  );
};

export default Reviews;
