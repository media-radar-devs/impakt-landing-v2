# Impakt — Landing

Sitio web estático de Impakt Media (React + Vite + TypeScript).

> **Esta guía asume que nunca corriste el proyecto antes.** Si algo no funciona, mira la sección [Solución de problemas](#solución-de-problemas) al final.

---

## Cómo correr el sitio en tu computador

### 1. Abrir una terminal en la carpeta del proyecto

En Linux, abrí la terminal (Ctrl + Alt + T) y andá a la carpeta del proyecto:

```bash
cd ~/proyectos/impakt-landing-v2
```

> Si la carpeta está en otro lado, reemplazá la ruta. Para confirmar dónde estás, escribí `pwd` y apretá Enter — debería terminar en `impakt-landing-v2`.

---

### 2. Verificar que tenés Node.js y pnpm instalados

Escribí estos dos comandos, uno por uno:

```bash
node -v
pnpm -v
```

Tenés que ver dos números de versión, por ejemplo:

```
v23.1.0
10.28.1
```

- **Node.js** debe ser `v18` o superior. Si te dice "command not found", instalalo desde https://nodejs.org/ (descargá la versión LTS).
- **pnpm** es nuestro gestor de paquetes. Si te dice "command not found", instalalo con:

  ```bash
  npm install -g pnpm
  ```

  (esto puede pedirte tu contraseña).

---

### 3. Instalar las dependencias

**Solo la primera vez** que corras el proyecto, o cuando alguien agregue una librería nueva, ejecutá:

```bash
pnpm install
```

Esto descarga todas las librerías que el sitio necesita. Tarda entre 30 segundos y 2 minutos según tu internet. Vas a ver mucho texto pasando — es normal.

Cuando termine, vas a ver algo como `Done in 45.3s` y volverás al prompt.

> Si en el futuro ves errores raros al levantar el sitio, borrá la carpeta `node_modules` y volvé a correr `pnpm install`. Comando rápido:
> ```bash
> rm -rf node_modules && pnpm install
> ```

---

### 4. Levantar el sitio en modo desarrollo

Ya con las dependencias instaladas, escribí:

```bash
pnpm dev
```

Vas a ver algo como esto:

```
  VITE v8.0.10  ready in 320 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

> Si la línea **Local** dice `5174` o cualquier otro número en vez de `5173`, no pasa nada — usá el número que aparezca.

---

### 5. Abrir el sitio en tu navegador

Abrí cualquier navegador (Chrome, Firefox, etc.) y andá a:

```
http://localhost:5173/
```

(O el puerto que te haya mostrado la consola.)

Listo, deberías ver el sitio. Cualquier cambio que se haga al código se va a reflejar en el navegador automáticamente.

---

### 6. Cómo apagar el servidor

Cuando termines, volvé a la terminal donde corre `pnpm dev` y apretá:

```
Ctrl + C
```

Esto detiene el servidor. La terminal vuelve al prompt normal.

---

### 7. (Opcional) Probar la versión "de producción"

Si querés ver cómo va a quedar el sitio compilado para subir a internet (más rápido, optimizado):

```bash
pnpm build
pnpm preview
```

- `pnpm build` genera la carpeta `dist/` con los archivos finales.
- `pnpm preview` levanta un servidor para probar esa versión, normalmente en `http://localhost:4173/`.

Para apagarlo, también `Ctrl + C`.

---

### 8. (Opcional) Ver el sitio desde tu celular en la misma red

Útil si querés revisar cómo se ve en móvil sin desplegar nada. En vez de `pnpm dev`, ejecutá:

```bash
pnpm dev --host
```

La consola te mostrará dos URLs:

```
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.42:5173/
```

Desde tu celular (conectado al mismo WiFi), abrí la URL de **Network** en el navegador del teléfono.

---

## Solución de problemas

### "command not found: pnpm"
Instalá pnpm:
```bash
npm install -g pnpm
```

### "command not found: node" o "command not found: npm"
Instalá Node.js desde https://nodejs.org/ (versión LTS). Cerrá y volvé a abrir la terminal después de instalar.

### "EADDRINUSE: address already in use" o "Port 5173 is already in use"
Hay otro proceso usando el puerto. Opciones:
1. Dejá que Vite use otro puerto: te lo va a asignar automáticamente, mirá la URL que muestra.
2. O matá el proceso anterior:
   ```bash
   pkill -f vite
   ```
   y volvé a correr `pnpm dev`.

### El navegador no carga nada o queda en blanco
- Verificá en la terminal que no haya un error en rojo.
- Probá refrescar con `Ctrl + Shift + R` (recarga forzada sin cache).
- Probá con `http://127.0.0.1:5173/` en vez de `localhost`.

### Errores al hacer `pnpm install`
- Asegurate de tener internet.
- Borrá y reinstalá:
  ```bash
  rm -rf node_modules pnpm-lock.yaml
  pnpm install
  ```
  (Atención: solo borrá `pnpm-lock.yaml` si la primera opción no funcionó. Idealmente conservalo.)

### El sitio compila pero algo se ve roto
- Pará el servidor (`Ctrl + C`) y volvelo a levantar (`pnpm dev`).
- Hacé recarga forzada en el navegador: `Ctrl + Shift + R`.

---

## Estructura del proyecto

```
impakt-landing-v2/
├── index.html              # Página HTML raíz
├── package.json            # Lista de scripts y dependencias
├── public/                 # Archivos estáticos (favicon, imágenes públicas)
├── src/
│   ├── App.tsx             # Componente raíz
│   ├── main.tsx            # Punto de entrada de React
│   ├── index.css           # Estilos globales y design system
│   ├── assets/img/         # Imágenes usadas por componentes
│   └── components/         # Componentes de cada sección
│       ├── Ticker.tsx      # Barra superior con noticias
│       ├── Nav.tsx         # Barra de navegación
│       ├── Hero.tsx        # Sección principal con banner
│       ├── Services.tsx    # Sección "Servicios"
│       ├── Process.tsx     # Sección "Cómo funciona"
│       ├── Contact.tsx     # Sección "Contacto"
│       ├── SubscriptionForm.tsx  # Modal de solicitud de acceso
│       └── Footer.tsx      # Pie de página
└── README.md               # Este archivo
```

---

## Comandos útiles (referencia rápida)

| Comando | Qué hace |
|---|---|
| `pnpm install` | Instala las dependencias (la primera vez o si fallan) |
| `pnpm dev` | Levanta el servidor de desarrollo |
| `pnpm dev --host` | Igual, pero accesible desde otros dispositivos en la red |
| `pnpm build` | Genera la versión de producción en `dist/` |
| `pnpm preview` | Sirve la versión de producción para probarla |
| `pnpm lint` | Revisa el código con ESLint |
| `Ctrl + C` | Apaga el servidor que esté corriendo en la terminal |
