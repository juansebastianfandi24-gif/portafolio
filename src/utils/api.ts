/**
 * Función para obtener proyectos desde la API de GitHub
 * @param username - Usuario de GitHub
 * @returns Promise con los repositorios del usuario
 */
export async function getGitHubRepos(username: string) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 } // Revalidar cada hora
      }
    );
    
    if (!response.ok) {
      throw new Error("Error al obtener repositorios de GitHub");
    }
    
    const repos = await response.json();
    
    // Filtrar y mapear repos a nuestro formato
    return repos
      .filter((repo: any) => !repo.fork && !repo.archived) // Excluir forks y archivados
      .map((repo: any) => ({
        id: repo.id,
        title: repo.name,
        description: repo.description || "Sin descripción disponible",
        image: "/images/project-placeholder.svg",
        technologies: repo.topics || [], // GitHub topics como tecnologías
        githubUrl: repo.html_url,
        liveUrl: repo.homepage || undefined,
        stars: repo.stargazers_count,
        language: repo.language,
        updated: repo.updated_at,
        created: repo.created_at,
      }));
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

/**
 * Función para obtener información del usuario de GitHub
 * @param username - Usuario de GitHub
 * @returns Promise con la información del usuario
 */
export async function getGitHubUser(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error("Error al obtener información del usuario");
    }
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
