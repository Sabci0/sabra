import { Link } from "react-router-dom";

const NavBar = () => { 
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Logo</div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/agro">Agro</Link>
        </li>
        <li>
          <Link to="/wyroby">Wyroby</Link>
        </li>
        <li>
          <Link to="/piora">Piora</Link>
        </li>
        <li>
          <Link to="/jajka">Jajka</Link>
        </li>
        <li>
          <Link to="/galeria">Galeria</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
