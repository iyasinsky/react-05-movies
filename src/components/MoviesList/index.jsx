import { Link } from 'react-router-dom';

const MoviesList = ({ movies, to, title }) => {
  return (
    <main>
      {title && <h1>Trending today</h1>}
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${to}${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MoviesList;
