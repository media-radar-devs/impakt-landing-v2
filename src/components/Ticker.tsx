import { useEffect, useState } from 'react'
import { NOTICIAS_API } from '../config'

type Noticia = {
  id: string
  title: string
  url: string
  published_at: string
}

const formatTime = (date: Date): string => {
  const hh = String(date.getHours()).padStart(2, '0')
  const mm = String(date.getMinutes()).padStart(2, '0')
  const ss = String(date.getSeconds()).padStart(2, '0')
  return `${hh}:${mm}:${ss}`
}

const formatPublished = (iso: string): string => {
  const d = new Date(iso)
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  return `${hh}:${mm}`
}

export function Ticker() {
  const [time, setTime] = useState<string>(() => formatTime(new Date()))
  const [noticias, setNoticias] = useState<Noticia[]>([])

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    fetch(NOTICIAS_API)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setNoticias(data.filter((n: Noticia) => n.title))
        }
      })
      .catch(() => {})
  }, [])

  if (noticias.length === 0) return null

  const items = [...noticias, ...noticias]

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
            <span className="ticker__item" key={`${item.id}-${i}`}>
              <span className="t">{formatPublished(item.published_at)}</span>
              <span className="arrow">▸</span>
              <span className="title">{item.title}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="ticker__meta">Noticias en tiempo real</div>
    </div>
  )
}
