import { StickyProjectStack } from "@/components/projects/StickyProjectStack";
import { featuredProjects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
export function FeaturedProjects() {
  return (
    <section id="projects" className="featured-projects dark-section">
      <div className="section-shell projects-intro">
        <div className="section-kicker">
          <span>05 / FROM IDEAS TO CODE</span>
          <span>SELECTED PROJECTS</span>
        </div>
        <Reveal className="section-heading">
          <h2>
            BUILT TO
            <br />
            BE EXPLORED<span className="subtle-dot">.</span>
          </h2>
          <p>
            A few projects from my workbench.
            <br />
            Scroll through. Look closer.
          </p>
        </Reveal>
      </div>
      <StickyProjectStack cards={featuredProjects} />
    </section>
  );
}
