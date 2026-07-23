export const TELEGRAM_URL = 'https://t.me/Impakt_media_bot'
export const CONTACT_EMAIL = 'equipo@impaktmedia.cl'
const VARYS = 'https://varys-tcopd6ap3a-uc.a.run.app'
export const COBERTURA_API = import.meta.env.PROD
  ? `${VARYS}/api/cobertura`
  : '/api/cobertura'
