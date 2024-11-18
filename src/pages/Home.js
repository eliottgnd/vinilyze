import React, { useState } from 'react';
import { vinyles, subscriptions } from '../database';
import { CursorArrowRaysIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

function Home() {
  const [email, setEmail] = useState('');
  const [likedVinyles, setLikedVinyles] = useState(new Set());
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedButtons, setSelectedButtons] = useState(new Set());
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLike = (vinylId) => {
    setLikedVinyles(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(vinylId)) {
        newLiked.delete(vinylId);
      } else {
        newLiked.add(vinylId);
      }
      return newLiked;
    });
  };

  const handleArtistSelect = (artistName, color) => {
    setSelectedArtist({
      name: artistName,
      color: color
    });
    
    // Ajouter/Retirer l'artiste des sélectionnés
    setSelectedButtons(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(artistName)) {
        newSelected.delete(artistName);
      } else {
        newSelected.add(artistName);
      }
      return newSelected;
    });
    
    setTimeout(() => {
      setSelectedArtist(null);
    }, 3000);
  };

  const handleSubscribe = (subscription) => {
    // Ajouter l'abonnement au panier
    const subscriptionItem = {
      id: subscription.id,
      titre: `Abonnement ${subscription.name}`,
      prix: subscription.price,
      type: 'subscription',
      quantite: 1
    };

    // Utiliser la fonction handleAddToCart du composant parent App
    window.dispatchEvent(new CustomEvent('addToCart', { 
      detail: subscriptionItem 
    }));
  };

  const nextArtist = () => {
    setCurrentArtistIndex((prev) => (prev + 1) % artists.length);
  };

  const previousArtist = () => {
    setCurrentArtistIndex((prev) => (prev - 1 + artists.length) % artists.length);
  };

  const artists = [
    { 
      name: "Jazzy Blue", 
      color: "teal-500", 
      hoverColor: "teal-600", 
      image: "images/artists/jazz-artist.jpg"
    },
    { 
      name: "Electric Storm", 
      color: "pink-500", 
      hoverColor: "pink-600", 
      image: "images/artists/rock-artist.jpg"
    },
    { 
      name: "Symphony X", 
      color: "red-500", 
      hoverColor: "red-600", 
      image: "images/artists/classical-artist.jpg"
    },
    { 
      name: "Neon Pulse", 
      color: "purple-500", 
      hoverColor: "purple-600", 
      image: "images/artists/pop-artist.jpg"
    },
    { 
      name: "Digital Wave", 
      color: "blue-500", 
      hoverColor: "blue-600", 
      image: "images/artists/electronic-artist.jpg"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Découvrez le monde du vinyle
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 md:mb-16">
          en ligne.
        </h2>

        {/* Formulaire d'abonnement */}
        <div className="max-w-2xl mx-auto mb-12 md:mb-20 px-4">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Souscrire à l'abonnement
            </button>
          </form>
        </div>

        {/* Cards Section */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 mb-32">
          {/* Card de gauche - Stats */}
          <div className="bg-white p-8 rounded-2xl shadow-lg transform -rotate-6 w-80">
            <div className="text-left">
              <div className="flex items-center mb-2">
                <span className="text-5xl font-bold">68</span>
                <span className="ml-2 text-gray-500">100%</span>
              </div>
              <p className="text-gray-600 text-lg">
                Ce mois-ci le : <span className="text-primary">Jazz</span> a<br />
                été votre genre favoris :)
              </p>
            </div>
          </div>

          {/* Cercle central */}
          <div className="w-64 h-64 bg-gradient-to-br from-primary to-purple-300 rounded-full shadow-lg" />

          {/* Card de droite - Calendrier */}
          <div className="bg-white p-6 rounded-2xl shadow-lg transform rotate-6">
            <div className="text-left">
              <p className="font-bold mb-2">Recevez votre vinyle de la semaine !</p>
              <div className="grid grid-cols-7 gap-1 text-sm">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className={`w-6 h-6 flex items-center justify-center ${[10, 15, 20].includes(i) ? 'bg-primary text-white rounded-full' : ''}`}>
                    {i + 1}
                  </div>
                ))}
              </div>
              <p className="mt-2 text-gray-600">Janvier</p>
              <p className="text-xs text-primary">C'est du rock !</p>
            </div>
          </div>

          {/* Carte rose - Maintenant positionnée par rapport à la section des cartes */}
          <div className="absolute -bottom-40 left-0">
            <div className="bg-pink-500 text-white p-6 rounded-2xl shadow-lg max-w-xs transform -rotate-12">
              <p className="text-sm mb-1">Naviguez de nouveaux</p>
              <p className="text-sm mb-4">
                <span className="text-pink-200">genres</span>/<span className="text-pink-300">artistes</span>.
              </p>
              <h3 className="text-xl font-bold mb-1">Hiro Kentaro</h3>
              <p className="text-sm mb-3">
                Hiro Kentaro est un brillant pianiste de 21 ans<br />
                tout droit sorti de la capitale Tokyo.
              </p>
              <button className="text-sm text-white/80 hover:text-white">
                Je veux découvrir !
              </button>
              <div className="flex mt-2 gap-1">
                <span className="w-2 h-2 bg-white rounded-full opacity-60" />
                <span className="w-2 h-2 bg-white rounded-full" />
                <span className="w-2 h-2 bg-white rounded-full opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Styles en un clic */}
      <div className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-20">
            Parcourez tous les styles en <span className="text-primary">un clic</span>.
          </h1>

          {/* Curseur au centre */}
          <div className="flex justify-center mb-16">
            <CursorArrowRaysIcon className="w-12 h-12 text-gray-800" />
          </div>

          {/* Message de recommandation */}
          {selectedArtist && (
            <div 
              className={`fixed top-4 right-4 bg-${selectedArtist.color} text-white px-6 py-3 rounded-lg shadow-lg z-50`}
              style={{ 
                animation: 'slideIn 0.3s ease-out',
                backgroundColor: selectedArtist.color === 'teal-500' ? '#14b8a6' :
                               selectedArtist.color === 'pink-500' ? '#ec4899' :
                               selectedArtist.color === 'red-500' ? '#ef4444' :
                               selectedArtist.color === 'purple-500' ? '#a855f7' :
                               '#3b82f6'  // blue-500 par défaut
              }}
            >
              <p className="font-medium">
                Vous serez recommandé(e) par {selectedArtist.name} ! 🎵
              </p>
            </div>
          )}

          {/* Cartes des artistes */}
          <div className="relative max-w-md mx-auto">
            {/* Bouton précédent */}
            <button 
              onClick={previousArtist}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 z-10"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
            </button>

            {/* Carte de l'artiste */}
            <div className="transform transition-all duration-500">
              <img 
                src={artists[currentArtistIndex].image}
                alt={artists[currentArtistIndex].name}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <p className="text-center font-medium mt-4 mb-2">
                {artists[currentArtistIndex].name}
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => handleArtistSelect(
                    artists[currentArtistIndex].name, 
                    artists[currentArtistIndex].color
                  )}
                  style={{
                    backgroundColor: selectedButtons.has(artists[currentArtistIndex].name) 
                      ? artists[currentArtistIndex].color === 'teal-500' ? '#14b8a6' 
                      : artists[currentArtistIndex].color === 'pink-500' ? '#ec4899'
                      : artists[currentArtistIndex].color === 'red-500' ? '#ef4444'
                      : artists[currentArtistIndex].color === 'purple-500' ? '#a855f7'
                      : '#3b82f6'
                      : 'transparent',
                    borderColor: artists[currentArtistIndex].color === 'teal-500' ? '#14b8a6' 
                      : artists[currentArtistIndex].color === 'pink-500' ? '#ec4899'
                      : artists[currentArtistIndex].color === 'red-500' ? '#ef4444'
                      : artists[currentArtistIndex].color === 'purple-500' ? '#a855f7'
                      : '#3b82f6'
                  }}
                  className="w-4 h-4 rounded-full border-2 transition-all duration-200"
                  aria-label={`Sélectionner ${artists[currentArtistIndex].name}`}
                />
              </div>
            </div>

            {/* Bouton suivant */}
            <button 
              onClick={nextArtist}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 z-10"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-800" />
            </button>

            {/* Indicateurs */}
            <div className="flex justify-center space-x-2 mt-4">
              {artists.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentArtistIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentArtistIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section Abonnements */}
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nos Abonnements
          </h2>
          <p className="text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Choisissez la formule qui vous correspond et recevez vos vinyles directement chez vous
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {subscriptions.map((sub) => (
              <div 
                key={sub.id}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden
                  ${sub.isPopular ? 'ring-2 ring-primary transform scale-105' : ''}
                `}
              >
                {sub.isPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                    Populaire
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{sub.name}</h3>
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-bold">{sub.price}€</span>
                    <span className="text-gray-500 ml-2">/{sub.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {sub.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSubscribe(sub)}
                    className={`w-full py-3 px-6 rounded-full font-semibold transition-colors
                      ${sub.isPopular 
                        ? 'bg-primary text-white hover:bg-primary/90' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                  >
                    S'abonner
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section CTA */}
      <div className="bg-white text-gray-900 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Logo animé */}
            <div className="flex-1 relative">
              <div 
                className="w-48 h-48 md:w-80 md:h-80 mx-auto animate-spin-slow"
              >
                <img 
                  src="/images/logo.png"
                  alt="Vinilyze Logo" 
                  className="w-full h-full object-contain"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full"
                  style={{ 
                    animation: 'pulse 2s ease-in-out infinite',
                    mixBlendMode: 'overlay'
                  }}
                />
              </div>
            </div>

            {/* Texte CTA */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Prêt à commencer votre voyage musical ?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Rejoignez notre communauté de passionnés et recevez chaque mois une sélection unique de vinyles directement chez vous.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 