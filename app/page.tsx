import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HomeSection from "@/sections/HomeSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";

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
