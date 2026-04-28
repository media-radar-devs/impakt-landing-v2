type Step = {
  num: string
  title: string
  body: string
}

const STEPS: Step[] = [
  {
    num: 'I',
    title: 'Eliges tus conceptos.',
    body: 'Hasta 10 palabras o frases clave: tu marca, competidores, sector, ejecutivos, regulación.',
  },
  {
    num: 'II',
    title: 'Conectamos tu Telegram.',
    body: 'En menos de 5 minutos. Recibes las alertas donde ya estás —sin instalar nada nuevo.',
  },
  {
    num: 'III',
    title: 'Monitoreamos sin descanso.',
    body: 'Nuestros bots barren los medios digitales chilenos en tiempo real, 24 horas al día.',
  },
  {
    num: 'IV',
    title: 'Recibes lo que importa.',
    body: 'Alertas al instante + dos reportes diarios consolidados con tendencias y análisis.',
  },
]

export function Process() {
  return (
    <section className="section" id="proceso">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">
            <span className="num">§ 02</span>
            <span className="eyebrow">Cómo funciona</span>
          </div>
          <h2 className="section-title">
            De la noticia <em>publicada</em>
            <br />
            a tu pantalla, en segundos.
          </h2>
        </div>

        <div className="process">
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

          <div className="phone" aria-hidden="true">
            <div className="phone__screen">
              <div className="phone__head">
                <div className="phone__avatar">i</div>
                <div className="phone__name">
                  <b>impakt_bot</b>
                  <span>en línea · 12:43</span>
                </div>
              </div>

              <div className="tg-msg">
                <div className="tg-msg__head">
                  <span className="tg-dot" /> alerta · keyword
                </div>
                Nueva mención de <span className="kw">"banco central"</span>
                <span className="src">La Tercera · 12:43</span>
              </div>

              <div className="tg-msg">
                <div className="tg-msg__head">
                  <span className="tg-dot" /> alerta · keyword
                </div>
                Nueva mención de <span className="kw">"IPC"</span>
                <span className="src">BioBioChile · 12:39</span>
              </div>

              <div className="tg-msg">
                <div className="tg-msg__head">
                  <span className="tg-dot" /> tendencia
                </div>
                <span className="kw">"litio"</span> — 6 menciones en la última
                hora.
                <span className="src">resumen automático</span>
              </div>

              <div className="tg-msg">
                <div className="tg-msg__head">
                  <span className="tg-dot" /> reporte 14:00
                </div>
                Resumen vespertino enviado al correo. 23 menciones registradas.
                <span className="src">impakt · daily</span>
              </div>

              <div className="tg-time">12:43</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
