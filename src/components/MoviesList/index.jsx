import { Link } from 'react-router-dom';

const MoviesList = ({ movies, to, title, location }) => (
  <main>
    {title && <h1>Trending today</h1>}
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${to}${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </main>
);

export default MoviesList;
