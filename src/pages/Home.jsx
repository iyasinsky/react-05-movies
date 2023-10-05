import { useEffect, useState } from 'react';
import { getTrending } from 'services/movieApi';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    console.log('use Effect -> setMovies');
    (async () => {
      const data = await getTrending();
      setMovies(data);
    })();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map(({ id, title }) => {
            return <li key={id}>{title}</li>;
          })}
        </ul>
      )}
    </main>
  );
};
