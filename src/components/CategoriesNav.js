import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesNav = () => {
  const genres = ['Rock', 'Jazz', 'Hip-Hop', 'Classique', 'Pop', 'Soul'];

  return (
    <div className="categories-nav">
      {genres.map((genre) => (
        <Link 
          key={genre} 
          to={`/genre/${genre.toLowerCase()}`}
          className="category-link"
        >
          {genre}
        </Link>
      ))}
    </div>
  );
};

export default CategoriesNav; 