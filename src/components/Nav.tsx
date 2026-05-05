import logo from '../assets/img/impakt.png'

export function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#" className="brand" aria-label="Impakt — inicio">
          <img src={logo} alt="Impakt" className="brand__logo" />
        </a>
        <nav className="nav__links" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Cómo funciona</a>
          <a href="#precio">Precio</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="btn btn--primary" href="#precio">
          Suscribirse
          <span className="arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  )
}
