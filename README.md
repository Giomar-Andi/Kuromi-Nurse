# Feliz Día de la Enfermera 🖤🎀

Página sorpresa interactiva con estética "cute-punk" inspirada en Kuromi, lista para personalizar y subir a Vercel.

## 1. Personalizar el contenido

Todo lo que necesitas cambiar está en **un solo lugar**: el objeto `CONFIG` al inicio de `script.js`.

Abre `script.js` y edita:

- `nombre`: el nombre de tu amiga.
- `heroSub`: la frase debajo del título.
- `datos`: las 6 tarjetas volteables (dato curioso / gusto de ella).
- `fotos`: las 6 fotos del collage.
  - Pon la ruta de la imagen en `src`, por ejemplo `"fotos/foto1.jpg"`.
  - Si dejas `src: ""`, se muestra un marco decorativo esperando la imagen (no rompe nada).
  - `nota` es el mensajito que aparece al voltear la foto.
- `razones`: la lista de motivos en la "ficha de enfermera".
- `carta` y `firma`: el mensaje final dentro del sobre.

No necesitas tocar el HTML ni el CSS para personalizar el contenido.

## 2. Agregar tus propias fotos

1. Crea una carpeta llamada `fotos` dentro del proyecto.
2. Coloca ahí las imágenes (ideal: cuadradas, menos de 1MB cada una).
3. En `script.js`, en `CONFIG.fotos`, escribe la ruta en `src`, ej: `"fotos/foto1.jpg"`.

## 3. (Opcional) Ícono para "instalar" la página como app

El archivo `manifest.json` permite que ella pueda tocar "Agregar a pantalla de inicio" en Android o iPhone y la página se abra como una app, sin barra del navegador.

Si quieres un ícono propio:
1. Crea una carpeta `icons`.
2. Agrega `icon-192.png` (192x192px) e `icon-512.png` (512x512px).
Si no agregas nada, la página funciona igual, solo usará el ícono por defecto del navegador.

## 4. Probar antes de subir (opcional)

Puedes abrir `index.html` directamente en el navegador para revisar cómo se ve, o si tienes Node instalado:

```bash
npx serve .
```

## 5. Subir a Vercel

**Opción A — Arrastrar y soltar (la más simple, sin instalar nada):**
1. Entra a https://vercel.com/new
2. Inicia sesión (puedes usar tu cuenta de Google/GitHub).
3. Arrastra la carpeta completa del proyecto al área de "Import" / despliegue.
4. Espera a que termine el despliegue — Vercel te dará un link tipo `tu-proyecto.vercel.app`.

**Opción B — Con GitHub:**
1. Sube esta carpeta a un repositorio de GitHub.
2. En https://vercel.com/new, elige "Import Git Repository" y selecciona el repo.
3. Deja la configuración por defecto (es un sitio estático, no necesita build) y presiona "Deploy".

**Opción C — Con la CLI de Vercel:**
```bash
npm i -g vercel
cd kuromi-enfermera
vercel
```
Sigue las instrucciones en pantalla; al final te dará la URL pública.

El link que te dé Vercel funciona igual desde computadora, Android o iPhone — solo necesita un navegador.

## Estructura del proyecto

```
index.html      → estructura de la página
style.css       → todo el diseño y las animaciones
script.js       → CONFIG editable + toda la interactividad
manifest.json   → permite "instalar" la página como app
vercel.json     → configuración mínima de despliegue
fotos/          → (creas tú) tus imágenes para el collage
icons/          → (opcional) íconos para instalar como app
```

## Qué tiene la página

- Sección de inicio con mascota animada estilo cute-punk y fondo de destellos.
- Tarjetas volteables con datos y detalles sobre ella.
- Collage de "polaroids" que se voltean para mostrar notitas.
- Una "ficha de enfermera" tipo clipboard donde ella puede ir marcando los motivos por los que la admiras.
- Un sobre animado que se abre con confeti al hacer clic, revelando tu carta final.
- Totalmente responsive: se ve bien en computadora, Android e iPhone.
