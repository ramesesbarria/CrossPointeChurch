import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/CrossPointeLogo.png'
import './Navbar.css'

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services'},
    { path: '/events', label: 'Events'},
    { path: '/giving', label: 'Giving'},
    { path: '/connect', label: 'Connect'},
]

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <img src={logo} alt="CrossPointe Church Logo" />
        <span>CrossPointe Church</span>
      </Link>
      <ul className="navbar__links">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar


