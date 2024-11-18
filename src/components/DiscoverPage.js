import React from 'react';
import { vinyles } from '../database';

const DiscoverPage = () => {
  // Simuler une sélection de vinyles de la semaine
  const vinylesOfTheWeek = vinyles.slice(0, 6);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-violet-600 to-indigo-600 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `url('/images/discover-pattern.svg')`,
                 backgroundSize: '30px 30px',
                 opacity: 0.1
               }}></div>
        </div>

        {/* Cercles décoratifs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-white text-center">
            <div className="mb-8 animate-bounce">
              <span className="text-6xl">🎵</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Découvrir
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90 mb-8">
              Les pépites de la semaine sélectionnées par nos experts
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24</div>
                <div className="text-sm opacity-80">Nouveaux vinyles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">6</div>
                <div className="text-sm opacity-80">Genres différents</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1842</div>
                <div className="text-sm opacity-80">Écoutes cette semaine</div>
              </div>
            </div>
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

      {/* Section Vinyles de la semaine */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Vinyles de la semaine
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vinylesOfTheWeek.map((vinyl, index) => (
              <div key={vinyl.id} 
                   className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  {/* Badge Nouveauté */}
                  {index < 3 && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                      Nouveauté
                    </div>
                  )}
                  
                  <img 
                    src={vinyl.image} 
                    alt={vinyl.titre} 
                    className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Informations sur l'image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{vinyl.titre}</h3>
                    <p className="opacity-90">{vinyl.artiste}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-500">{vinyl.genre}</span>
                    <span className="text-2xl font-bold text-primary">{vinyl.prix}€</span>
                  </div>
                  
                  <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Découvrir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage; 