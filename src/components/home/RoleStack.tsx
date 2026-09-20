import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowLeft, ArrowRight, MoveHorizontal } from "lucide-react";
import { roles } from "@/data/roles";
import { GradientCard } from "@/components/ui/GradientCard";
import { Reveal } from "@/components/ui/Reveal";
function FrontCard({
  index,
  onDismiss,
}: {
  index: number;
  onDismiss: (direction: number) => void;
}) {
  const x = useMotionValue(0),
    rotate = useTransform(x, [-250, 250], [-12, 12]),
    reduced = useReducedMotion();
  const role = roles[index];
  return (
    <motion.div
      className="role-front"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      style={{ x, rotate: reduced ? 0 : rotate }}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 90 || Math.abs(info.velocity.x) > 450)
          onDismiss(info.offset.x < 0 ? -1 : 1);
      }}
    >
      <GradientCard className="role-card">
        <div className="role-card-top">
          <span>THE MANY SIDES OF BUILDING</span>
          <span>0{index + 1} / 05</span>
        </div>
        <span className="role-code" aria-hidden="true">
          {role.code}
        </span>
        <h3>
          {role.title[0]}
          <br />
          {role.title[1]}
        </h3>
        <p>{role.note}</p>
        <div className="tags">
          {role.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <span className="role-drag-hint">
          <MoveHorizontal size={16} /> DRAG TO EXPLORE
        </span>
      </GradientCard>
    </motion.div>
  );
}
export function RoleStack() {
  const [index, setIndex] = useState(0),
    [direction, setDirection] = useState(1),
    reduced = useReducedMotion();
  const change = (dir: number) => {
    setDirection(dir);
    setIndex((v) => (v + (dir < 0 ? -1 : 1) + roles.length) % roles.length);
  };
  return (
    <section className="roles-section section-shell light-section">
      <div className="role-intro">
        <Reveal>
          <p className="eyebrow">DIFFERENT LENSES. ONE BUILDER.</p>
          <h2>
            MANY HATS.
            <br />
            ONE MINDSET<span className="subtle-dot">.</span>
          </h2>
          <p className="body-muted">
            From the browser to the database.
            <br />
            Always connecting the dots.
          </p>
        </Reveal>
        <div className="role-controls">
          <button
            className="icon-button"
            onClick={() => change(-1)}
            aria-label="Previous role"
          >
            <ArrowLeft />
          </button>
          <p aria-live="polite">
            0{index + 1}
            <span> / 05</span>
          </p>
          <button
            className="icon-button"
            onClick={() => change(1)}
            aria-label="Next role"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div
        className="role-stack"
        role="region"
        aria-label="Developer roles. Use previous and next buttons or left and right arrow keys."
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            change(e.key === "ArrowRight" ? 1 : -1);
          }
        }}
      >
        <div className="role-back third" aria-hidden="true">
          <span>{roles[(index + 2) % roles.length].title.join(" ")}</span>
        </div>
        <div className="role-back second" aria-hidden="true">
          <span>{roles[(index + 1) % roles.length].title.join(" ")}</span>
        </div>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            className="role-animated"
            custom={direction}
            variants={{
              enter: { opacity: 0, scale: 0.94, y: 15 },
              center: { opacity: 1, scale: 1, y: 0, x: 0, rotate: 0 },
              exit: (d: number) => ({
                x: reduced ? 0 : d * 550,
                rotate: reduced ? 0 : d * 12,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            <FrontCard index={index} onDismiss={change} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
