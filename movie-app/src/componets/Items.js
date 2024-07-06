import React, { memo } from 'react';

const Item = memo(({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
    </div>
  );
});

export default Item;
