# Portafolio Personal

Portafolio profesional construido con Next.js 16, TypeScript y Tailwind CSS.

## 🚀 Características

- ⚡ Next.js 16 con App Router
- 🎨 Tailwind CSS para estilos
- 🌗 Modo oscuro integrado
- 📱 Diseño completamente responsive
- ⚙️ TypeScript para type safety
- 🎯 Optimizado para SEO
- 🚀 Listo para desplegar en Vercel

## 📁 Estructura del Proyecto

```
/portafolio/
│
├── /app/                  ← App Router de Next.js
│   ├── layout.tsx         ← Layout principal
│   └── page.tsx           ← Página de inicio
│
├── /src/                  ← Código fuente principal
│   ├── /components/       ← Componentes reutilizables
│   │   ├── NavBar.tsx
│   │   ├── Footer.tsx
│   │   └── ProjectCard.tsx
│   │
│   ├── /sections/         ← Secciones de la página
│   │   ├── HomeSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   │
│   ├── /data/             ← Datos estáticos
│   │   └── projectsData.ts
│   │
│   ├── /styles/           ← Estilos
│   │   ├── globals.css
│   │   └── theme.css
│   │
│   ├── /utils/            ← Funciones auxiliares
│   │   └── api.ts
│   │
│   └── /assets/           ← Recursos (imágenes, fuentes, iconos)
│       ├── /images/
│       ├── /fonts/
│       └── /icons/
│
├── /public/               ← Archivos estáticos
│   └── /images/           ← Imágenes públicas
│
└── /backend/              ← (Opcional) Backend con Node.js/Express
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Personalización

### Información Personal

Edita los siguientes archivos para personalizar tu portafolio:

1. **Datos de proyectos**: `src/data/projectsData.ts`
2. **Sección de inicio**: `src/sections/HomeSection.tsx`
3. **Sección sobre mí**: `src/sections/AboutSection.tsx`
4. **Metadata SEO**: `app/layout.tsx`

### Estilos y Tema

- **Colores y variables**: `src/styles/theme.css`
- **Estilos globales**: `src/styles/globals.css`

## 🌐 API de GitHub

El archivo `src/utils/api.ts` incluye funciones para obtener información de tu perfil y repositorios de GitHub.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

