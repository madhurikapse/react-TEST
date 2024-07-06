import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from './redux/action';
import SearchBar from './componets/SearchBar';
import MovieList from './componets/List';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="App">
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default App;
