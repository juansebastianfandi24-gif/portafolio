"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
              Juan Sebastián
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#inicio" className="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors">
                Inicio
              </Link>
              <Link href="#sobre-mi" className="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors">
                Sobre Mí
              </Link>
              <Link href="#projects" className="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors">
                Proyectos
              </Link>
              <Link href="#contacto" className="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors">
                Contacto
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors"
            >
              <span className="sr-only">Abrir menú</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-zinc-950">
            <Link href="#inicio" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors">
              Inicio
            </Link>
            <Link href="#sobre-mi" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors">
              Sobre Mí
            </Link>
            <Link href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors">
              Proyectos
            </Link>
            <Link href="#contacto" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
