import { HiMail } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { siteConfig } from '@/utils/config';

export default function ContactSection() {
  const contactMethods = [
    {
      name: 'Email',
      icon: HiMail,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
      borderColor: 'border-red-200 dark:border-red-900',
      hoverBg: 'hover:bg-red-100 dark:hover:bg-red-950/50',
      hoverBorder: 'hover:border-red-500',
    },
    {
      name: 'GitHub',
      icon: SiGithub,
      value: '@Sebastianfandi24',
      href: siteConfig.github,
      color: 'text-zinc-900 dark:text-white',
      bgColor: 'bg-zinc-50 dark:bg-zinc-900/30',
      borderColor: 'border-zinc-200 dark:border-zinc-800',
      hoverBg: 'hover:bg-zinc-100 dark:hover:bg-zinc-900/50',
      hoverBorder: 'hover:border-zinc-500',
    },
    {
      name: 'LinkedIn',
      icon: SiLinkedin,
      value: 'Juan Sebastián Fandiño',
      href: siteConfig.linkedin,
      color: 'text-[#0A66C2]',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-900',
      hoverBg: 'hover:bg-blue-100 dark:hover:bg-blue-950/50',
      hoverBorder: 'hover:border-blue-500',
    },
  ];

  return (
    <section id="contacto" className="min-h-screen flex items-center justify-center px-4 py-20 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-600 dark:text-purple-400 font-medium mb-2 text-sm tracking-wider uppercase">
            Hablemos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Contáctame
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme a través de cualquiera de estos canales
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, idx) => {
            const IconComponent = method.icon;
            return (
              <a
                key={idx}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border-2 border-white/20 dark:border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/60 dark:hover:bg-zinc-900/60 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2 hover:scale-105 flex flex-col items-center text-center`}
              >
                <div className={`${method.color} text-5xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent />
                </div>
                <h3 className="font-bold text-xl text-zinc-900 dark:text-white mb-2">
                  {method.name}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 break-all">
                  {method.value}
                </p>
                <div className="mt-4 flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium text-sm">
                  <span>Contactar</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl">💼</span>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
              ¿Buscas un desarrollador?
            </h3>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
            Estoy disponible para colaborar en proyectos interesantes. Si tienes una idea o necesitas ayuda con desarrollo backend, frontend o integración de APIs, ¡escríbeme!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
              Backend
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
              Frontend
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
              APIs REST
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
              Bases de Datos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
