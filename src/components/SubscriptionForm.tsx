import { useState } from 'react'

const MERCADOPAGO_URL =
  'https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=6734b17731b54ef89ff893b2d7dea1ea'

export function SubscriptionForm() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = MERCADOPAGO_URL
  }

  return (
    <>
      <button
        type="button"
        className="btn btn--primary btn--big"
        onClick={() => setOpen(true)}
      >
        Suscribirse con MercadoPago
        <span className="arrow" aria-hidden="true">→</span>
      </button>

      {open && (
        <div
          className="sub-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sub-modal-title"
          onClick={() => setOpen(false)}
        >
          <div className="sub-modal__card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="sub-modal__close"
              aria-label="Cerrar"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <h3 id="sub-modal-title" className="sub-modal__title">
              Empezá tu <em>suscripción</em>
            </h3>
            <p className="sub-modal__sub">
              Completá tus datos y te llevamos al checkout de MercadoPago.
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
                <span>Empresa</span>
                <input
                  type="text"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  autoComplete="organization"
                  placeholder="Nombre de tu empresa"
                />
              </label>
              <button type="submit" className="btn btn--primary btn--big sub-form__submit">
                Suscribirse
                <span className="arrow" aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
