import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../asset/img/impakt.png'

export function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Política de Privacidad — Impakt Media'
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://impaktmedia.cl/politica-de-privacidad')
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
            <h1 className="legal-page__title">Política de Privacidad</h1>
            <p className="legal-page__date">Última actualización: 1 de junio de 2026</p>
          </div>

          <p>
            Esta Política de Privacidad explica cómo <strong>Impakt Media</strong> recopila,
            utiliza, almacena, comparte y protege información relacionada con los usuarios de{' '}
            <strong>impaktmedia.cl</strong>.
          </p>
          <p>
            Al utilizar el sitio web, plataforma, piloto, demo o servicio, aceptas el tratamiento
            de información descrito en esta Política.
          </p>

          <h2>1. Responsable del tratamiento</h2>
          <address>
            <strong>Impakt Media</strong><br />
            Domicilio: Santiago, Chile<br />
            Correo de contacto: <a href="mailto:equipo@impaktmedia.cl">equipo@impaktmedia.cl</a><br />
            Sitio web: <a href="https://impaktmedia.cl">impaktmedia.cl</a>
          </address>

          <h2>2. Información que recopilamos</h2>
          <p>Podemos recopilar las siguientes categorías de información:</p>

          <h3>a. Datos de identificación y contacto</h3>
          <ul>
            <li>Nombre.</li>
            <li>Cargo.</li>
            <li>Organización.</li>
            <li>Correo electrónico.</li>
            <li>Teléfono, si el usuario lo entrega.</li>
            <li>Datos de facturación, si corresponde.</li>
          </ul>

          <h3>b. Datos de uso de la plataforma</h3>
          <ul>
            <li>Fecha y hora de acceso.</li>
            <li>Funciones utilizadas.</li>
            <li>Configuraciones de búsqueda.</li>
            <li>Alertas creadas.</li>
            <li>Reportes generados.</li>
            <li>Clics, interacciones y preferencias.</li>
            <li>Logs técnicos, dirección IP, navegador, dispositivo y sistema operativo.</li>
          </ul>

          <h3>c. Información de búsquedas y monitoreo</h3>
          <ul>
            <li>Palabras clave.</li>
            <li>Temas monitoreados.</li>
            <li>
              Voceros, marcas, instituciones, personas públicas u organizaciones buscadas.
            </li>
            <li>Medios o fuentes seleccionadas.</li>
            <li>Resultados obtenidos.</li>
            <li>Noticias detectadas.</li>
            <li>
              Titulares, enlaces, fechas, medios, autores, bajadas, categorías y extractos
              legalmente permitidos.
            </li>
            <li>Clasificaciones, etiquetas y análisis asociados.</li>
          </ul>

          <h3>d. Comunicaciones</h3>
          <p>
            Podemos conservar comunicaciones enviadas por correo electrónico, formularios,
            WhatsApp, reuniones comerciales, encuestas, solicitudes de soporte o feedback del
            usuario.
          </p>

          <h2>3. Finalidades del tratamiento</h2>
          <p>Utilizamos la información para las siguientes finalidades:</p>
          <ul>
            <li>Crear, administrar y operar cuentas de usuario.</li>
            <li>
              Prestar el servicio de monitoreo, búsqueda, análisis, alertas y reportes.
            </li>
            <li>Personalizar términos de búsqueda y tableros de monitoreo.</li>
            <li>Enviar alertas, reportes, comunicaciones operativas y soporte.</li>
            <li>Mejorar la calidad, seguridad y estabilidad de la plataforma.</li>
            <li>Medir uso, rendimiento y errores del servicio.</li>
            <li>Desarrollar nuevas funcionalidades.</li>
            <li>Realizar análisis estadístico, agregado o anonimizado.</li>
            <li>
              Cumplir obligaciones legales, contractuales, tributarias o regulatorias.
            </li>
            <li>
              Prevenir usos indebidos, abusos técnicos o riesgos de seguridad.
            </li>
            <li>
              Entrenar, ajustar, evaluar y mejorar sistemas de inteligencia artificial,
              conforme se indica en esta Política.
            </li>
          </ul>

          <h2>4. Uso explícito de noticias, búsquedas y resultados para entrenar IA</h2>
          <p>
            El usuario autoriza expresamente a Impakt Media a utilizar la información generada por
            sus búsquedas y uso de la plataforma para entrenar, mejorar, evaluar y desarrollar
            sistemas de inteligencia artificial.
          </p>
          <p>Esta información puede incluir:</p>
          <ul>
            <li>Términos de búsqueda configurados.</li>
            <li>
              Temas, entidades, instituciones, personas públicas, marcas o voceros monitoreados.
            </li>
            <li>Noticias detectadas como resultado de esas búsquedas.</li>
            <li>
              Titulares, URLs, fechas, nombres de medios, categorías, autores, bajadas y extractos
              de noticias, siempre que su uso sea legalmente permitido.
            </li>
            <li>Interacciones del usuario con los resultados.</li>
            <li>
              Correcciones, etiquetas, clasificaciones, feedback o preferencias entregadas por el
              usuario.
            </li>
            <li>
              Reportes, resúmenes, alertas y análisis generados por la plataforma.
            </li>
            <li>
              Datos agregados, estadísticos o anonimizados derivados del uso del servicio.
            </li>
          </ul>
          <p>Este tratamiento podrá utilizarse para:</p>
          <ul>
            <li>Mejorar la precisión de los resultados.</li>
            <li>Entrenar modelos de clasificación temática.</li>
            <li>Mejorar sistemas de resumen automático.</li>
            <li>Detectar tendencias informativas.</li>
            <li>Reducir errores o duplicidades.</li>
            <li>Mejorar recomendaciones.</li>
            <li>Desarrollar modelos de análisis de cobertura mediática.</li>
            <li>Crear nuevas funcionalidades basadas en inteligencia artificial.</li>
          </ul>
          <p>
            Impakt Media no utilizará credenciales, contraseñas, datos de pago ni información
            expresamente marcada como confidencial para entrenamiento de modelos, salvo autorización
            específica y separada del usuario.
          </p>
          <p>
            Cuando sea razonablemente posible, Impakt Media aplicará medidas de minimización,
            anonimización o agregación antes de utilizar información para entrenamiento o mejora de
            modelos.
          </p>

          <h2>5. Datos personales y datos sensibles</h2>
          <p>
            El usuario debe evitar ingresar datos personales sensibles de terceros, salvo que cuente
            con autorización suficiente o base legal para hacerlo.
          </p>
          <p>
            Para estos efectos, pueden considerarse especialmente delicados datos relativos a salud,
            vida sexual, orientación sexual, opiniones políticas, creencias religiosas, datos
            biométricos, datos de menores de edad, antecedentes judiciales u otros datos protegidos
            por la normativa aplicable.
          </p>
          <p>
            Impakt Media podrá eliminar, bloquear o restringir configuraciones de búsqueda que
            impliquen un riesgo legal, ético o de privacidad.
          </p>

          <h2>6. Base de legitimación</h2>
          <p>
            El tratamiento de datos se realiza sobre la base de una o más de las siguientes razones:
          </p>
          <ul>
            <li>Consentimiento del usuario.</li>
            <li>Ejecución de un contrato o prestación del servicio solicitado.</li>
            <li>
              Interés legítimo en mejorar, proteger y desarrollar la plataforma.
            </li>
            <li>Cumplimiento de obligaciones legales.</li>
            <li>
              Autorización expresa para el uso de información con fines de entrenamiento, mejora y
              desarrollo de sistemas de inteligencia artificial.
            </li>
          </ul>

          <h2>7. Compartición con terceros</h2>
          <p>
            Podemos compartir información con proveedores necesarios para operar el servicio, tales
            como:
          </p>
          <ul>
            <li>Servicios de alojamiento en la nube.</li>
            <li>Proveedores de correo electrónico.</li>
            <li>Herramientas de analítica.</li>
            <li>Proveedores de inteligencia artificial.</li>
            <li>Servicios de monitoreo, seguridad y logs.</li>
            <li>Sistemas de facturación o pago.</li>
            <li>Asesores legales, contables o técnicos.</li>
          </ul>
          <p>
            Estos terceros deberán tratar la información únicamente para las finalidades autorizadas
            y bajo condiciones razonables de confidencialidad y seguridad.
          </p>
          <p>
            También podremos compartir información cuando sea necesario para cumplir obligaciones
            legales, responder requerimientos de autoridad competente, proteger derechos de Impakt
            Media o prevenir fraudes, abusos o incidentes de seguridad.
          </p>

          <h2>8. Transferencias internacionales</h2>
          <p>
            Algunos proveedores tecnológicos pueden encontrarse fuera de Chile. En esos casos, la
            información puede ser tratada o almacenada en otros países.
          </p>
          <p>
            Impakt Media procurará utilizar proveedores que ofrezcan estándares razonables de
            seguridad, confidencialidad y protección de datos.
          </p>

          <h2>9. Conservación de la información</h2>
          <p>
            Conservaremos la información durante el tiempo necesario para prestar el servicio,
            cumplir obligaciones legales, resolver disputas, mejorar la plataforma, entrenar
            sistemas de inteligencia artificial y mantener registros internos razonables.
          </p>
          <p>
            El usuario podrá solicitar la eliminación de sus datos personales conforme a la
            normativa aplicable. Sin embargo, cierta información agregada, anonimizada, estadística
            o ya incorporada a procesos de mejora técnica podrá conservarse cuando no permita
            identificar directamente al usuario.
          </p>

          <h2>10. Seguridad</h2>
          <p>
            Aplicamos medidas técnicas y organizativas razonables para proteger la información
            contra acceso no autorizado, pérdida, mal uso, alteración o divulgación indebida.
          </p>
          <p>
            Sin embargo, ningún sistema digital es completamente seguro. El usuario reconoce que el
            uso de plataformas en línea implica ciertos riesgos técnicos inherentes.
          </p>

          <h2>11. Derechos del usuario</h2>
          <p>El usuario podrá solicitar, cuando corresponda conforme a la ley aplicable:</p>
          <ul>
            <li>Acceso a sus datos personales.</li>
            <li>Rectificación de datos incorrectos o desactualizados.</li>
            <li>Eliminación de datos.</li>
            <li>Oposición a ciertos tratamientos.</li>
            <li>Revocación del consentimiento.</li>
            <li>Información sobre el uso de sus datos.</li>
            <li>Portabilidad u otros derechos que contemple la normativa vigente.</li>
          </ul>
          <p>Las solicitudes deberán enviarse a:</p>
          <p>
            <a href="mailto:equipo@impaktmedia.cl">equipo@impaktmedia.cl</a>
          </p>
          <p>
            Podremos solicitar antecedentes adicionales para verificar la identidad del solicitante
            antes de responder.
          </p>

          <h2>12. Cookies y tecnologías similares</h2>
          <p>
            El sitio web puede utilizar cookies u otras tecnologías similares para recordar
            preferencias, analizar tráfico, mejorar la experiencia del usuario, medir campañas,
            detectar errores y proteger la seguridad del servicio.
          </p>
          <p>
            El usuario puede configurar su navegador para bloquear o eliminar cookies, aunque esto
            podría afectar algunas funcionalidades.
          </p>

          <h2>13. Comunicaciones comerciales</h2>
          <p>
            Podremos enviar comunicaciones sobre el servicio, novedades, pilotos, actualizaciones,
            invitaciones o contenidos relacionados.
          </p>
          <p>
            El usuario podrá solicitar dejar de recibir comunicaciones comerciales escribiendo a{' '}
            <a href="mailto:equipo@impaktmedia.cl">equipo@impaktmedia.cl</a> o utilizando los
            mecanismos de desuscripción disponibles.
          </p>

          <h2>14. Menores de edad</h2>
          <p>
            El servicio está dirigido a organizaciones, profesionales y personas mayores de edad. No
            está diseñado para ser utilizado por menores de edad sin autorización de su representante
            legal.
          </p>

          <h2>15. Cambios a esta Política</h2>
          <p>
            Podremos modificar esta Política de Privacidad para reflejar cambios legales, técnicos,
            comerciales o funcionales.
          </p>
          <p>
            Cuando los cambios sean relevantes, se informará por medios razonables, como correo
            electrónico, aviso en la plataforma o publicación visible en el sitio web.
          </p>

          <h2>16. Contacto</h2>
          <p>
            Para consultas, solicitudes o reclamos relacionados con privacidad y datos personales,
            puedes escribir a:
          </p>
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
            <Link to="/terminos-de-uso">Términos de uso</Link>
            {' · '}
            <Link to="/politica-de-privacidad">Política de privacidad</Link>
          </span>
        </div>
      </footer>
    </div>
  )
}
