# Geti Soluciones — Sitio de desarrollador

Sitio web de Pacheco Joaquín (Geti Soluciones) en Andalgalá, Catamarca, hecho con Astro, TypeScript y Tailwind CSS para validar la cuenta de desarrollador y las políticas de privacidad en Google Play Console.

## Rutas incluidas

- `/` — Portada con red de nodos en Canvas, presentación del perfil, sección Aplicaciones (TaxiYa y Nuevas herramientas en desarrollo) y sección Contacto con botón para copiar el correo.
- `/privacidad` — Política de privacidad de TaxiYa y las aplicaciones Android de Geti Soluciones.

## Comandos locales

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Despliegue en Vercel

El proyecto genera salida estática en `dist/` y no usa adaptadores ni variables de entorno adicionales:

1. Hacé commit de los cambios y subilos a GitHub (`git push`).
2. Importá el repositorio en Vercel; Vercel detecta Astro automáticamente con `npm run build` y publica `dist/`.
