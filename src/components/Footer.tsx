import { siteConfig } from "@/utils/config";
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiMail, HiHeart } from 'react-icons/hi';
import { FaCode } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: SiGithub,
      href: siteConfig.github,
      color: 'hover:text-zinc-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: SiLinkedin,
      href: siteConfig.linkedin,
      color: 'hover:text-[#0A66C2]'
    },
    {
      name: 'Email',
      icon: HiMail,
      href: `mailto:${siteConfig.email}`,
      color: 'hover:text-red-500'
    },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-zinc-900 dark:bg-black text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaCode className="text-2xl text-purple-500" />
              <h3 className="text-xl font-bold text-white">
                {siteConfig.name}
              </h3>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Estudiante de Ingeniería de Sistemas apasionado por crear soluciones tecnológicas innovadoras y eficientes.
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span>Hecho con</span>
              <HiHeart className="text-red-500 animate-pulse" />
              <span>y mucho café</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-purple-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Conecta Conmigo
            </h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl text-zinc-400 ${social.color} transition-all duration-300 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
            <div className="space-y-2 text-sm text-zinc-400">
              <p className="flex items-center gap-2">
                <HiMail className="text-purple-500" />
                {siteConfig.email}
              </p>
              <p className="flex items-center gap-2">
                <SiGithub className="text-purple-500" />
                @Sebastianfandi24
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-500">
              © {currentYear} {siteConfig.name}. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-xs text-zinc-500">
              <span className="flex items-center gap-1">
                Construido con <span className="text-purple-500">Next.js</span> & <span className="text-purple-500">React</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
