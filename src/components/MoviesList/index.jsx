import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MoviesList;
