import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap, useGSAP } from "@/lib/animations";
export function ProjectParallax({
  src,
  alt,
  caption,
  horizontal = false,
}: {
  src: string;
  alt: string;
  caption: string;
  horizontal?: boolean;
}) {
  const ref = useRef<HTMLElement>(null),
    reduced = useReducedMotion();
  useGSAP(
    () => {
      if (reduced) return;
      gsap.fromTo(
        ".parallax-image",
        horizontal
          ? { xPercent: -6, scale: 1.12 }
          : { scale: 1.15, yPercent: -5 },
        {
          ...(horizontal
            ? { xPercent: 6, scale: 1.12 }
            : { scale: 1, yPercent: 5 }),
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        },
      );
    },
    { scope: ref, dependencies: [reduced, horizontal], revertOnUpdate: true },
  );
  return (
    <figure ref={ref} className="project-parallax">
      <div>
        <img
          className="parallax-image"
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          loading="lazy"
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
