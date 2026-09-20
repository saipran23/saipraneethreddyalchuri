import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
export function Cursor() {
  const reduced = useReducedMotion(),
    [enabled, setEnabled] = useState(false),
    [label, setLabel] = useState("");
  const x = useMotionValue(-100),
    y = useMotionValue(-100),
    visible = useRef(false);
  const sx = useSpring(x, { stiffness: 400, damping: 32 }),
    sy = useSpring(y, { stiffness: 400, damping: 32 });
  useEffect(() => {
    const media = matchMedia("(pointer: fine)");
    const update = () => setEnabled(media.matches && !reduced);
    update();
    media.addEventListener("change", update);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      visible.current = true;
      const target =
        e.target instanceof Element
          ? e.target.closest("[data-cursor],a,button")
          : null;
      setLabel(target?.getAttribute("data-cursor") || (target ? "↗" : ""));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("pointermove", move);
    };
  }, [reduced, x, y]);
  return enabled ? (
    <motion.div
      aria-hidden="true"
      className={`custom-cursor ${label ? "is-active" : ""}`}
      style={{ left: 0, top: 0, x: sx, y: sy }}
    >
      <span>{label}</span>
    </motion.div>
  ) : null;
}
