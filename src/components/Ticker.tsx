import { useEffect, useState } from 'react'

type Alert = {
  keyword: string
  source: string
}

const FEED: Alert[] = [
  { keyword: 'Banco Central', source: 'La Tercera' },
  { keyword: 'IPC', source: 'BioBioChile' },
  { keyword: 'Litio', source: 'El Mercurio' },
  { keyword: 'Reforma', source: 'T13' },
  { keyword: 'Codelco', source: 'La Segunda' },
  { keyword: 'Pensiones', source: 'Cooperativa' },
  { keyword: 'Gabinete', source: 'CNN Chile' },
  { keyword: 'Salario mínimo', source: 'Pulso' },
  { keyword: 'Energía', source: 'Diario Financiero' },
  { keyword: 'Constitución', source: 'Ex-Ante' },
  { keyword: 'Salud', source: 'ADN Radio' },
  { keyword: 'Educación', source: 'La Tercera' },
]

const formatTime = (date: Date): string => {
  const hh = String(date.getHours()).padStart(2, '0')
  const mm = String(date.getMinutes()).padStart(2, '0')
  const ss = String(date.getSeconds()).padStart(2, '0')
  return `${hh}:${mm}:${ss}`
}

export function Ticker() {
  const [time, setTime] = useState<string>(() => formatTime(new Date()))

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  const items = [...FEED, ...FEED]

  return (
    <div className="ticker" role="status" aria-live="polite">
      <div className="ticker__live">
        <span className="ticker__dot" aria-hidden="true" />
        <span>EN VIVO</span>
      </div>
      <div className="ticker__time">{time} CLT</div>
      <div className="ticker__feed">
        <div className="ticker__track">
          {items.map((item, i) => (
            <span className="ticker__item" key={`${item.keyword}-${item.source}-${i}`}>
              <span className="t">{stamp(i)}</span>
              <span className="arrow">▸</span>
              <span className="k">{item.keyword}</span>
              <span className="arrow">·</span>
              <span className="src">{item.source}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="ticker__meta">10 conceptos · 2 reportes/día</div>
    </div>
  )
}

const stamp = (i: number): string => {
  const base = 12 * 3600 + 43 * 60 + 9
  const t = base - i * 47
  const h = Math.floor((t / 3600) % 24)
  const m = Math.floor((t / 60) % 60)
  const s = Math.floor(t % 60)
  const pad = (n: number): string => String(n).padStart(2, '0')
  return `${pad(h)}:${pad(m)}:${pad(s)}`
}
