export interface NavItem {
  label: string;
  href: string;
}

export interface ProjectItem {
  id: 'taxiya' | 'laboratorio';
  title: string;
  badge: string;
  accent: 'cyan' | 'violet';
  domainLabel: string;
  description: string;
}

export const SITE_INFO = {
  brandName: 'Geti Soluciones',
  developerName: 'Pacheco Joaquín',
  roleHeadline: 'Fundador de Geti Soluciones | Docente de Matemáticas',
  roleFull: 'Docente de Matemáticas y fundador de Geti Soluciones',
  location: 'Andalgalá, Catamarca, Argentina',
  email: 'geti.soluciones@gmail.com',
  bio: 'Desarrollo aplicaciones móviles prácticas y herramientas pensadas para resolver tareas cotidianas mediante la automatización y la conexión eficiente entre personas.',
  copyright: 'Copyright 2026 Geti Soluciones - Pacheco Joaquín',
  privacyUpdatedAt: 'Noviembre de 2026',
} as const;

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Contacto', href: '/#contacto' },
  { label: 'Privacidad', href: '/privacidad' },
] as const;

export const PROJECTS: readonly ProjectItem[] = [
  {
    id: 'taxiya',
    title: 'TaxiYa',
    badge: 'Próximamente',
    accent: 'cyan',
    domainLabel: 'Android · Movilidad urbana',
    description:
      'Plataforma de movilidad diseñada para conectar pasajeros y conductores de forma rápida y directa.',
  },
  {
    id: 'laboratorio',
    title: 'Nuevas herramientas en desarrollo',
    badge: 'En laboratorio',
    accent: 'violet',
    domainLabel: 'Android · Utilidades diarias',
    description:
      'Soluciones de uso diario actualmente en etapa de prueba, orientadas a automatizar tareas frecuentes y agilizar gestiones cotidianas desde el celular.',
  },
] as const;
