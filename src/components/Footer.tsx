export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="contacto">
      <div className="container">
        <h2 className="footer__big">
          Si lo dicen,
          <br />
          lo <em>sabes</em>
          <sup>*</sup>
        </h2>

        <div className="footer__grid">
          <div className="footer__brand">
            <h5>Impakt</h5>
            <p>
              Servicio chileno de monitoreo de medios digitales. Hecho en
              Santiago para equipos que no pueden permitirse llegar tarde.
            </p>
          </div>

          <div>
            <h5>Producto</h5>
            <ul>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#proceso">Cómo funciona</a></li>
              <li><a href="#precio">Precio</a></li>
            </ul>
          </div>

          <div>
            <h5>Contacto</h5>
            <ul>
              <li><a href="mailto:hola@impaktmedia.cl">hola@impaktmedia.cl</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://t.me" target="_blank" rel="noreferrer">Telegram</a></li>
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
          <span>Hecho con código y café · v1.0</span>
        </div>
      </div>
    </footer>
  )
}
