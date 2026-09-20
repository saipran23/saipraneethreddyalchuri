import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { editorialEase } from "@/lib/animations";
export function Reveal({
  children,
  className = "",
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-35px" }}
      transition={{ duration: 0.75, delay, ease: editorialEase }}
    >
      {children}
    </motion.div>
  );
}
