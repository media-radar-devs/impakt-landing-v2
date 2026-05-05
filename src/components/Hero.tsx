import banner from '../assets/img/impakt_test.png'

export function Hero() {
  const today = new Date().toLocaleDateString('es-CL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className="hero">
      <img
        src={banner}
        alt=""
        aria-hidden="true"
        className="hero__banner"
      />
      <div className="container">
        <div className="hero__dateline">
          <span>Impakt Media</span>
          <span className="dot">·</span>
          <span>Santiago, Chile</span>
          <span className="dot">·</span>
          <span>{today}</span>
          <span className="dot">·</span>
          <span>Edición digital</span>
        </div>

        <h1 className="hero__headline">
          Lo que dicen
          <br />
          sobre ti, <em>al instante</em>.
        </h1>

        <div className="hero__sub">
          <div>
            <p className="hero__copy">
              Monitoreamos 24/7 los medios digitales chilenos. Cuando alguien
              menciona tu marca, tu sector o tu nombre, lo sabes en segundos —
              directo a tu Telegram. Sin ruido, sin demoras, sin perderte nada.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary btn--big" href="#precio">
                Empezar a monitorear
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a className="btn btn--ghost btn--big" href="#proceso">
                Ver cómo funciona
              </a>
            </div>
          </div>

          <div className="hero__panel" aria-hidden="true">
            <div className="alert-card">
              <div className="alert-card__head">
                <span className="alert-card__bot">i</span>
                <span>impakt_bot · 12:43</span>
              </div>
              <div className="alert-card__msg">
                Nueva mención de <strong>"tu marca"</strong> en La Tercera —
                titular en portada digital.
              </div>
              <div className="alert-card__foot">
                <span>Telegram · alerta #2.481</span>
                <span>1 seg</span>
              </div>
            </div>
            <div className="alert-card">
              <div className="alert-card__head">
                <span className="alert-card__bot">i</span>
                <span>impakt_bot · 12:39</span>
              </div>
              <div className="alert-card__msg">
                <strong>"sector retail"</strong> — 4 menciones en la última
                hora. Tendencia al alza.
              </div>
              <div className="alert-card__foot">
                <span>Telegram · alerta #2.480</span>
                <span>4 min</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__stats">
          <div className="stat">
            <div className="stat__num">
              24<em>/</em>7
            </div>
            <div className="stat__label">Monitoreo continuo</div>
          </div>
          <div className="stat">
            <div className="stat__num">
              &lt;<em>5s</em>
            </div>
            <div className="stat__label">Latencia de alerta</div>
          </div>
          <div className="stat">
            <div className="stat__num">
              10<em>+</em>
            </div>
            <div className="stat__label">Conceptos vigilados</div>
          </div>
        </div>
      </div>
    </section>
  )
}
