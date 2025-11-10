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
    <div className="group relative bg-white/10 dark:bg-zinc-900/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-white/10 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-400/50 dark:hover:border-purple-600/50 hover:bg-white/20 dark:hover:bg-zinc-900/20">
      <div className="relative h-48 w-full bg-gradient-to-br from-purple-900/20 to-purple-950/20 dark:from-purple-950/30 dark:to-black/30 overflow-hidden">
        <Image
          src={image || defaultCodeImage}
          alt={title}
          fill
          className="object-cover opacity-90"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent backdrop-blur-sm"></div>
        
        {category && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1.5 bg-purple-600/80 backdrop-blur-md text-white text-xs font-semibold rounded-full shadow-lg border border-white/20">
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
              className="px-3 py-1 bg-purple-50/50 dark:bg-purple-950/30 backdrop-blur-md text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full border border-purple-200/50 dark:border-purple-800/50"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-3 py-1 bg-zinc-100/50 dark:bg-zinc-800/30 backdrop-blur-md text-zinc-600 dark:text-zinc-400 text-xs font-medium rounded-full border border-zinc-300/50 dark:border-zinc-700/50">
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
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900/80 dark:bg-white/90 backdrop-blur-md text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white rounded-lg transition-all font-medium text-sm group border border-white/10 shadow-lg"
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
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-purple-600/80 backdrop-blur-md text-purple-600 dark:border-purple-400/80 dark:text-purple-400 hover:bg-purple-50/50 dark:hover:bg-purple-950/50 rounded-lg transition-all font-medium text-sm group shadow-lg"
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
