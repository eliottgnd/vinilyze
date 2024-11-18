import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBagIcon, 
  ChevronDownIcon,
  MusicalNoteIcon,
  SparklesIcon,
  StarIcon,
  HeartIcon,
  XMarkIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleAddToCart = (event) => {
      setCartCount(prev => prev + 1);
      setCartItems(prev => [...prev, event.detail]);
    };

    window.addEventListener('addToCart', handleAddToCart);
    return () => window.removeEventListener('addToCart', handleAddToCart);
  }, []);

  const removeFromCart = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
    setCartCount(prev => prev - 1);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo à gauche */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/images/logo.png" alt="Vinilyze" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-semibold text-gray-800">Vinilyze</span>
            </Link>
          </div>

          {/* Burger Menu pour Mobile */}
          <button 
            className="lg:hidden p-2 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              Accueil
            </Link>
            
            {/* Dropdown Catégories */}
            <div className="relative">
              <button 
                className={`flex items-center text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-[20px] border-2 border-primary
                  ${isDropdownOpen ? 'bg-primary/10' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Catégories
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-[20px] shadow-lg py-2 z-50 border-2 border-primary">
                  <Link to="/categorie/rock" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <SparklesIcon className="w-5 h-5 mr-2" />
                    Rock
                  </Link>
                  <Link to="/categorie/jazz" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <MusicalNoteIcon className="w-5 h-5 mr-2" />
                    Jazz
                  </Link>
                  <Link to="/categorie/classique" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <StarIcon className="w-5 h-5 mr-2" />
                    Classique
                  </Link>
                  <Link to="/categorie/pop" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                    <HeartIcon className="w-5 h-5 mr-2" />
                    Pop
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/decouvrir" 
              className="bg-gradient-to-r from-primary/80 to-purple-500/80 bg-clip-text text-transparent font-semibold hover:from-primary hover:to-purple-500 transition-all"
            >
              Découvrir
            </Link>
            
            {/* Panier */}
            <div className="relative">
              <button 
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 hover:text-primary transition-colors"
              >
                <ShoppingBagIcon className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Dropdown du panier */}
              {isCartOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-[20px] shadow-lg py-4 z-50 border-2 border-primary">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="font-semibold">Mon Panier</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {cartCount === 0 ? (
                      <p className="text-center py-4 text-gray-500">Votre panier est vide</p>
                    ) : (
                      <div className="p-4 space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">{item.titre}</p>
                              <p className="text-sm text-gray-500">{item.prix}€</p>
                            </div>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <XMarkIcon className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="px-4 pt-4 border-t border-gray-100">
                    <button 
                      onClick={() => {
                        setIsCartOpen(false);
                      }}
                      className="w-full bg-primary text-white py-2 px-4 rounded-full text-center block hover:bg-primary/90 transition-colors"
                    >
                      Valider
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div 
              className="fixed inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="fixed inset-x-4 top-20 bg-white rounded-3xl shadow-xl">
              {/* Bouton de fermeture */}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <div className="p-6 pt-12">
                <div className="space-y-6">
                  <Link 
                    to="/" 
                    className="block text-lg text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Accueil
                  </Link>
                  
                  <div className="space-y-4">
                    <p className="text-lg font-semibold text-gray-800">Catégories</p>
                    {['Rock', 'Jazz', 'Classique', 'Pop'].map((category) => (
                      <Link 
                        key={category}
                        to={`/categorie/${category.toLowerCase()}`}
                        className="block pl-4 text-gray-600 hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                  
                  <Link 
                    to="/decouvrir" 
                    className="block text-lg bg-gradient-to-r from-primary/80 to-purple-500/80 bg-clip-text text-transparent font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Découvrir
                  </Link>

                  {/* Panier Mobile */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800">Panier</span>
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                        {cartCount} articles
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 