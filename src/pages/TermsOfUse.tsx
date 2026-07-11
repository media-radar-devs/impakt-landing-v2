import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../asset/img/impakt.png'

export function TermsOfUse() {
  useEffect(() => {
    document.title = 'Términos de Uso — Impakt Media'
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://impaktmedia.cl/terminos-de-uso')
    return () => {
      document.title = 'Impakt — Lectura sistemática de los medios chilenos'
      if (canonical) canonical.setAttribute('href', 'https://impaktmedia.cl/')
    }
  }, [])

  return (
    <div className="legal-page">
      <header className="legal-page__nav">
        <div className="container">
          <Link to="/" className="brand" aria-label="Impakt — volver al inicio">
            <img src={logo} alt="Impakt — Inicio" className="brand__logo" />
          </Link>
        </div>
      </header>

      <main className="container legal-page__body" id="main-content">
        <div className="legal-page__content">
          <div className="legal-page__header">
            <span className="eyebrow">Legal</span>
            <h1 className="legal-page__title">Términos de Uso</h1>
            <p className="legal-page__date">Última actualización: 1 de junio de 2026</p>
          </div>

          <p>
            Bienvenido/a a <strong>impaktmedia.cl</strong>, un servicio de monitoreo, búsqueda,
            clasificación, análisis y resumen de noticias, medios digitales y fuentes públicas de
            información.
          </p>
          <p>
            Al acceder o utilizar este sitio web, plataforma, piloto, demo o servicio, aceptas
            estos Términos de Uso. Si no estás de acuerdo con ellos, debes abstenerte de utilizar
            el servicio.
          </p>

          <h2>1. Identificación del servicio</h2>
          <p>
            <strong>Impakt Media</strong> ofrece herramientas digitales para monitorear noticias,
            menciones, temas de interés público, vocerías, instituciones, organizaciones, personas
            públicas, sectores económicos, campañas comunicacionales y otros contenidos disponibles
            en fuentes abiertas o autorizadas.
          </p>
          <p>
            El servicio puede incluir alertas, reportes, resúmenes, análisis automatizado,
            clasificación temática, detección de tendencias, extracción de entidades, análisis de
            cobertura y otras funciones basadas en software e inteligencia artificial.
          </p>

          <h2>2. Uso permitido</h2>
          <p>
            El usuario se obliga a utilizar el servicio de forma lícita, responsable y conforme a
            estos Términos.
          </p>
          <p>El usuario no podrá:</p>
          <ul>
            <li>
              Utilizar el servicio para fines ilegales, fraudulentos, discriminatorios,
              difamatorios o contrarios a derechos de terceros.
            </li>
            <li>
              Intentar vulnerar la seguridad, disponibilidad o integridad técnica de la plataforma.
            </li>
            <li>
              Reproducir, revender, redistribuir o explotar comercialmente los contenidos obtenidos
              mediante el servicio sin autorización.
            </li>
            <li>
              Utilizar la plataforma para recopilar datos personales sensibles sin base legal o
              autorización suficiente.
            </li>
            <li>
              Ingresar términos de búsqueda o instrucciones destinadas a perseguir, acosar,
              discriminar o perfilar indebidamente a personas.
            </li>
          </ul>

          <h2>3. Contenido de terceros</h2>
          <p>
            Las noticias, enlaces, titulares, extractos, imágenes, nombres de medios, autores y
            demás contenidos informativos identificados por la plataforma pueden pertenecer a
            terceros, incluyendo medios de comunicación, periodistas, agencias, instituciones
            públicas, organizaciones privadas u otras fuentes.
          </p>
          <p>
            Impakt Media no reclama propiedad sobre el contenido original de terceros. La
            plataforma actúa como una herramienta de monitoreo, organización, análisis y acceso
            referencial a información disponible públicamente o accesible mediante fuentes
            autorizadas.
          </p>
          <p>
            El usuario reconoce que el acceso, uso, reproducción o distribución de contenidos de
            terceros puede estar sujeto a derechos de autor, términos de uso de los medios
            respectivos, licencias, límites legales o restricciones contractuales.
          </p>

          <h2>4. Uso de búsquedas, resultados y noticias para inteligencia artificial</h2>
          <p>
            El usuario acepta expresamente que Impakt Media podrá utilizar la información generada
            por el uso del servicio para mejorar, desarrollar, evaluar y entrenar sistemas de
            inteligencia artificial.
          </p>
          <p>Esta información puede incluir:</p>
          <ul>
            <li>Términos de búsqueda configurados por el usuario.</li>
            <li>
              Palabras clave, temas, voceros, instituciones, marcas o asuntos monitoreados.
            </li>
            <li>Resultados de búsqueda obtenidos.</li>
            <li>
              Titulares, enlaces, fechas, medios, autores, bajadas, fragmentos o extractos de
              noticias cuando su uso sea legalmente permitido.
            </li>
            <li>
              Clasificaciones, etiquetas, correcciones, feedback, clics, interacciones y
              preferencias del usuario.
            </li>
            <li>
              Reportes, resúmenes, alertas y configuraciones generadas dentro de la plataforma.
            </li>
            <li>Datos agregados o anonimizados derivados del uso del servicio.</li>
          </ul>
          <p>
            Este uso podrá tener como finalidad mejorar la precisión de las alertas, optimizar la
            clasificación de noticias, entrenar modelos de resumen, detectar tendencias, reducir
            errores, mejorar recomendaciones, desarrollar nuevas funcionalidades y perfeccionar
            sistemas de análisis automatizado.
          </p>
          <p>
            Impakt Media procurará aplicar medidas razonables de anonimización, agregación o
            minimización cuando corresponda, especialmente cuando la información pueda contener
            datos personales.
          </p>

          <h2>5. Propiedad intelectual de la plataforma</h2>
          <p>
            La plataforma, su software, diseño, marca, código, modelos, bases de datos propias,
            reportes generados, metodologías, taxonomías, interfaces, documentación y
            funcionalidades son propiedad de Impakt Media o de sus licenciantes.
          </p>
          <p>
            El usuario no adquiere derechos de propiedad intelectual sobre la plataforma por el
            solo hecho de utilizarla.
          </p>

          <h2>6. Cuentas y acceso</h2>
          <p>
            Para utilizar ciertas funciones, el usuario puede necesitar crear una cuenta, entregar
            datos de contacto o participar en un piloto.
          </p>
          <p>
            El usuario es responsable de mantener la confidencialidad de sus credenciales de acceso
            y de toda actividad realizada desde su cuenta.
          </p>
          <p>
            Impakt Media podrá suspender o limitar el acceso al servicio cuando detecte usos
            abusivos, riesgos de seguridad, incumplimientos de estos Términos o requerimientos
            legales.
          </p>

          <h2>7. Disponibilidad del servicio</h2>
          <p>
            Impakt Media procurará mantener el servicio disponible y operativo, pero no garantiza
            funcionamiento ininterrumpido, libre de errores o completamente actualizado.
          </p>
          <p>
            El servicio puede depender de fuentes externas, motores de búsqueda, APIs, medios
            digitales, servicios de nube, proveedores tecnológicos o terceros. Por ello, algunas
            noticias, resultados o alertas pueden no aparecer, aparecer con retraso o contener
            errores.
          </p>

          <h2>8. Exactitud de la información</h2>
          <p>
            Los reportes, resúmenes, clasificaciones y análisis generados por la plataforma pueden
            contener errores, omisiones o interpretaciones automatizadas imperfectas.
          </p>
          <p>
            El usuario debe revisar la información antes de tomar decisiones comunicacionales,
            legales, financieras, políticas, institucionales o comerciales relevantes.
          </p>
          <p>
            Impakt Media no garantiza que los resultados del servicio sean completos, exactos,
            oportunos o adecuados para un fin específico.
          </p>

          <h2>9. Planes, pilotos y pagos</h2>
          <p>
            Cuando el servicio sea ofrecido como piloto, demo o prueba gratuita, Impakt Media podrá
            definir condiciones específicas de duración, alcance, número de usuarios, volumen de
            búsquedas, funcionalidades disponibles y continuidad posterior.
          </p>
          <p>
            Los planes pagados, precios, condiciones comerciales y medios de pago serán informados
            oportunamente al usuario.
          </p>

          <h2>10. Limitación de responsabilidad</h2>
          <p>
            En la máxima medida permitida por la ley, Impakt Media no será responsable por daños
            indirectos, pérdida de oportunidades, pérdida de ingresos, daño reputacional,
            decisiones adoptadas por el usuario sobre la base de reportes automatizados o problemas
            derivados de fuentes externas.
          </p>
          <p>
            Nada en estos Términos limita derechos irrenunciables que correspondan al usuario
            conforme a la legislación aplicable.
          </p>

          <h2>11. Modificaciones</h2>
          <p>
            Impakt Media podrá modificar estos Términos de Uso para reflejar cambios legales,
            técnicos, comerciales o funcionales.
          </p>
          <p>
            Cuando los cambios sean relevantes, se informará al usuario por medios razonables,
            tales como correo electrónico, aviso en la plataforma o actualización visible en el
            sitio web.
          </p>

          <h2>12. Legislación aplicable</h2>
          <p>
            Estos Términos se rigen por las leyes de la República de Chile, salvo que normas
            imperativas dispongan otra cosa.
          </p>

          <h2>13. Contacto</h2>
          <p>Para consultas sobre estos Términos, puedes escribir a:</p>
          <address>
            <strong>Impakt Media</strong><br />
            Correo: <a href="mailto:equipo@impaktmedia.cl">equipo@impaktmedia.cl</a><br />
            Sitio web: <a href="https://impaktmedia.cl">impaktmedia.cl</a>
          </address>
        </div>

        <div className="legal-page__back">
          <Link to="/" className="btn btn--ghost">
            ← Volver al inicio
          </Link>
        </div>
      </main>

      <footer className="legal-page__footer">
        <div className="container">
          <span>© {new Date().getFullYear()} Impakt Media — Santiago, Chile</span>
          <span>
            <Link to="/politica-de-privacidad">Política de privacidad</Link>
            {' · '}
            <Link to="/terminos-de-uso">Términos de uso</Link>
          </span>
        </div>
      </footer>
    </div>
  )
}
