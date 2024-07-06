import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/action';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = useCallback((event) => {
    dispatch(setSearch(event.target.value));
  }, [dispatch]);

  return (
    <input type="text" placeholder="Search movies..." onChange={handleSearch} />
  );
};

export default SearchBar;
