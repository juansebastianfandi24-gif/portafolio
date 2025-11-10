/**
 * Función para obtener proyectos desde la API de GitHub
 * @param username - Usuario de GitHub
 * @returns Promise con los repositorios del usuario
 */
export async function getGitHubRepos(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    
    if (!response.ok) {
      throw new Error("Error al obtener repositorios de GitHub");
    }
    
    const repos = await response.json();
    return repos;
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
    const response = await fetch(`https://api.github.com/users/${username}`);
    
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
