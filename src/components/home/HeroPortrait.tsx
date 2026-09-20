import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
export function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null),
    reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]),
    scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]),
    rotate = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div ref={ref} className="hero-portrait">
      <motion.img
        src="/profile/praneeth-main.png"
        alt="Sai Praneeth Reddy wearing glasses and a white shirt"
        width={1343}
        height={1171}
        fetchPriority="high"
        style={reduced ? {} : { y, scale, rotate }}
      />
      <span className="portrait-index">01 — THE PERSON BEHIND THE CODE</span>
    </div>
  );
}
