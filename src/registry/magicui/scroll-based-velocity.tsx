import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
  useInView,
} from "framer-motion";
import { useRef, type PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
// Magic UI scroll-velocity API. Scroll speed drives the rate of the repeated text.
export function ScrollVelocityContainer({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("velocity-container", className)}>{children}</div>;
}
export function ScrollVelocityRow({
  children,
  baseVelocity = 20,
  direction = 1,
  className,
}: PropsWithChildren<{
  baseVelocity?: number;
  direction?: 1 | -1;
  className?: string;
}>) {
  const ref = useRef<HTMLDivElement>(null),
    inView = useInView(ref),
    reduced = useReducedMotion(),
    base = useMotionValue(0);
  const { scrollY } = useScroll(),
    velocity = useVelocity(scrollY),
    smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [-2000, 0, 2000], [-4, 0, 4], {
    clamp: true,
  });
  const x = useTransform(base, (v) => `${-25 + (((v % 25) + 25) % 25)}%`);
  useAnimationFrame((_, delta) => {
    if (reduced || !inView || document.hidden) return;
    const speed = factor.get();
    base.set(
      base.get() +
        direction *
          (baseVelocity / 12) *
          (Math.min(delta, 40) / 1000) *
          (1 + Math.abs(speed)),
    );
  });
  return (
    <div ref={ref} className={cn("velocity-row", className)}>
      <motion.div style={reduced ? {} : { x }}>
        {Array.from({ length: 4 }, (_, i) => (
          <span key={i} aria-hidden={i > 0}>
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
