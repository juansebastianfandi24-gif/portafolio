export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    title: "Gestión de Notas Académicas",
    description: "Sistema completo en Java + MySQL para administrar estudiantes, cursos y actividades académicas. Incluye vistas, lógica de negocio robusta y manejo eficiente de datos.",
    image: "/images/project-placeholder.svg",
    technologies: ["Java", "MySQL", "JDBC", "MVC"],
    githubUrl: "https://github.com/Sebastianfandi24",
    category: "Backend & Database"
  },
  {
    title: "API REST - Integración de Datos",
    description: "Desarrollo de API RESTful con arquitectura en capas, endpoints bien definidos y pruebas completas de backend/frontend. Diseñada para escalabilidad y mantenibilidad.",
    image: "/images/project-placeholder.svg",
    technologies: ["Python", "PostgreSQL", "API", "REST"],
    githubUrl: "https://github.com/Sebastianfandi24",
    category: "API & Backend"
  },
  {
    title: "The Cyber Instructor - Bootcamp",
    description: "Aplicación completa desarrollada como proyecto final de bootcamp. Incluye levantamiento de requerimientos, casos de uso, pruebas exhaustivas y despliegue siguiendo metodologías ágiles.",
    image: "/images/project-placeholder.svg",
    technologies: ["Python", "HTML", "CSS", "PostgreSQL", "Agile"],
    githubUrl: "https://github.com/Sebastianfandi24",
    category: "Full Stack"
  },
  // Proyectos adicionales - se irán agregando
  {
    title: "Sistema ETL y Análisis de Datos",
    description: "Herramienta para extracción, transformación y carga de datos con análisis avanzado. Automatiza procesos de migración y limpieza de información.",
    image: "/images/project-placeholder.svg",
    technologies: ["Python", "Pandas", "SQL", "ETL"],
    githubUrl: "https://github.com/Sebastianfandi24",
    category: "Data Engineering"
  },
  {
    title: "Proyecto Web Moderno",
    description: "Aplicación web responsive con diseño moderno y funcionalidades avanzadas. Integración con bases de datos y API REST.",
    image: "/images/project-placeholder.svg",
    technologies: ["React", "PostgreSQL", "Tailwind", "API"],
    githubUrl: "https://github.com/Sebastianfandi24",
    category: "Full Stack"
  },
  {
    title: "Herramientas de Ciberseguridad",
    description: "Proyecto educativo enfocado en pentesting básico y seguridad en redes. Desarrollo de scripts y herramientas para auditoría de seguridad.",
    image: "/images/project-placeholder.svg",
    technologies: ["Python", "Networking", "Security", "Linux"],
    githubUrl: "https://github.com/Sebastianfandi24",
    category: "Cybersecurity"
  },
];
