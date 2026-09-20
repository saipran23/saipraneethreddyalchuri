/** Skiper17 / StickyCard002 adapted from https://skiper-ui.com/v1/skiper17.
 * Author: @gurvinder-singh02. Free use with attribution to Skiper UI.
 * Preserves the pinned, scrubbed 0.7-scale / 5-degree stacked-card timeline.
 * Adds full project objects, scoped cleanup, reduced motion and focus access. */
import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/animations";
import type { Project } from "@/data/projects";
import { ProjectLink } from "@/components/projects/ProjectLink";

export function StickyCard002({ cards }: { cards: Project[] }) {
  const container = useRef<HTMLDivElement>(null),
    stage = useRef<HTMLDivElement>(null),
    cardRefs = useRef<(HTMLElement | null)[]>([]),
    timeline = useRef<gsap.core.Timeline | null>(null);
  const [active, setActive] = useState(0),
    reduced = useReducedMotion();
  useGSAP(
    () => {
      if (reduced || !stage.current || cards.length < 2) return;
      const elements = cardRefs.current.filter((e): e is HTMLElement => !!e);
      gsap.set(elements, { transformOrigin: "center center" });
      gsap.set(elements.slice(1), { yPercent: 115 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (cards.length - 1) * 1.12}`,
          pin: true,
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate: (self) =>
            setActive(
              Math.min(
                cards.length - 1,
                Math.floor(self.progress * (cards.length - 1) + 0.72),
              ),
            ),
        },
      });
      timeline.current = tl;
      elements.forEach((current, i) => {
        if (i === elements.length - 1) return;
        tl.to(
          current,
          { scale: 0.7, rotation: i % 2 ? -5 : 5, duration: 1, ease: "none" },
          i,
        ).to(elements[i + 1], { yPercent: 0, duration: 1, ease: "none" }, i);
      });
      let frame = 0,
        lastWidth = 0,
        lastHeight = 0;
      const observer = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        if (
          Math.abs(width - lastWidth) < 1 &&
          Math.abs(height - lastHeight) < 1
        )
          return;
        lastWidth = width;
        lastHeight = height;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => ScrollTrigger.refresh());
      });
      if (container.current) observer.observe(container.current);
      return () => {
        observer.disconnect();
        cancelAnimationFrame(frame);
        tl.scrollTrigger?.kill();
        tl.kill();
        timeline.current = null;
      };
    },
    {
      scope: container,
      dependencies: [reduced, cards.length],
      revertOnUpdate: true,
    },
  );
  const go = (index: number) => {
    const st = timeline.current?.scrollTrigger;
    if (st) {
      window.scrollTo({
        top: st.start + (index / (cards.length - 1)) * (st.end - st.start),
        behavior: "instant",
      });
    } else
      cardRefs.current[index]?.scrollIntoView({
        block: "center",
        behavior: "instant",
      });
  };
  return (
    <div
      ref={container}
      className={`sticky-stack ${reduced ? "static-stack" : ""}`}
    >
      <div ref={stage} className="project-stage">
        <div className="project-stage-label">
          <span>SELECTED WORK</span>
          <span>
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(cards.length).padStart(2, "0")}
          </span>
        </div>
        <div className="project-deck">
          {cards.map((project, i) => (
            <article
              key={project.id}
              data-project-card
              className="project-card"
              style={{ background: project.color, zIndex: i + 1 }}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              inert={!reduced && active !== i}
              aria-label={`${project.title}, project ${i + 1}`}
            >
              <div className="project-card-meta">
                <span>{project.id} / FEATURED PROJECT</span>
                <span>SAI PRANEETH REDDY</span>
              </div>
              <ProjectLink
                project={project}
                className="project-image-link"
                label={`View ${project.title}`}
              >
                <img
                  data-project-image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1600}
                  height={1000}
                  loading="lazy"
                />
                <span className="project-view-circle">
                  <ArrowUpRight size={35} />
                </span>
              </ProjectLink>
              <div className="project-card-bottom">
                <div>
                  <h3>
                    <ProjectLink project={project}>{project.title}</ProjectLink>
                  </h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.technologies.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="project-actions">
                  <ProjectLink project={project} className="text-link">
                    View project <ArrowRight size={18} />
                  </ProjectLink>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub <ArrowUpRight size={16} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div
          className="project-pagination"
          aria-label="Choose a featured project"
        >
          {cards.map((p, i) => (
            <button
              key={p.id}
              onClick={() => go(i)}
              aria-label={`Show ${p.title}`}
              aria-pressed={active === i}
              className={active === i ? "active" : ""}
            >
              {p.id}
              <span>{p.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export { StickyCard002 as Skiper17 };
