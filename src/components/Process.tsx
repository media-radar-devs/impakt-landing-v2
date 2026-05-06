type Step = {
  num: string
  title: string
  body: string
}

const STEPS: Step[] = [
  {
    num: 'I',
    title: 'Definición editorial',
    body: 'Trabajamos contigo el alcance: sectores, actores, temas y criterios de relevancia que orientarán la lectura.',
  },
  {
    num: 'II',
    title: 'Cobertura sistemática',
    body: 'Lectura continua de los principales medios digitales chilenos, con registro y trazabilidad de cada publicación pertinente.',
  },
  {
    num: 'III',
    title: 'Análisis con criterio',
    body: 'Identificamos contexto, encuadres y desplazamientos en la agenda. Distinguimos señal de ruido.',
  },
  {
    num: 'IV',
    title: 'Entrega editorial',
    body: 'Reportes periódicos con síntesis, claves de lectura y elementos de juicio para tu equipo.',
  },
]

export function Process() {
  return (
    <section className="section" id="proceso">
      <div className="container">
        <div className="section-head">
          <div className="section-head__top">
            <h2 className="section-name">Cómo funciona</h2>
            <span className="section-num">§ 02</span>
          </div>
          <p className="section-dek">
            Una metodología <em>editorial</em> sobre los medios chilenos.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.num}>
              <div className="step__num">{s.num}</div>
              <div>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
