import { NavLink } from 'react-router-dom'
import './header.scss'

function Header() {
  return (
    <nav className="navbar">
      <NavLink
        className="navbar__link"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'none',
          color: isActive ? '#66AAC7' : 'none',
        })}
        to="/"
      >
        À propos
      </NavLink>
      <NavLink
        className="navbar__link"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'none',
        })}
        to="/about"
      >
        Projets
      </NavLink>
      <NavLink
        className="navbar__link"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'none',
        })}
        to="/"
      >
        Compétences
      </NavLink>
      <NavLink
        className="navbar__link"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'none',
        })}
        to="/"
      >
        Contacts
      </NavLink>
    </nav>
  )
}

export default Header
