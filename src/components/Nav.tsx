import logo from '../assets/img/impakt.png'

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
        <button type="button" className="btn btn--primary" onClick={onRequestAccess}>
          Solicitar acceso
          <span className="arrow" aria-hidden="true">→</span>
        </button>
      </div>
    </header>
  )
}
