import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Items from './Items'

const MovieList = () => {
  const movies = useSelector((state) => state.movies);
  const search = useSelector((state) => state.search);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));
  }, [movies, search]);

  return (
    <div>
      {filteredMovies.map((movie) => (
        <Items key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
