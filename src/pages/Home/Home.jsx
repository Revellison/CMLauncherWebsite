import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Добро пожаловать в CMLauncher</h1>
        <p>Официальный лаунчер сервера CMCraft</p>
        <Link to="/download" className="cta-button">
          Скачать лаунчер
        </Link>
      </section>
    </div>
  )
}

export default Home 