import { Link } from 'react-router-dom'
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
            <img src={logo} alt="Impakt Media" className="footer__logo" loading="lazy" decoding="async" />
            <p>
              Servicio chileno de cobertura editorial sobre los medios
              digitales. Hecho en Santiago para equipos profesionales.
            </p>
          </div>

          <div>
            <h3 className="footer__section-title">Sitio</h3>
            <ul>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#proceso">Cómo funciona</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__section-title">Contacto</h3>
            <ul>
              <li><a href="mailto:equipo@impaktmedia.cl">equipo@impaktmedia.cl</a></li>
              <li><a href="https://www.linkedin.com/company/impakt-media-cl" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://x.com/impaktmediacl" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__section-title">Legal</h3>
            <ul>
              <li><Link to="/politica-de-privacidad">Política de privacidad</Link></li>
              <li><Link to="/terminos-de-uso">Términos de uso</Link></li>
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
