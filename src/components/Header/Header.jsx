import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          CMLauncher
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/download" className="nav-link">Скачать</Link>
          <Link to="/about" className="nav-link">О нас</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header 