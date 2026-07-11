import banner from '../asset/img/impakt_test.png'
import telegramLogo from '../asset/img/telegram-logo-0-2.png'
import { TELEGRAM_URL } from '../config'

interface HeroProps {
  onRequestAccess: () => void
}

export function Hero({ onRequestAccess }: HeroProps) {
  const today = new Date().toLocaleDateString('es-CL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className="hero">
      <div className="hero__banner-wrap">
        <img src={banner} alt="Banner editorial de Impakt" className="hero__banner" fetchPriority="high" loading="eager" decoding="async" width={1200} height={400} />
      </div>

      <div className="container hero__body">
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
          Lectura sistemática
          <br />
          de los medios <em>chilenos</em>.
        </h1>

        <div className="hero__sub">
          <p className="hero__copy">
            Cobertura editorial continua de los principales medios digitales
            chilenos. Análisis de coyuntura, sectores y actores con criterio
            profesional, para equipos que necesitan leer el ecosistema antes de
            reaccionar.
          </p>
          <div className="hero__cta">
            <button type="button" className="btn btn--primary btn--big" onClick={onRequestAccess}>
              Solicitar acceso
              <span className="arrow" aria-hidden="true">→</span>
            </button>
            <a className="btn btn--ghost btn--big" href="#proceso">
              Ver metodología
            </a>
            <a
              className="btn btn--telegram btn--big"
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={telegramLogo} alt="Telegram" className="btn__telegram-icon" />
              Acceso vía Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
