type Service = {
  num: string
  title: string
  body: string
}

const SERVICES: Service[] = [
  {
    num: 'I',
    title: 'Cobertura continua',
    body: 'Lectura permanente de los principales medios digitales chilenos —diarios, radios, portales especializados— con trazabilidad completa de cada publicación.',
  },
  {
    num: 'II',
    title: 'Análisis de coyuntura',
    body: 'Seguimiento sistemático de actores, sectores y temas relevantes. Identificamos contexto, encuadres y desplazamientos en la agenda editorial.',
  },
  {
    num: 'III',
    title: 'Reportes editoriales',
    body: 'Síntesis periódicas con criterio analítico: lectura del día, tendencias relevantes y elementos de juicio para decisiones informadas.',
  },
]

export function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-head">
          <div className="section-head__top">
            <h2 className="section-name">Servicios</h2>
            <span className="section-num">§ 01</span>
          </div>
          <p className="section-dek">
            Capacidades editoriales sobre el ecosistema mediático chileno.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <article className="service" key={s.num}>
              <span className="service__num">{s.num}</span>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__body">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
