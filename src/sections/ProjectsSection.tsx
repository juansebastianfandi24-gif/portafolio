"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Project, projects } from "@/data/projectsData";
import { getGitHubRepos } from "@/utils/api";
import { siteConfig } from "@/utils/config";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [allProjects, setAllProjects] = useState<Project[]>(projects);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubProjects() {
      setIsLoading(true);
      try {
        const githubRepos = await getGitHubRepos(siteConfig.github.split('/').pop() || "");
        
        // Mapear repos de GitHub a nuestro formato Project
        const mappedRepos: Project[] = githubRepos.map((repo: any) => ({
          title: repo.title,
          description: repo.description,
          image: repo.image,
          technologies: repo.language ? [repo.language, ...repo.technologies] : repo.technologies,
          githubUrl: repo.githubUrl,
          liveUrl: repo.liveUrl,
          category: categorizarProyecto(repo.language, repo.technologies),
        }));

        // Combinar proyectos destacados con repos de GitHub (sin duplicados)
        const githubUrls = projects.map((p: Project) => p.githubUrl);
        const uniqueGithubRepos = mappedRepos.filter(
          repo => !githubUrls.includes(repo.githubUrl)
        );

        setAllProjects([...projects, ...uniqueGithubRepos]);
      } catch (error) {
        console.error("Error al cargar proyectos de GitHub:", error);
        setAllProjects(projects); // Fallback a proyectos estáticos
      } finally {
        setIsLoading(false);
      }
    }

    fetchGitHubProjects();
  }, []);

  // Función para categorizar automáticamente proyectos
  function categorizarProyecto(language: string, technologies: string[]): string {
    const lowerLang = language?.toLowerCase() || "";
    const lowerTech = technologies.join(" ").toLowerCase();

    if (lowerTech.includes("react") || lowerTech.includes("next") || lowerTech.includes("vue")) {
      return "Full Stack";
    }
    if (lowerTech.includes("api") || lowerLang === "python" || lowerLang === "java") {
      return "API & Backend";
    }
    if (lowerTech.includes("data") || lowerTech.includes("analytics")) {
      return "Data Engineering";
    }
    if (lowerTech.includes("security") || lowerTech.includes("cyber")) {
      return "Cybersecurity";
    }
    if (lowerTech.includes("database") || lowerTech.includes("sql")) {
      return "Backend & Database";
    }
    return "Full Stack"; // Categoría por defecto
  }

  // Obtener categorías únicas de todos los proyectos
  const categories = ["all", ...new Set(allProjects.map(p => p.category).filter(Boolean))] as string[];

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = selectedCategory === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="min-h-screen py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Mis Proyectos
        </h2>
        <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
          Una colección de proyectos que demuestran mis habilidades en desarrollo web,
          backend y análisis de datos. Proyectos obtenidos dinámicamente desde GitHub.
        </p>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {category === "all" ? "Todos" : category}
              <span className="ml-2 text-sm opacity-75">
                ({category === "all" 
                  ? allProjects.length 
                  : allProjects.filter(p => p.category === category).length})
              </span>
            </button>
          ))}
        </div>

        {/* Loading state */}
        {isLoading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent"></div>
            <p className="mt-4 text-zinc-400">Cargando proyectos desde GitHub...</p>
          </div>
        ) : (
          <>
            {/* Grid de proyectos */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-zinc-400 text-lg">
                  No hay proyectos en esta categoría
                </p>
              </div>
            )}

            {/* Stats */}
            <div className="mt-16 text-center">
              <p className="text-zinc-500 text-sm">
                Mostrando {filteredProjects.length} de {allProjects.length} proyectos totales
              </p>
              <p className="text-zinc-600 text-sm mt-2">
                Visita mi{" "}
                <a 
                  href={siteConfig.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:text-purple-400 underline"
                >
                  GitHub
                </a>
                {" "}para ver más de mi trabajo
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
