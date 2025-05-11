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

      <section className="features">
        <h2>Преимущества нашего лаунчера</h2>
        <div className="features-grid">
          <div className="feature-card" style={{ '--animation-order': 0 }}>
            <h3>Оптимизирован для CMCraft</h3>
            <p>Разработан специально для игроков сервера CMCraft с учётом всех особенностей проекта</p>
          </div>
          <div className="feature-card" style={{ '--animation-order': 1 }}>
            <h3>Интуитивный интерфейс</h3>
            <p>Минималистичный дизайн и продуманная навигация делают игровой процесс максимально комфортным</p>
          </div>
          <div className="feature-card" style={{ '--animation-order': 2 }}>
            <h3>Автоматические обновления</h3>
            <p>Забудьте о ручной установке модов — лаунчер самостоятельно обновит все необходимые модпаки при изменениях на сервере</p>
          </div>
        </div>
      </section>

      <section className="server-info">
        <h2>О сервере CMCraft</h2>
        <p>
          CMCraft - это бесплатный, ванильный и закрытый сервер в Майнкрафте.
        </p>
        <Link to="https://cmcraft.su/" className="secondary-button">
          Узнать больше
        </Link>
      </section>
    </div>
  )
}

export default Home 