import './Download.css'

function Download() {
  const handleDownload = () => {
    // Здесь будет логика загрузки лаунчера
    alert('Функция загрузки будет доступна в ближайшее время!')
  }

  return (
    <div className="download">
      <section className="download-hero">
        <h1>Скачать CMLauncher</h1>
        <p>Выберите версию для вашей операционной системы</p>
      </section>

      <section className="download-options">
        <div className="download-grid">
          <div className="download-card" style={{ '--animation-order': 0 }}>
            <h3>Windows</h3>
            <p>Скачайте лаунчер для Windows 7/8/10/11</p>
            <button onClick={handleDownload} className="download-button">
              Скачать для Windows
            </button>
          </div>
          <div className="download-card" style={{ '--animation-order': 1 }}>
            <h3>Linux</h3>
            <p>Скачайте лаунчер для Linux (AppImage)</p>
            <button onClick={handleDownload} className="download-button">
              Скачать для Linux
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Download 
