import { useState, useEffect } from 'react'

const CONTACT_EMAIL = 'equipo@impaktmedia.cl'

interface SubscriptionFormProps {
  open?: boolean
  onClose?: () => void
}

export function SubscriptionForm({ open: externalOpen, onClose }: SubscriptionFormProps = {}) {
  const [internalOpen, setInternalOpen] = useState(false)
  const open = externalOpen ?? internalOpen
  const handleClose = () => {
    setInternalOpen(false)
    onClose?.()
  }

  useEffect(() => {
    if (externalOpen) setInternalOpen(false)
  }, [externalOpen])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [context, setContext] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Solicitud de acceso — Impakt')
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nOrganización: ${company}\n\nContexto:\n${context}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <button
        type="button"
        className="btn btn--primary btn--big"
        onClick={() => {
          setSent(false)
          setInternalOpen(true)
        }}
      >
        Solicitar acceso
        <span className="arrow" aria-hidden="true">→</span>
      </button>

      {open && (
        <div
          className="sub-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sub-modal-title"
          onClick={handleClose}
        >
          <div className="sub-modal__card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="sub-modal__close"
              aria-label="Cerrar"
              onClick={handleClose}
            >
              ×
            </button>
            <h3 id="sub-modal-title" className="sub-modal__title">
              Solicitar <em>acceso</em>
            </h3>
            <p className="sub-modal__sub">
              Cuéntanos tu contexto. Te respondemos con una propuesta editorial
              ajustada a tu equipo.
            </p>
            <form className="sub-form" onSubmit={handleSubmit}>
              <label className="sub-form__field">
                <span>Nombre</span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="sub-form__field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  placeholder="tu@correo.cl"
                />
              </label>
              <label className="sub-form__field">
                <span>Organización</span>
                <input
                  type="text"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  autoComplete="organization"
                  placeholder="Empresa, consultora, equipo"
                />
              </label>
              <label className="sub-form__field">
                <span>Contexto</span>
                <input
                  type="text"
                  name="context"
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  placeholder="Brevemente: qué necesitan leer"
                />
              </label>
              <button type="submit" className="btn btn--primary btn--big sub-form__submit">
                {sent ? 'Enviado' : 'Enviar solicitud'}
                <span className="arrow" aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
