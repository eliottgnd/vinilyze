import React from 'react';
import { useParams } from 'react-router-dom';
import { vinyles } from '../database';

const GenrePage = () => {
  const { genre } = useParams();
  
  // Configuration spécifique pour chaque genre
  const genreConfig = {
    rock: {
      color: "from-red-600 to-orange-500",
      icon: "🎸",
      description: "Plongez dans l'énergie brute du rock, des riffs légendaires aux solos épiques.",
      pattern: "url('/images/patterns/rock-pattern.svg')"
    },
    jazz: {
      color: "from-blue-600 to-indigo-500",
      icon: "🎷",
      description: "Découvrez l'élégance du jazz, des standards intemporels aux improvisations modernes.",
      pattern: "url('/images/patterns/jazz-pattern.svg')"
    },
    classique: {
      color: "from-purple-600 to-pink-500",
      icon: "🎻",
      description: "Explorez les chefs-d'œuvre de la musique classique à travers les âges.",
      pattern: "url('/images/patterns/classical-pattern.svg')"
    },
    pop: {
      color: "from-pink-500 to-rose-400",
      icon: "🎤",
      description: "Vibrez au rythme des hits pop qui ont marqué leur époque.",
      pattern: "url('/images/patterns/pop-pattern.svg')"
    },
    hiphop: {
      color: "from-yellow-500 to-orange-400",
      icon: "🎧",
      description: "Immergez-vous dans l'univers du hip-hop, des classiques aux pépites underground.",
      pattern: "url('/images/patterns/hiphop-pattern.svg')"
    }
  };

  const currentGenre = genreConfig[genre.toLowerCase()] || {
    color: "from-gray-600 to-gray-500",
    icon: "🎵",
    description: "Découvrez notre sélection de vinyles exceptionnels.",
    pattern: "none"
  };

  // Filtrer les vinyles par genre
  const vinylesGenre = vinyles.filter(vinyl => 
    vinyl.genre && vinyl.genre.toLowerCase() === genre.toLowerCase()
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className={`relative bg-gradient-to-r ${currentGenre.color} py-24`}>
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: currentGenre.pattern }}></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-white text-center">
            <span className="text-6xl mb-6">{currentGenre.icon}</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 capitalize">
              {genre}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
              {currentGenre.description}
            </p>
          </div>
        </div>

        {/* Vague décorative */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" 
                  fill="white"/>
          </svg>
        </div>
      </div>

      {/* Section Vinyles */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          {vinylesGenre.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold mb-4">Aucun vinyle disponible</h2>
              <p className="text-gray-600 text-lg">
                Nous mettons régulièrement à jour notre catalogue. Revenez bientôt !
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vinylesGenre.map((vinyl) => (
                <div key={vinyl.id} 
                     className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                  {vinyl.image && (
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={vinyl.image} 
                        alt={vinyl.titre} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{vinyl.titre}</h2>
                    <p className="text-gray-600 mb-4">{vinyl.artiste}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{vinyl.prix}€</span>
                      <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                        Ajouter
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenrePage; 