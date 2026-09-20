import { Code2, Layers3, Database, Network, BrainCircuit } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
const stages = [
  {
    title: "WEB\nFOUNDATIONS",
    text: "The browser, the language, and the fundamentals of building for the web.",
    tags: "HTML · CSS · JAVASCRIPT",
    Icon: Code2,
  },
  {
    title: "FULL-STACK\nDEVELOPMENT",
    text: "Connecting responsive interfaces with server-side logic and persistent data.",
    tags: "REACT · NODE · DATABASES",
    Icon: Layers3,
  },
  {
    title: "BACKEND\nENGINEERING",
    text: "Going deeper into APIs, database design, and the structure behind an application.",
    tags: "EXPRESS · REST · SQL",
    Icon: Database,
  },
  {
    title: "SYSTEM\nDESIGN",
    text: "Exploring service boundaries, system structure, and the trade-offs behind design decisions.",
    tags: "DSA · OOP · SYSTEMS",
    Icon: Network,
  },
  {
    title: "AI\nENGINEERING",
    text: "Learning the mathematical and machine-learning foundations for what comes next.",
    tags: "PYTHON · AI / ML · LEARNING",
    Icon: BrainCircuit,
  },
];
export function Journey() {
  const reduced = useReducedMotion();
  return (
    <section id="journey" className="journey section-shell light-section">
      <div className="section-kicker">
        <span>03 / ALWAYS IN PROGRESS</span>
        <span>A LEARNING JOURNEY</span>
      </div>
      <Reveal className="section-heading">
        <h2>
          MY DEVELOPMENT
          <br />
          JOURNEY<span className="subtle-dot">.</span>
        </h2>
        <p>
          Built one layer at a time.
          <br />
          Still adding to the foundation.
        </p>
      </Reveal>
      <div className="journey-grid">
        {stages.map((stage, i) => (
          <motion.article
            key={stage.title}
            className="journey-card"
            initial={
              reduced
                ? false
                : {
                    opacity: 0,
                    rotate: i % 2 ? 3 : -3,
                    y: 55,
                    clipPath: "inset(0 0 20% 0)",
                  }
            }
            whileInView={{
              opacity: 1,
              rotate: 0,
              y: 0,
              clipPath: "inset(0 0 0% 0)",
            }}
            transition={{ duration: 0.65, delay: i * 0.065 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="journey-card-top">
              <span>0{i + 1}</span>
              <stage.Icon size={24} />
            </div>
            <h3>
              {stage.title.split("\n").map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h3>
            <p>{stage.text}</p>
            <small>{stage.tags}</small>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
