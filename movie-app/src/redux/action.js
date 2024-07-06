import axios from 'axios';

export const SET_MOVIES = 'SET_MOVIES';
export const SET_SEARCH = 'SET_SEARCH';

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get('https://movie-database8.p.rapidapi.com/api/v1/movies', {
      headers: {
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
        'X-RapidAPI-Host': 'movie-database8.p.rapidapi.com',
      },
    });
    dispatch({ type: SET_MOVIES, payload: response.data });
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

export const setSearch = (search) => {
  return {
    type: SET_SEARCH,
    payload: search,
  };
};
