import logo from '../assets/img/impakt.png'
import telegramLogo from '../assets/img/telegram-logo-0-2.png'

interface NavProps {
  onRequestAccess: () => void
}

export function Nav({ onRequestAccess }: NavProps) {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#" className="brand" aria-label="Impakt — inicio">
          <img src={logo} alt="Impakt" className="brand__logo" />
        </a>
        <nav className="nav__links" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Cómo funciona</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="nav__actions">
          <button type="button" className="btn btn--primary" onClick={onRequestAccess}>
            Solicitar acceso
            <span className="arrow" aria-hidden="true">→</span>
          </button>
          <a
            className="btn btn--telegram"
            href="https://t.me/danialertsbot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acceso vía Telegram"
          >
            <img src={telegramLogo} alt="Telegram" className="btn__telegram-icon" />
            Telegram
          </a>
        </div>
      </div>
    </header>
  )
}
