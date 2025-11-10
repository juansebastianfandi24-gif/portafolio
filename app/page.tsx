import NavBar from "@/src/components/NavBar";
import Footer from "@/src/components/Footer";
import HomeSection from "@/src/sections/HomeSection";
import AboutSection from "@/src/sections/AboutSection";
import ProjectsSection from "@/src/sections/ProjectsSection";
import ContactSection from "@/src/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <NavBar />
      
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
