import React from 'react';
import VinylList from '../components/VinylList';

function Shop({ selectedCategorie, onAddToCart }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {selectedCategorie ? `Collection ${selectedCategorie}` : 'Notre Collection'}
      </h1>
      <VinylList 
        selectedCategorie={selectedCategorie}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}

export default Shop; 