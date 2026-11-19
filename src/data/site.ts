export interface NavItem {
  label: string;
  href: string;
}

export interface ProjectItem {
  id: 'taxiya' | 'laboratorio';
  title: string;
  badge: string;
  accent: 'magenta' | 'turquoise';
  domainLabel: string;
  description: string;
}

export const SITE_INFO = {
  brandName: 'Geti Soluciones',
  developerName: 'Pacheco Joaquín',
  roleHeadline: 'Docente de matemáticas · Fundador de Geti Soluciones',
  roleFull: 'Docente de matemáticas y fundador de Geti Soluciones',
  location: 'Andalgalá, Catamarca, Argentina',
  email: 'geti.soluciones@gmail.com',
  bio: 'Soy docente de matemáticas en Andalgalá y desarrollo aplicaciones Android para resolver tareas diarias, automatizar procesos y conectar personas de la zona.',
  copyright: '© 2026 Geti Soluciones · Pacheco Joaquín',
  privacyUpdatedAt: '19 de noviembre de 2026',
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
    accent: 'magenta',
    domainLabel: 'Android · Viajes locales',
    description:
      'Aplicación Android para pedir viaje y conectar pasajeros directamente con choferes disponibles.',
  },
  {
    id: 'laboratorio',
    title: 'Nuevas herramientas en desarrollo',
    badge: 'En laboratorio',
    accent: 'turquoise',
    domainLabel: 'Android · Uso diario',
    description:
      'Prototipos que probamos antes de publicar en Google Play, pensados para automatizar tareas repetitivas desde el celular.',
  },
] as const;
