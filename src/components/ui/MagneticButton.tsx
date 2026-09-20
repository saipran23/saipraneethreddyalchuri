import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import type { PropsWithChildren } from "react";
export function MagneticButton({ children }: PropsWithChildren) {
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18 }),
    sy = useSpring(y, { stiffness: 180, damping: 18 });
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="magnetic"
      style={{ x: reduced ? 0 : sx, y: reduced ? 0 : sy }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || reduced) return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.15);
        y.set((e.clientY - r.top - r.height / 2) * 0.15);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
