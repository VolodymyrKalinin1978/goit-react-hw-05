import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzAzMWM0NzczM2ZlYWVhZmQ4ZTQ5MzBmNGM0MmQxNyIsInN1YiI6IjY1YzhlYTYzYTkzZDI1MDE0OTRhZTNhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CqCOiyzWdkTkQ_cBRjHq08lUb5G9Tmt42SqaXM97Rlk'
  }
};
// const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const fetchMovies = async ({abortController}) => {
  const response = await axios.get('/trending/movie/day?language=en-US',  options, {
    signal: abortController.signal,
  } );
  return response.data.results;
};

export default fetchMovies;

export  const getMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?language=en-US`,  options);
  return response.data;
};

export  const getMovieCredits = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits?language=en-US`,  options);
  return response.data.cast;
};

export  const getMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews?language=en-US&page=1`,  options);
  
  return response.data.results;
};

export  const getMovieSearch = async (searchQuery) => {
  const response = await axios.get(`/search/movie?query=${searchQuery}`,  options);
  
  return response.data.results;
};