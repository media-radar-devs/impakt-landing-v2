import { SubscriptionForm } from './SubscriptionForm'

export function Contact() {
  return (
    <section className="section" id="contacto">
      <div className="container">
        <div className="section-head">
          <div className="section-head__top">
            <h2 className="section-name">Contacto</h2>
            <span className="section-num">§ 03</span>
          </div>
          <p className="section-dek">
            Conversemos el alcance editorial que necesitas.
          </p>
        </div>

        <div className="contact">
          <div>
            <p className="contact__lead">
              Trabajamos con equipos que leen el ecosistema mediático con
              criterio profesional.
            </p>
            <p className="contact__body">
              Áreas de comunicaciones, asuntos públicos, dirección ejecutiva y
              consultoría política son nuestros interlocutores habituales.
              Definimos juntos el alcance, los actores y los criterios de
              lectura. La propuesta económica se conversa caso a caso.
            </p>
          </div>

          <div className="contact__panel">
            <span className="contact__panel-head">Solicitar acceso</span>
            <h3 className="contact__panel-title">
              Agenda una conversación con el equipo.
            </h3>
            <p className="contact__panel-note">
              Cuéntanos brevemente tu contexto y te respondemos con una
              propuesta editorial ajustada.
            </p>
            <SubscriptionForm />
          </div>
        </div>
      </div>
    </section>
  )
}
