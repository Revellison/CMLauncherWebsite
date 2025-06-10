import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CMLauncher. Все права защищены.</p>
          <p className='links'><a href="https://discord.gg/QakNJpNTTj">Дискорд лаунчера</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 