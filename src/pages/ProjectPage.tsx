import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectChapter } from "@/components/projects/ProjectChapter";
import { SvgMaskReveal } from "@/components/projects/SvgMaskReveal";
import { ProjectParallax } from "@/components/projects/ProjectParallax";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { usePageMeta } from "@/hooks/usePageMeta";
export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  usePageMeta(
    project
      ? `${project.title} — Sai Praneeth Reddy`
      : "Project not found — Sai Praneeth Reddy",
    project?.description || "Explore projects by Sai Praneeth Reddy.",
  );
  if (!project)
    return (
      <main id="main-content" tabIndex={-1} className="not-found">
        <p className="eyebrow">404 / THIS PAGE TOOK A DIFFERENT PATH</p>
        <h1>
          LET’S GO
          <br />
          BACK HOME.
        </h1>
        <Link className="text-link" to="/">
          <ArrowLeft />
          Back to the portfolio
        </Link>
      </main>
    );
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="project-page"
      key={project.slug}
    >
      <ProjectHero project={project} />
      <div id="project-story" className="project-story light-section">
        <ProjectChapter
          number="01"
          title={project.chapters[0]?.title || "THE IDEA"}
        >
          <p>{project.chapters[0]?.text || project.description}</p>
          <div className="project-facts">
            <div>
              <span>PROJECT</span>
              <p>{project.title}</p>
            </div>
            <div>
              <span>BY</span>
              <p>Sai Praneeth Reddy</p>
            </div>
            <div>
              <span>SOURCE</span>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </ProjectChapter>
        <SvgMaskReveal
          src={project.screenshots[0]?.src || project.image}
          alt={project.screenshots[0]?.alt || project.imageAlt}
          caption={
            project.screenshots[0]?.caption ||
            `${project.title} / Project cover`
          }
        />
        {project.chapters.slice(1).map((chapter, i) => (
          <ProjectChapter
            key={chapter.title}
            number={String(i + 2).padStart(2, "0")}
            title={chapter.title}
          >
            <p>{chapter.text}</p>
          </ProjectChapter>
        ))}
        {project.screenshots.slice(1).map((s, i) => (
          <ProjectParallax key={s.src} {...s} horizontal={i % 2 === 0} />
        ))}
        {project.technologies.length > 0 && (
          <ProjectChapter number="05" title="THE STACK">
            <div className="project-stack-tags">
              {project.technologies.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </ProjectChapter>
        )}
      </div>
      <ProjectNavigation project={project} />
    </main>
  );
}
