import axios from 'axios';

export const getTrending = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=44df0578dcdf9125d7682cdc8f299814`
  );
  return data.results;
};
