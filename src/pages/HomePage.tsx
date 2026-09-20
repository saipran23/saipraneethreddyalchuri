import { Hero } from "@/components/home/Hero";
import { ScrollIdentity } from "@/components/home/ScrollIdentity";
import { About } from "@/components/home/About";
import { RoleStack } from "@/components/home/RoleStack";
import { Skills } from "@/components/home/Skills";
import { Journey } from "@/components/home/Journey";
import { DeveloperProfiles } from "@/components/home/DeveloperProfiles";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { AdditionalProjects } from "@/components/home/AdditionalProjects";
import { Certifications } from "@/components/home/Certifications";
import { Contact } from "@/components/home/Contact";
import { usePageMeta } from "@/hooks/usePageMeta";
export default function HomePage() {
  usePageMeta(
    "Sai Praneeth Reddy — Developer",
    "Alchuri Sai Praneeth Reddy — Full-Stack Developer, Backend & API Engineer. Explore projects, technical interests, and a journey toward AI engineering.",
  );
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <ScrollIdentity />
      <About />
      <RoleStack />
      <Skills />
      <Journey />
      <DeveloperProfiles />
      <FeaturedProjects />
      <AdditionalProjects />
      <Certifications />
      <Contact />
    </main>
  );
}
