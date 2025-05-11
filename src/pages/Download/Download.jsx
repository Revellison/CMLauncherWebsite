import { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import './Download.css'

function Download() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDownload = () => {
    setIsModalOpen(true)
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal-text">
          <h2>Скоро будет доступно!</h2>
          <p>Мы усердно работаем над созданием лучшего лаунчера для Minecraft. В ближайшее время мы выпустим первую версию.</p>
          <p>Следите за обновлениями на нашем сайте, чтобы быть первым, кто попробует CMLauncher!</p>
        </div>
        <div className="modal-image">
          <img src="/coming-soon.svg" alt="Скоро будет доступно" />
        </div>
      </Modal>
    </div>
  )
}

export default Download 
