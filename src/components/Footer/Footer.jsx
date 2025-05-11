import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CMLauncher</h3>
            <p>Официальный лаунчер сервера CMCraft</p>
          </div>
          <div className="footer-section">
            <h3>Контакты</h3>
            <p><a href="https://discord.gg/cks9ZmZyE2" target="_blank" rel="noopener noreferrer">Discord лаунчера</a></p>
          </div>
          <div className="footer-section">
            <h3>Ссылки</h3>
            <a href="https://cmcraft.su" target="_blank" rel="noopener noreferrer">Сайт сервера</a>
            <a href="https://discord.gg/cmcraft" target="_blank" rel="noopener noreferrer">Discord сервера</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CMLauncher. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 