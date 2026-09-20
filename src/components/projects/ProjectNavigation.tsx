import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProjects, type Project } from "@/data/projects";
import { ProjectLink } from "./ProjectLink";
export function ProjectNavigation({ project }: { project: Project }) {
  const next =
    featuredProjects[
      (featuredProjects.findIndex((p) => p.slug === project.slug) + 1) %
        featuredProjects.length
    ];
  return (
    <section className="project-next section-shell">
      <div className="project-source-links">
        <a
          className="pill-button"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          View source <ArrowUpRight />
        </a>
        {project.live && (
          <a
            className="pill-button outline"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live experience <ArrowUpRight />
          </a>
        )}
        <Link className="text-link" to="/#projects">
          <ArrowLeft size={18} />
          All projects
        </Link>
      </div>
      <p className="eyebrow">KEEP EXPLORING / NEXT PROJECT</p>
      <ProjectLink className="next-project-link" project={next}>
        {next.title}
        <ArrowUpRight />
      </ProjectLink>
    </section>
  );
}
