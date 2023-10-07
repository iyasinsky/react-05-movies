import { Link } from 'react-router-dom';
import { Wrapper } from './index.styled';

const BASE_URL = 'https://image.tmdb.org/t/p/w300/';
const DEFAULT_IMG = 'https://placehold.co/300x450';

const MovieCard = ({
  movie: { poster_path, title, release_date, vote_average, overview, genres },
}) => {
  const posterImg = poster_path ? `${BASE_URL}${poster_path}` : DEFAULT_IMG;

  return (
    <>
      <Wrapper>
        <img src={posterImg} alt={title} />
        <div>
          <h3>
            {title} ({parseInt(release_date)})
          </h3>
          <p>User Score: {vote_average.toFixed(1)}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Ganres</h3>
          <p>{genres?.map(({ name }) => name).join(', ')}</p>
        </div>
      </Wrapper>
      <hr />
      <p>Adittional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
    </>
  );
};

export default MovieCard;
