import { SET_MOVIES, SET_SEARCH } from './action';

const initialState = {
  movies: [],
  search: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    case SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default reducer;
