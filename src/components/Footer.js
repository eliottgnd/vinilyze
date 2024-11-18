import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MusicalNoteIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src="/images/logo.png" alt="Vinilyze" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-semibold text-gray-800">Vinilyze</span>
            </Link>
            <p className="text-gray-600">
              Découvrez le monde du vinyle en ligne et plongez dans une expérience musicale unique.
            </p>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/decouvrir" className="text-gray-600 hover:text-primary transition-colors">
                  Découvrir
                </Link>
              </li>
              <li>
                <Link to="/abonnements" className="text-gray-600 hover:text-primary transition-colors">
                  Abonnements
                </Link>
              </li>
            </ul>
          </div>

          {/* Genres */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Genres</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categorie/rock" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <MusicalNoteIcon className="w-4 h-4 mr-2" />
                  Rock
                </Link>
              </li>
              <li>
                <Link to="/categorie/jazz" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <MusicalNoteIcon className="w-4 h-4 mr-2" />
                  Jazz
                </Link>
              </li>
              <li>
                <Link to="/categorie/classique" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <MusicalNoteIcon className="w-4 h-4 mr-2" />
                  Classique
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <EnvelopeIcon className="w-4 h-4 mr-2" />
                contact@vinilyze.com
              </li>
              <li className="flex items-center text-gray-600">
                <PhoneIcon className="w-4 h-4 mr-2" />
                01 23 45 67 89
              </li>
              <li className="flex items-center text-gray-600">
                <MapPinIcon className="w-4 h-4 mr-2" />
                Paris, France
              </li>
            </ul>
          </div>
        </div>

        {/* Barre sociale et copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; 2024 Vinilyze - Tous droits réservés
            </p>
            <div className="flex gap-6">
              <Link to="/mentions-legales" className="text-gray-600 hover:text-primary transition-colors text-sm">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="text-gray-600 hover:text-primary transition-colors text-sm">
                Politique de confidentialité
              </Link>
              <Link to="/cgv" className="text-gray-600 hover:text-primary transition-colors text-sm">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 