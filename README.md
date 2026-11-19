# Geti Soluciones — Sitio Oficial de Desarrollador

Sitio web oficial de **Pacheco Joaquín** (**Geti Soluciones**), desarrollado con Astro, TypeScript y Tailwind CSS para respaldar la verificación de cuenta de desarrollador y políticas de privacidad en Google Play Console.

## Rutas incluidas

- `/` — Portada con red de nodos interactiva, presentación de perfil, sección *Aplicaciones y Proyectos* (*TaxiYa* y *Nuevas herramientas en desarrollo*) y datos de contacto con copia rápida de correo.
- `/privacidad` — Política de Privacidad general para las aplicaciones de Geti Soluciones (incluyendo *TaxiYa*).

## Comandos locales

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Despliegue en Vercel

El proyecto genera salida estática estándar en `dist/` y no requiere adaptadores ni variables de entorno adicionales:

1. Inicializá git (si todavía no existe), hacé commit y subí el repositorio a GitHub, GitLab o Bitbucket (`git push`).
2. Importá el repositorio desde el panel de Vercel; Vercel detectará **Astro** automáticamente con `npm run build` y publicará `dist/`.
