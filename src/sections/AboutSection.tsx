export default function AboutSection() {
  return (
    <section id="sobre-mi" className="min-h-screen flex items-center justify-center px-4 py-20 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-zinc-900 dark:text-white">
          🧑‍💻 Sobre Mí
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Información personal */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                Desarrollador de Software
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Soy <strong>estudiante de Ingeniería de Sistemas</strong> apasionado por la tecnología, 
                el desarrollo de software y la creación de soluciones con impacto real.
              </p>
            </div>
            
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Me motiva aprender constantemente, trabajar en equipo y aplicar metodologías ágiles 
              para construir productos funcionales, escalables y bien diseñados.
            </p>
            
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 border border-purple-200 dark:border-purple-900">
              <h4 className="font-bold text-lg mb-3 text-zinc-900 dark:text-white">
                🎯 Áreas de experiencia:
              </h4>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>• Desarrollo de API REST</li>
                <li>• Procesos ETL y análisis de datos</li>
                <li>• Integraciones con bases de datos</li>
                <li>• Ciberseguridad y buenas prácticas</li>
              </ul>
            </div>
          </div>
          
          {/* Habilidades */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">
              🚀 Tecnologías y Herramientas
            </h3>
            
            <div className="space-y-6">
              {[
                { 
                  name: "Lenguajes", 
                  skills: ["Python 🐍", "Java ☕", "JavaScript ⚡"],
                  color: "purple"
                },
                { 
                  name: "Web & Frameworks", 
                  skills: ["HTML5", "CSS3", "React", "Next.js"],
                  color: "purple"
                },
                { 
                  name: "Bases de Datos", 
                  skills: ["PostgreSQL", "MySQL", "SQL"],
                  color: "purple"
                },
                { 
                  name: "Herramientas", 
                  skills: ["Git", "Docker", "Agile/SCRUM"],
                  color: "purple"
                },
              ].map((category, index) => (
                <div key={index} className="bg-white dark:bg-zinc-900 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800">
                  <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">
                    {category.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-sm rounded-full border border-purple-300 dark:border-purple-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-lg border border-purple-200 dark:border-purple-800">
              <p className="text-sm text-purple-900 dark:text-purple-200">
                🌱 <strong>Actualmente aprendiendo:</strong> Ciberseguridad, Pentesting, y profundizando en React
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
