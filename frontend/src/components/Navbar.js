import { Link, useLocation, NavLink } from 'react-router-dom'
import { useThemeContext } from '../hooks/useThemeContext'
import { Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

const NavigationBar = () => {
  const { settings, setSettings, isDark } = useThemeContext()

  const handleClick = () => {
    if (settings.theme === 'light') {
      localStorage.setItem('settings', JSON.stringify({ theme: 'dark' }))
      setSettings({ theme: 'dark' })
    }
    if (settings.theme === 'dark') {
      localStorage.setItem('settings', JSON.stringify({ theme: 'light' }))
      setSettings({ theme: 'light' })
    }
  }

  return (
    <header id="navheader">
      <Navbar expand="lg" className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            <h3> rcz.dev</h3>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <button id="switch-theme" type="button" onClick={handleClick}>
              {settings.theme === 'light' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </button>
            <NavLink to="/" end>Proyectos</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/galeria">Galería</NavLink>
            <NavLink to="/about">Sobre mí</NavLink>
          </Navbar.Collapse>
        </div>

      </Navbar>
    </header>
  )
}

export default NavigationBar
