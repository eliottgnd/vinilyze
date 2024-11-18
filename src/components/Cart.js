import React from 'react';
import { 
  ShoppingCartIcon, 
  SparklesIcon,
  RocketLaunchIcon,
  TrophyIcon,
  CreditCardIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

// Mapping des icônes pour les abonnements
const subscriptionIcons = {
  'Découverte': SparklesIcon,
  'Passionné': RocketLaunchIcon,
  'Collectionneur': TrophyIcon
};

function Cart({ cartItems, onUpdateQuantity, onRemoveItem, onClose }) {
  const total = cartItems?.reduce((sum, item) => sum + item.prix * item.quantite, 0) || 0;

  const handleCheckout = () => {
    // Logique de paiement à implémenter
    alert('Redirection vers la page de paiement...');
  };

  // Gestionnaire pour empêcher la propagation du clic depuis le panier
  const handleCartClick = (e) => {
    e.stopPropagation();
  };

  return (
    // Le div extérieur gère le clic pour fermer
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      {/* Le contenu du panier empêche la propagation du clic */}
      <div 
        className="absolute right-0 top-0 h-full w-96 bg-white shadow-lg"
        onClick={handleCartClick}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Panier</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          
          <div className="flex-grow overflow-auto">
            {cartItems?.length === 0 ? (
              <p className="text-gray-600">Votre panier est vide</p>
            ) : (
              <>
                {cartItems?.map(item => (
                  <div key={item.id} className="flex items-center gap-4 mb-4 p-2 border-b">
                    {item.type === 'subscription' ? (
                      <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                        {(() => {
                          const Icon = subscriptionIcons[item.titre.split(' ')[1]] || SparklesIcon;
                          return <Icon className="w-10 h-10 text-primary" />;
                        })()}
                      </div>
                    ) : (
                      <img 
                        src={item.image} 
                        alt={item.titre} 
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        {item.titre}
                      </h3>
                      <p className="text-gray-600">{item.prix}€</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantite - 1)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span>{item.quantite}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantite + 1)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="ml-2 text-red-500 hover:text-red-600 p-1 rounded-full hover:bg-red-50 transition-colors"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {cartItems?.length > 0 && (
            <div className="border-t pt-4 mt-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-gray-800">Total:</span>
                <span className="text-xl font-bold text-gray-800">{total.toFixed(2)}€</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <CreditCardIcon className="w-5 h-5" />
                Procéder au paiement
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart; 