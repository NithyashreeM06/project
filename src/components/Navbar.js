import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpg'; // ✅ Import your logo

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* ✅ Clickable logo */}
      <Link to="/" className="logo-link">
        <img src={logo} alt="E-Shop Logo" className="logo" />
      </Link>

      <ul className="nav-links">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/orders" className="nav-item">Orders</Link></li>
        <li><Link to="/blogs" className="nav-item">Blogs</Link></li>
        <li><Link to="/contact" className="nav-item">Contact</Link></li>
        <li><Link to="/admin" className="nav-item">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;



