"use client";

import { useState } from "react";
import ProjectCard from "@/src/components/ProjectCard";
import { projects } from "@/src/data/projectsData";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Obtener todas las categorías únicas
  const categories = Array.from(
    new Set(projects.map(p => p.category).filter((c): c is string => c !== undefined))
  );
  
  // Filtrar proyectos según categoría seleccionada
  const filteredProjects = filter
    ? projects.filter(p => p.category === filter)
    : projects;

  return (
    <section id="proyectos" className="min-h-screen py-20 px-4 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
            🚀 Mis Proyectos
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Proyectos destacados en desarrollo de software, desde APIs REST hasta aplicaciones completas Full Stack
          </p>
        </div>
        
        {/* Filtros por categoría */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter(null)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === null
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-purple-100 dark:hover:bg-purple-950 hover:text-purple-600 dark:hover:text-purple-400"
            }`}
          >
            Todos ({projects.length})
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-purple-100 dark:hover:bg-purple-950 hover:text-purple-600 dark:hover:text-purple-400"
              }`}
            >
              {category} ({projects.filter(p => p.category === category).length})
            </button>
          ))}
        </div>
        
        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        {/* Mensaje si no hay proyectos filtrados */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              No hay proyectos en esta categoría
            </p>
          </div>
        )}
        
        {/* Nota sobre proyectos */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg p-6 max-w-2xl">
            <p className="text-purple-900 dark:text-purple-200">
              💡 <strong>Proyectos en constante actualización.</strong> Visita mi{" "}
              <a 
                href="https://github.com/Sebastianfandi24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-purple-600 dark:hover:text-purple-400"
              >
                GitHub
              </a>
              {" "}para ver más de mi trabajo y contribuciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
