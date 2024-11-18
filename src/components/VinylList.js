import React from 'react';

const VinylList = ({ vinyles }) => {
  return (
    <div className="vinyl-container">
      <h1 className="text-4xl font-bold text-center mb-8">
        Parcourez tous les styles en <span className="text-purple-500">un clic</span>.
      </h1>
      
      <div className="vinyl-cards-wrapper">
        {vinyles.map((vinyl) => (
          <div key={vinyl.id} className="vinyl-card">
            <img 
              src={vinyl.image} 
              alt={vinyl.nom} 
              className="vinyl-image"
            />
          </div>
        ))}
      </div>

      <div className="dots-container">
        {vinyles.map((_, index) => (
          <div key={index} className={`dot ${index === 0 ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
};

export default VinylList; 