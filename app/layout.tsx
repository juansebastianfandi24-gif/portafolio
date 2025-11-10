import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/src/styles/globals.css";
import "@/src/styles/theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Sebastián Fandiño | Full Stack Developer",
  description: "Desarrollador Full Stack especializado en Python, Java y tecnologías web modernas. Estudiante de Ingeniería de Sistemas apasionado por crear soluciones con impacto real.",
  keywords: ["desarrollo web", "full stack", "python", "java", "react", "postgresql", "juan sebastian fandiño"],
  authors: [{ name: "Juan Sebastián Fandiño Novoa", url: "https://github.com/Sebastianfandi24" }],
  openGraph: {
    title: "Juan Sebastián Fandiño | Full Stack Developer",
    description: "Desarrollador Full Stack especializado en Python, Java y React",
    url: "https://sebastianfandi.vercel.app",
    siteName: "Juan Sebastián Fandiño - Portafolio",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
