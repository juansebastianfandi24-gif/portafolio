import Image from "next/image";
import Link from "next/link";
import { SiGithub } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  category,
}: ProjectCardProps) {
  // Imagen por defecto de código de Pexels
  const defaultCodeImage = "https://images.pexels.com/photos/16592498/pexels-photo-16592498/free-photo-of-internet-conexion-tecnologia-ordenador.jpeg";

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400 dark:hover:border-purple-600">
      <div className="relative h-48 w-full bg-gradient-to-br from-zinc-900 to-zinc-950 dark:from-zinc-950 dark:to-black overflow-hidden">
        <Image
          src={image || defaultCodeImage}
          alt={title}
          fill
          className="object-cover opacity-90"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent"></div>
        
        {category && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1.5 bg-purple-600 text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm">
              {category}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">
          {title}
        </h3>
        
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 text-sm">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full border border-purple-200 dark:border-purple-800"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium rounded-full">
              +{technologies.length - 4}
            </span>
          )}
        </div>
        
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 rounded-lg transition-all font-medium text-sm group"
            >
              <SiGithub className="text-lg group-hover:scale-110 transition-transform" />
              <span>Código</span>
            </a>
          )}
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950 rounded-lg transition-all font-medium text-sm group"
            >
              <HiExternalLink className="text-lg group-hover:scale-110 transition-transform" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
