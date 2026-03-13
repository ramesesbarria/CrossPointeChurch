import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/CrossPointeLogo.png'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/events', label: 'Events' },
  { path: '/giving', label: 'Giving' },
  { path: '/connect', label: 'Connect' },
]

function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo" onClick={closeMenu}>
        <img src={logo} alt="CrossPointe Church Logo" />
        <span>CrossPointe Church</span>
      </Link>

      {/* Desktop links */}
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

      {/* Hamburger button — mobile only */}
      <button
        className="navbar__hamburger"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={menuOpen ? 'bar bar--open' : 'bar'} />
        <span className={menuOpen ? 'bar bar--open' : 'bar'} />
        <span className={menuOpen ? 'bar bar--open' : 'bar'} />
      </button>

      {/* Mobile dropdown */}
      <ul className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
              onClick={closeMenu}
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