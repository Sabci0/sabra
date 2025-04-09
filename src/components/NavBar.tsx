import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="bg-white">
      <div className="flex justify-between items-center p-4 mx-auto max-screen-xl">
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="text-2xl font-bold ml-4 text-black  whitespace-nowrap hover:text-yellow-600">
            Logo
          </Link>
        </div>
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {
            isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
        </button>

        <ul className="hidden md:flex space-x-6 whitespace-nowrap">
          <li>
            <Link to="/" className="text-black hover:text-yellow-600">Strona Gowna</Link>
          </li>
          <li>
            <Link to="/agro" className="text-black hover:text-yellow-600">Agro</Link>
          </li>
          <li>
            <Link to="/wyroby" className="text-black hover:text-yellow-600">Wyroby</Link>
          </li>
          <li>
            <Link to="/piora" className="text-black hover:text-yellow-600">Piora</Link>
          </li>
          <li>
            <Link to="/jajka" className="text-black hover:text-yellow-600">Jajka</Link>
          </li>
          <li>
            <Link to="/galeria" className="text-black hover:text-yellow-600">Galeria</Link>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex justify-end">
          <ul className=" space-x-6 px-4 space-y-2 whitespace-nowrap">
            <li>
              <Link to="/" className="text-black hover:text-yellow-600">Strona Gowna</Link>
            </li>
            <li>
              <Link to="/agro" className="text-black hover:text-yellow-600">Agro</Link>
            </li>
            <li>
              <Link to="/wyroby" className="text-black hover:text-yellow-600">Wyroby</Link>
            </li>
            <li>
              <Link to="/piora" className="text-black hover:text-yellow-600">Piora</Link>
            </li>
            <li>
              <Link to="/jajka" className="text-black hover:text-yellow-600">Jajka</Link>
            </li>
            <li>
              <Link to="/galeria" className="text-black hover:text-yellow-600">Galeria</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
