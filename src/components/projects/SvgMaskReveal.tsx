import { useId, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap, useGSAP } from "@/lib/animations";
export function SvgMaskReveal({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  const ref = useRef<HTMLElement>(null),
    id = useId().replace(/:/g, ""),
    reduced = useReducedMotion();
  useGSAP(
    () => {
      if (reduced) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });
      tl.fromTo(
        ".mask-rect",
        { attr: { x: 0.28, y: 0.25, width: 0.44, height: 0.5, rx: 0.13 } },
        { attr: { x: 0, y: 0, width: 1, height: 1, rx: 0 }, ease: "none" },
        0,
      ).fromTo(".mask-image", { scale: 1.15 }, { scale: 1, ease: "none" }, 0);
    },
    { scope: ref, dependencies: [reduced], revertOnUpdate: true },
  );
  return (
    <figure ref={ref} className={`mask-sequence ${reduced ? "reduced" : ""}`}>
      <div className="mask-sticky">
        <svg className="mask-definitions" aria-hidden="true">
          <defs>
            <clipPath id={`mask-${id}`} clipPathUnits="objectBoundingBox">
              <rect
                className="mask-rect"
                x="0"
                y="0"
                width="1"
                height="1"
                rx="0"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="mask-window" style={{ clipPath: `url(#mask-${id})` }}>
          <img
            className="mask-image"
            src={src}
            alt={alt}
            width={1600}
            height={1000}
            loading="lazy"
          />
        </div>
        <figcaption>{caption}</figcaption>
      </div>
    </figure>
  );
}
