import type { ReactNode } from 'react'

type Service = {
  num: string
  icon: ReactNode
  title: ReactNode
  body: string
  list: string[]
}

const SERVICES: Service[] = [
  {
    num: '01 / Servicio',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
    ),
    title: (
      <>
        Monitoreo <em>24/7</em> de medios.
      </>
    ),
    body: 'Rastreamos en tiempo real los principales medios digitales chilenos —diarios, radios, portales— y capturamos cada mención de tus conceptos clave.',
    list: ['Cobertura nacional', 'Indexación continua', 'Sin descansos'],
  },
  {
    num: '02 / Servicio',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.4 8.4 0 01-3.6 6.9L17 21l-3-2a9 9 0 11 7-7.5z" />
        <path d="M8 11h.01M12 11h.01M16 11h.01" />
      </svg>
    ),
    title: (
      <>
        Alertas <em>instantáneas</em> a Telegram.
      </>
    ),
    body: 'Cuando uno de tus conceptos aparece publicado, recibes una alerta en Telegram con el titular, el medio y el enlace. En segundos.',
    list: ['Notificación push', 'Enlace directo', 'Sin email overload'],
  },
  {
    num: '03 / Servicio',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
    title: (
      <>
        Reportes <em>diarios</em> personalizados.
      </>
    ),
    body: 'Dos resúmenes al día por correo: análisis por concepto, tendencias del medio digital y contexto. Lo que importa, condensado.',
    list: ['Mañana y tarde', 'Análisis por keyword', 'Tendencias del día'],
  },
]

export function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">
            <span className="num">§ 01</span>
            <span className="eyebrow">Servicios</span>
          </div>
          <h2 className="section-title">
            Tres herramientas. <em>Una sola misión:</em>
            <br />
            que nada se te escape.
          </h2>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <article className="service" key={s.num}>
              <div className="service__icon">{s.icon}</div>
              <span className="service__num">{s.num}</span>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__body">{s.body}</p>
              <ul className="service__list">
                {s.list.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
