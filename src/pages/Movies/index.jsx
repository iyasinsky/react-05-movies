import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/movieApi';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') return setSearchParams({});

    (async () => {
      const { results } = await searchMovies(searchQuery);
      setMovies(results);
    })();
  }, [searchQuery, setSearchParams]);

  const onFormSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.input.value;
    setSearchParams({ query });
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="input" placeholder="Enter the movie title" />
        <button type="submit">Search</button>
      </form>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};
export default Movies;
