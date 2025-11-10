import { 
  SiPython, SiJavascript, SiPostgresql, SiMysql, SiReact, 
  SiNextdotjs, SiHtml5, SiCss3, SiGit, SiDocker,
  SiGithub, SiIntellijidea, SiPostman, 
  SiCanva, SiNotion, SiRailway, SiNodedotjs,
  SiApachenetbeanside, SiMysql as SiMysqlWorkbench
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default function AboutSection() {
  // Tecnologías principales
  const technologies = [
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "Java", icon: FaJava, color: "text-[#007396]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-zinc-900 dark:text-white" },
    { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: SiCss3, color: "text-[#1572B6]" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
    { name: "Railway", icon: SiRailway, color: "text-[#0B0D0E] dark:text-white" },
    { name: "REST API", icon: TbApi, color: "text-purple-600" },
  ];

  // Herramientas
  const tools = [
    { name: "VS Code", icon: VscCode, color: "text-[#007ACC]" },
    { name: "GitHub", icon: SiGithub, color: "text-zinc-900 dark:text-white" },
    { name: "IntelliJ", icon: SiIntellijidea, color: "text-[#000000] dark:text-white" },
    { name: "NetBeans", icon: SiApachenetbeanside, color: "text-[#1B6AC6]" },
    { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
    { name: "MySQL Workbench", icon: SiMysqlWorkbench, color: "text-[#4479A1]" },
    { name: "Canva", icon: SiCanva, color: "text-[#00C4CC]" },
    { name: "Notion", icon: SiNotion, color: "text-zinc-900 dark:text-white" },
  ];

  return (
    <section id="sobre-mi" className="min-h-screen px-4 py-20 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-600 dark:text-purple-400 font-medium mb-2 text-sm tracking-wider uppercase">
            Conóceme mejor
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Sobre Mí
          </h2>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Bio */}
          <div className="space-y-6">
            <div className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                  👨‍💻
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Desarrollador de Software
                </h3>
              </div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Soy <strong>estudiante de Ingeniería de Sistemas</strong> apasionado por la tecnología, 
                el desarrollo de software y la creación de soluciones con impacto real.
              </p>
            </div>

            <div className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-xl">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Me motiva aprender constantemente, trabajar en equipo y aplicar metodologías ágiles 
                para construir productos funcionales, escalables y bien diseñados.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-zinc-900 dark:text-white flex items-center gap-2">
                  <span className="text-purple-600 dark:text-purple-400">🎯</span>
                  Áreas de experiencia
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Desarrollo de API REST",
                    "Procesos ETL y análisis de datos",
                    "Integraciones con bases de datos",
                    "Ciberseguridad y buenas prácticas"
                  ].map((area, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                      <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50/60 to-purple-100/60 dark:from-purple-950/40 dark:to-purple-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-200/50 dark:border-purple-800/50 shadow-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌱</span>
                <div>
                  <p className="font-semibold text-purple-900 dark:text-purple-200 mb-1">
                    Actualmente aprendiendo
                  </p>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Ciberseguridad, Pentesting, y profundizando en React y ecosistema moderno de JavaScript
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "💼", label: "Proyectos", value: "15+" },
                { icon: "🚀", label: "Tecnologías", value: "12+" },
                { icon: "📚", label: "En aprendizaje", value: "Siempre" },
                { icon: "🎓", label: "Estudiante", value: "Ing. Sistemas" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/10 text-center hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-xl">
              <h4 className="font-bold text-lg text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400">💡</span>
                Filosofía de trabajo
              </h4>
              <div className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <p className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                  <span>Código limpio y mantenible</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                  <span>Metodologías ágiles</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                  <span>Aprendizaje continuo</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                  <span>Trabajo en equipo</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <p className="text-purple-600 dark:text-purple-400 font-medium mb-2 text-sm tracking-wider uppercase">
              Mi Stack Tecnológico
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
              Tecnologías
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl mx-auto">
              Aquí están algunas de las tecnologías que forman parte de mi stack actual
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, idx) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-2 hover:scale-105 flex flex-col items-center justify-center text-center"
                >
                  <IconComponent className={`text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 ${tech.color}`} />
                  <p className="font-medium text-zinc-900 dark:text-white text-sm">
                    {tech.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <div className="text-center mb-12">
            <p className="text-purple-600 dark:text-purple-400 font-medium mb-2 text-sm tracking-wider uppercase">
              Herramientas que uso
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
              Herramientas
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl mx-auto">
              Stack conocido? Aquí están las herramientas que uso día a día
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {tools.map((tool, idx) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-2 hover:scale-105 flex flex-col items-center justify-center text-center"
                >
                  <IconComponent className={`text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 ${tool.color}`} />
                  <p className="font-medium text-zinc-900 dark:text-white text-sm">
                    {tool.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
