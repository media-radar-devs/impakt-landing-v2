import { useEffect, useState } from 'react'
import { NOTICIAS_API } from '../config'

type Noticia = {
  id: string
  title: string
  url: string
  published_at: string
}

const CACHE_KEY = 'ticker_noticias'
const CACHE_TTL = 3_600_000

function loadCache(): Noticia[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { data, ts } = JSON.parse(raw)
    if (Date.now() - ts > CACHE_TTL) return null
    return data
  } catch {
    return null
  }
}

function saveCache(data: Noticia[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }))
  } catch {}
}

export function Ticker() {
  const [noticias, setNoticias] = useState<Noticia[]>(() => loadCache() ?? [])

  useEffect(() => {
    if (loadCache()) return
    fetch(NOTICIAS_API)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const filtered = data.filter((n: Noticia) => n.title)
          setNoticias(filtered)
          saveCache(filtered)
        }
      })
      .catch(() => {})
  }, [])

  if (noticias.length === 0) return null

  const items = [...noticias, ...noticias]
  const animDuration = Math.max(items.length * 5, 60)

  return (
    <div className="ticker">
      <div className="ticker__feed">
        <div className="ticker__track" style={{ animationDuration: `${animDuration}s` }}>
          {items.map((item, i) => (
            <span className="ticker__item" key={`${item.id}-${i}`}>
              <span className="title">{item.title}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
