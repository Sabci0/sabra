import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav className="bg-white border-b border-yellow-600">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        {/* Wersja mobilna: hamburger po lewej, logo po prawej */}
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="text-2xl font-bold text-black ml-4 whitespace-nowrap">
            Strona Główna
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Ikona "X"
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Ikona hamburgera
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Desktop menu – widoczne na średnich i większych ekranach */}
        <ul className="hidden md:flex space-x-6 whitespace-nowrap">
          <li>
            <Link to="/" className="text-black hover:text-yellow-600">
              Strona Główna
            </Link>
          </li>
          <li>
            <Link to="/agro" className="text-black hover:text-yellow-600">
              Agroturystyka
            </Link>
          </li>
          <li>
            <Link to="/wyroby" className="text-black hover:text-yellow-600">
              Wyroby
            </Link>
          </li>
          <li>
            <Link to="/piora" className="text-black hover:text-yellow-600">
              Pióra
            </Link>
          </li>
          <li>
            <Link to="/jajka" className="text-black hover:text-yellow-600">
              Jajka
            </Link>
          </li>
          <li>
            <Link to="/galeria" className="text-black hover:text-yellow-600">
              Galeria
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile menu – rozwijane, wyświetlane po prawej stronie */}
      {isMenuOpen && (
        <div className="md:hidden flex justify-end">
          <ul className="px-4 pb-4 space-y-2 text-right whitespace-nowrap">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-black hover:text-yellow-600"
              >
                Strona Główna
              </Link>
            </li>
            <li>
              <Link
                to="/agro"
                onClick={() => setIsMenuOpen(false)}
                className="block text-black hover:text-yellow-600"
              >
                Agroturystyka
              </Link>
            </li>
            <li>
              <Link
                to="/wyroby"
                onClick={() => setIsMenuOpen(false)}
                className="block text-black hover:text-yellow-600"
              >
                Wyroby
              </Link>
            </li>
            <li>
              <Link
                to="/piora"
                onClick={() => setIsMenuOpen(false)}
                className="block text-black hover:text-yellow-600"
              >
                Pióra
              </Link>
            </li>
            <li>
              <Link
                to="/jajka"
                onClick={() => setIsMenuOpen(false)}
                className="block text-black hover:text-yellow-600"
              >
                Jajka
              </Link>
            </li>
            <li>
              <Link
                to="/galeria"
                onClick={() => setIsMenuOpen(false)}
                className="block text-black hover:text-yellow-600"
              >
                Galeria
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
