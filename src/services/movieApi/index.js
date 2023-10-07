import axios from 'axios';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGRmMDU3OGRjZGY5MTI1ZDc2ODJjZGM4ZjI5OTgxNCIsInN1YiI6IjY1MWMyNGNkZWE4NGM3MDEyZDY4ZGQzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CJJggDEbn8DFqi3dO3RURsa-rEY1nTsrIWBqmCJl1go';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const getTrending = async () => {
  const { data } = await axios.get('trending/movie/week');
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`movie/${id}`);
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(`movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`);
  return data;
};
