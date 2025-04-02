import { Link } from "react-router-dom";

 const NavBar = () => { 
  return (
    <nav className="bg-white p-4 flex justify-between items-center" >
      
        <div className="text-2xl font-bold ">Logo</div>
        
        <ul className="flex space-x-6">
          <li>
            <Link to="/">Home</Link>
            </li>
          <li>
            <Link to="/agro">agro</Link>
            </li>
          <li><a href="/">wyroby</a></li>
          <li><a href="/">piora</a></li>
          <li><a href="/">jajka</a></li>
          <li><a href="/">galeria</a></li>
        </ul>
      
    </nav>
  );
}

export default NavBar;
