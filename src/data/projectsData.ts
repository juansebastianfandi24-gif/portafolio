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
    description: "Sistema completo en Java + MySQL para administrar estudiantes, cursos y actividades académicas. Incluye vistas, lógica de negocio robusta y manejo eficiente de datos con arquitectura MVC.",
    image: "https://images.pexels.com/photos/16592498/pexels-photo-16592498/free-photo-of-internet-conexion-tecnologia-ordenador.jpeg",
    technologies: ["Java", "MySQL", "JDBC", "MVC"],
    githubUrl: "https://github.com/Sebastianfandi24/Ges_de_Notas",
    category: "Backend & Database"
  },
  {
    title: "API Conexión - Clase",
    description: "Desarrollo de API RESTful con arquitectura en capas para gestión de conexiones. Implementa endpoints bien definidos con pruebas completas y documentación clara.",
    image: "https://images.pexels.com/photos/16592498/pexels-photo-16592498/free-photo-of-internet-conexion-tecnologia-ordenador.jpeg",
    technologies: ["Python", "API", "REST", "Backend"],
    githubUrl: "https://github.com/Sebastianfandi24/ApIConexionClase",
    category: "API & Backend"
  },
  {
    title: "Parcial 2 - Base de Datos",
    description: "Proyecto académico de bases de datos con modelado avanzado, consultas complejas, procedimientos almacenados y optimización de queries. Implementación de buenas prácticas en diseño de BD.",
    image: "https://images.pexels.com/photos/16592498/pexels-photo-16592498/free-photo-of-internet-conexion-tecnologia-ordenador.jpeg",
    technologies: ["SQL", "PostgreSQL", "Database Design", "Optimization"],
    githubUrl: "https://github.com/Sebastianfandi24/Parcial2BD",
    category: "Backend & Database"
  },
  {
    title: "ETL Fast",
    description: "Herramienta optimizada para extracción, transformación y carga de datos. Automatiza procesos de migración, limpieza y análisis de información con alto rendimiento.",
    image: "https://images.pexels.com/photos/16592498/pexels-photo-16592498/free-photo-of-internet-conexion-tecnologia-ordenador.jpeg",
    technologies: ["Python", "Pandas", "ETL", "Data Processing"],
    githubUrl: "https://github.com/Sebastianfandi24/ETLFast",
    category: "Data Engineering"
  },
  {
    title: "The Cyber Instructor - Bootcamp",
    description: "Aplicación completa desarrollada como proyecto final de bootcamp. Incluye levantamiento de requerimientos, casos de uso, arquitectura completa, pruebas exhaustivas y despliegue siguiendo metodologías ágiles.",
    image: "https://images.pexels.com/photos/16592498/pexels-photo-16592498/free-photo-of-internet-conexion-tecnologia-ordenador.jpeg",
    technologies: ["Python", "HTML", "CSS", "PostgreSQL", "Agile"],
    githubUrl: "https://github.com/Sebastianfandi24/TRABAJO-FINAL-BOOTCAMP",
    category: "Full Stack"
  },
];
