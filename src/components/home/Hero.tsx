import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { HeroPortrait } from "./HeroPortrait";
import { editorialEase } from "@/lib/animations";
export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="home" className="hero light-section">
      <div className="hero-topline">
        <p className="eyebrow">
          HELLO, I’M
          <br />
          <strong>SAI PRANEETH REDDY</strong>
        </p>
        <p className="eyebrow hero-edition">
          DEVELOPER PORTFOLIO
          <br />
          VOL. 01 — 2026
        </p>
      </div>
      <h1 className="hero-title">
        <span className="clip-line">
          <motion.span
            initial={reduced ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: editorialEase }}
          >
            FULL-STACK
          </motion.span>
        </span>
        <span className="clip-line">
          <motion.span
            initial={reduced ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: editorialEase }}
          >
            DEVELOPER<span className="hero-period">.</span>
          </motion.span>
        </span>
      </h1>
      <HeroPortrait />
      <div className="hero-description">
        <span className="tiny-symbol" aria-hidden="true">
          ✳
        </span>
        <p>
          Thoughtful interfaces.
          <br />
          Solid systems.
          <br />A curiosity that keeps building.
        </p>
        <p className="muted">
          Full-stack development, backend engineering, APIs & databases.
        </p>
        <a href="#projects" className="text-link">
          View projects <ArrowDownRight size={18} />
        </a>
        <a href="#contact" className="text-link secondary">
          Contact me <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="hero-bottom">
        <a className="scroll-cue" href="#about">
          <span className="round-icon">
            <ArrowDown size={18} />
          </span>
          <span>SCROLL TO EXPLORE</span>
        </a>
        <div className="availability">
          <span className="status-dot" />
          <div>
            OPEN TO OPPORTUNITIES<small>SDE · BACKEND · FULL-STACK</small>
          </div>
        </div>
        <span className="hero-location">
          BASED IN INDIA
          <br />
          <span>BUILDING FOR THE WEB</span>
        </span>
      </div>
    </section>
  );
}
