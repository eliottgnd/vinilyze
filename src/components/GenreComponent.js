import React from 'react';
import { useParams } from 'react-router-dom';

const GenreComponent = () => {
  const { genre } = useParams();

  return (
    <div className="genre-container">
      <h1 className="genre-title">{genre}</h1>
      <div className="genre-content">
        <p>Collection de vinyles {genre}</p>
        {/* Nous pourrons ajouter ici la liste des vinyles filtrée par genre */}
      </div>
    </div>
  );
};

export default GenreComponent; 