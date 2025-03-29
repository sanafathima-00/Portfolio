import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
      <nav className="navbar">
        <ul className="nav-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
  );
}

export default Navbar;
