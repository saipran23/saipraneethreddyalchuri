import {
  createContext,
  useContext,
  type MouseEvent,
  type PropsWithChildren,
} from "react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
export type TransitionRequest = { project: Project; rect: DOMRect };
export const ProjectTransitionContext = createContext<
  (request: TransitionRequest) => void
>(() => {});
export function ProjectLink({
  project,
  children,
  className = "",
  label,
}: PropsWithChildren<{
  project: Project;
  className?: string;
  label?: string;
}>) {
  const transition = useContext(ProjectTransitionContext);
  function click(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    )
      return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.preventDefault();
    const target =
      event.currentTarget
        .closest("[data-project-card]")
        ?.querySelector("[data-project-image]") || event.currentTarget;
    transition({ project, rect: target.getBoundingClientRect() });
  }
  return (
    <Link
      to={`/projects/${project.slug}`}
      onClick={click}
      className={className}
      aria-label={label}
      data-cursor="VIEW"
    >
      {children}
    </Link>
  );
}
