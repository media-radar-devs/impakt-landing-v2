import logo from '../assets/img/impakt.png'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer__lead">
          Lectura editorial de los medios chilenos, con <em>criterio</em>.
        </h2>

        <div className="footer__grid">
          <div className="footer__brand">
            <img src={logo} alt="Impakt" className="footer__logo" />
            <p>
              Servicio chileno de cobertura editorial sobre los medios
              digitales. Hecho en Santiago para equipos profesionales.
            </p>
          </div>

          <div>
            <h5>Sitio</h5>
            <ul>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#proceso">Cómo funciona</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h5>Contacto</h5>
            <ul>
              <li><a href="mailto:equipo@impaktmedia.cl">equipo@impaktmedia.cl</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Términos de uso</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Impakt Media — Santiago, Chile</span>
          <span>v1.0</span>
        </div>
      </div>
    </footer>
  )
}
