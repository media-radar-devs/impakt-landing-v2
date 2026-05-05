import { SubscriptionForm } from './SubscriptionForm'

const FEATURES: { strong: string; rest: string }[] = [
  { strong: '10 conceptos', rest: 'personalizados a vigilar' },
  { strong: 'Alertas en Telegram', rest: 'al instante, sin demora' },
  { strong: '2 reportes diarios', rest: 'mañana y tarde, vía correo' },
  { strong: 'Análisis de tendencias', rest: 'sobre tus keywords' },
  { strong: 'Cobertura completa', rest: 'de medios digitales chilenos' },
  { strong: 'Soporte directo', rest: 'sin tickets, sin esperas' },
]

export function Pricing() {
  return (
    <section className="section" id="precio">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">
            <span className="num">§ 03</span>
            <span className="eyebrow">Suscripción</span>
          </div>
          <h2 className="section-title">
            Un plan, todo incluido. <em>Sin asteriscos.</em>
          </h2>
        </div>

        <div className="price">
          <div className="price__main">
            <span className="price__tag">
              <span aria-hidden="true">●</span> Plan Estándar
            </span>
            <h3 className="price__name">
              Impakt <em>Pro</em>
            </h3>
            <p className="hero__copy" style={{ marginTop: 12 }}>
              Todo lo que necesitas para mantenerte al día con lo que se dice
              de tu marca y tu sector en los medios chilenos.
            </p>

            <div className="price__amount">
              <span className="num">$10.000</span>
              <span className="currency">CLP</span>
            </div>
            <div className="price__period">por mes · cancela cuando quieras</div>

            <div className="price__cta">
              <SubscriptionForm />
            </div>
          </div>

          <div className="price__features">
            <h4>Incluye</h4>
            {FEATURES.map((f) => (
              <div className="feat" key={f.strong}>
                <span className="feat__check" aria-hidden="true">✓</span>
                <span>
                  <strong>{f.strong}</strong> {f.rest}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
