import Image from "next/image";

export default function HomeSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Imagen de perfil */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src="https://avatars.githubusercontent.com/u/102233674"
                alt="Juan Sebastián Fandiño Novoa"
                fill
                className="rounded-full object-cover border-4 border-purple-500 shadow-2xl shadow-purple-500/20"
                priority
              />
            </div>
          </div>
          
          {/* Contenido */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-zinc-900 dark:text-white">
              👋 Hola, soy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
                Juan Sebastián
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-600 dark:text-purple-400">
              Full Stack Developer
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
              Python · Java · PostgreSQL · React
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-purple-500/30"
              >
                Ver Proyectos
              </a>
              
              <a
                href="#contacto"
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-full font-medium hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors"
              >
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
