import { useEffect, useState } from 'react'
import { COBERTURA_API } from '../config'

const CACHE_KEY = 'ticker_cobertura'
const CACHE_TTL = 3_600_000

function loadCache(): string[] | null {
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

function saveCache(data: string[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }))
  } catch {}
}

export function Ticker() {
  const [topics, setTopics] = useState<string[]>(() => loadCache() ?? [])

  useEffect(() => {
    if (loadCache()) return
    fetch(COBERTURA_API)
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data.topics) && data.topics.length > 0) {
          setTopics(data.topics)
          saveCache(data.topics)
        }
      })
      .catch(() => {})
  }, [])

  if (topics.length === 0) return null

  const items = [...topics, ...topics]
  const animDuration = Math.max(items.length * 5, 60)

  return (
    <div className="ticker">
      <div className="ticker__feed">
        <div className="ticker__track" style={{ animationDuration: `${animDuration}s` }}>
          {items.map((topic, i) => (
            <span className="ticker__item" key={`${topic}-${i}`}>
              <span className="title">{topic}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
