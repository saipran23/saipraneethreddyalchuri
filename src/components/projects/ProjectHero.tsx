import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ArrowDown, ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/animations";
import { MagneticButton } from "@/components/ui/MagneticButton";
import type { Project } from "@/data/projects";
export function ProjectHero({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null),
    reduced = useReducedMotion();
  useGSAP(
    () => {
      if (reduced) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      tl.to(".project-hero-image", { scale: 1.25, ease: "none" }, 0)
        .to(
          ".project-hero-content",
          { y: -100, opacity: 0, filter: "blur(8px)", ease: "none" },
          0,
        )
        .to(".project-hero-shade", { opacity: 0.9 }, 0);
    },
    { scope: ref, dependencies: [reduced], revertOnUpdate: true },
  );
  return (
    <section ref={ref} className="project-hero" id="home">
      <div className="project-hero-image">
        {project.video && !reduced ? (
          <video
            src={project.video}
            poster={project.image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${project.title} preview`}
          />
        ) : (
          <img
            src={project.image}
            alt={project.imageAlt}
            width={1600}
            height={1000}
            fetchPriority="high"
          />
        )}
      </div>
      <div className="project-hero-shade" />
      <motion.div
        className="project-hero-content"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">PROJECT {project.id} / A CLOSER LOOK</p>
        <h1>{project.title}</h1>
        <p className="project-tagline">{project.tagline}</p>
        <MagneticButton>
          <a
            className="play-button"
            href="#project-story"
            aria-label={`Explore ${project.title}`}
          >
            <Play size={23} fill="currentColor" />
            <span>EXPLORE PROJECT</span>
          </a>
        </MagneticButton>
      </motion.div>
      <div className="project-hero-bottom">
        <span>AN INDEPENDENT PROJECT</span>
        <a href="#project-story">
          <ArrowDown size={18} /> SCROLL TO EXPLORE
        </a>
        <a href={project.github} target="_blank" rel="noreferrer">
          GITHUB <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
