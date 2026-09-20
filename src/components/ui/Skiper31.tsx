/** Adapted from Skiper UI Skiper31, @gurvinder-singh02.
 * https://skiper-ui.com/v1/skiper31 — free use with attribution.
 * Retains the character spread/rotateX and icon convergence/rotation principles.
 * Each category now owns a separate scroll interval. One global Lenis only. */
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, useState, type CSSProperties } from "react";
import { CodeXml } from "lucide-react";
import { useLenis } from "lenis/react";
import { skillGroups, type Skill, type SkillGroup } from "@/data/skills";

const INTRO_END = 0.13;
const CATEGORY_SPAN = (1 - INTRO_END) / skillGroups.length;
const phaseAt = (progress: number) =>
  progress < INTRO_END
    ? -1
    : Math.min(
        skillGroups.length - 1,
        Math.floor((progress - INTRO_END) / CATEGORY_SPAN),
      );

export function CharacterV1({
  char,
  index,
  count,
  progress,
}: {
  char: string;
  index: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const reduced = useReducedMotion();
  const distance = index - (count - 1) / 2;
  const x = useTransform(progress, [0, 0.22], [`${distance * 2.8}vw`, "0vw"]);
  const rotateX = useTransform(progress, [0, 0.22], [distance * 10, 0]);
  return (
    <motion.span aria-hidden="true" style={reduced ? {} : { x, rotateX }}>
      {char === " " ? "\u00a0" : char}
    </motion.span>
  );
}

function SkillMark({ skill }: { skill: Skill }) {
  return skill.slug ? (
    <img
      src={`/skills/${skill.slug}.svg`}
      alt=""
      width={48}
      height={48}
      loading="lazy"
    />
  ) : (
    <CodeXml size={48} aria-hidden="true" />
  );
}

export function CharacterV2({
  skill,
  index,
  count,
  progress,
}: {
  skill: Skill;
  index: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const reduced = useReducedMotion();
  const distance = index - (count - 1) / 2;
  const x = useTransform(progress, [0.04, 0.32], [`${distance * 8}vw`, "0vw"]);
  const y = useTransform(
    progress,
    [0.04, 0.32],
    [70 + Math.abs(distance) * 24, 0],
  );
  const scale = useTransform(progress, [0.04, 0.32], [0.75, 1]);
  const opacity = useTransform(progress, [0.04, 0.2], [0, 1]);
  return (
    <motion.div
      className="toolkit-icon"
      style={reduced ? {} : { x, y, scale, opacity }}
    >
      <SkillMark skill={skill} />
      <span>{skill.name}</span>
    </motion.div>
  );
}

export function CharacterV3({
  skill,
  index,
  count,
  progress,
}: {
  skill: Skill;
  index: number;
  count: number;
  progress: MotionValue<number>;
}) {
  const reduced = useReducedMotion();
  const distance = index - (count - 1) / 2;
  const x = useTransform(progress, [0.04, 0.32], [`${distance * 9}vw`, "0vw"]);
  const y = useTransform(
    progress,
    [0.04, 0.32],
    [-40 - Math.abs(distance) * 16, 0],
  );
  const rotate = useTransform(progress, [0.04, 0.32], [distance * 13, 0]);
  const scale = useTransform(progress, [0.04, 0.32], [0.75, 1]);
  const opacity = useTransform(progress, [0.04, 0.2], [0, 1]);
  return (
    <motion.div
      className="toolkit-icon"
      style={reduced ? {} : { x, y, rotate, scale, opacity }}
    >
      <SkillMark skill={skill} />
      <span>{skill.name}</span>
    </motion.div>
  );
}

function SkillScene({
  group,
  index,
  progress,
  active,
}: {
  group: SkillGroup;
  index: number;
  progress: MotionValue<number>;
  active: boolean;
}) {
  const reduced = useReducedMotion();
  const start = INTRO_END + index * CATEGORY_SPAN;
  const end = start + CATEGORY_SPAN;
  const local = useTransform(progress, [start, end], [0, 1]);
  const last = index === skillGroups.length - 1;
  const opacity = useTransform(
    local,
    [0, 0.12, 0.84, 1],
    [0, 1, 1, last ? 1 : 0],
  );
  const y = useTransform(local, [0, 0.2, 0.84, 1], [30, 0, 0, last ? 0 : -35]);
  // Visibility gates prevent overlapping text even during fast reverse scrolling.
  const visibility = useTransform(progress, (value) =>
    value >= start && (last || value < end) ? "visible" : "hidden",
  );
  const Icon = index % 2 === 0 ? CharacterV2 : CharacterV3;
  return (
    <motion.article
      className="toolkit-scene"
      aria-hidden={reduced ? undefined : !active}
      style={reduced ? {} : { opacity, y, visibility }}
    >
      <p className="toolkit-scene-index">
        0{index + 1} / 0{skillGroups.length}
      </p>
      <h3 aria-label={group.title}>
        {group.title.split("").map((char, i) => (
          <CharacterV1
            key={i}
            char={char}
            index={i}
            count={group.title.length}
            progress={local}
          />
        ))}
      </h3>
      <p className="toolkit-note">{group.note}</p>
      <div
        className="toolkit-icons"
        style={{ "--icon-count": group.items.length } as CSSProperties}
      >
        {group.items.map((skill, i) => (
          <Icon
            key={skill.name}
            skill={skill}
            index={i}
            count={group.items.length}
            progress={local}
          />
        ))}
      </div>
      {group.title === "BACKEND" && (
        <p className="toolkit-caption">REST APIs · Server-side development</p>
      )}
      {group.title === "LANGUAGES" && (
        <p className="toolkit-caption">DSA · OOP · Problem solving</p>
      )}
    </motion.article>
  );
}

export function Skiper31() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const lenis = useLenis();
  const [active, setActive] = useState(-1);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (value) =>
    setActive((previous) => {
      const next = phaseAt(value);
      return previous === next ? previous : next;
    }),
  );
  const intro = useTransform(scrollYProgress, [0, INTRO_END], [0, 1]);
  const introOpacity = useTransform(intro, [0, 0.8, 1], [1, 1, 0]);
  const introVisibility = useTransform(scrollYProgress, (value) =>
    value < INTRO_END ? "visible" : "hidden",
  );
  const jumpTo = (index: number) => {
    if (!ref.current) return;
    const distance = ref.current.offsetHeight - window.innerHeight;
    const start = ref.current.getBoundingClientRect().top + window.scrollY;
    const target =
      start + distance * (INTRO_END + CATEGORY_SPAN * (index + 0.52));
    if (lenis) lenis.scrollTo(target, { duration: 0.75 });
    else window.scrollTo({ top: target, behavior: "smooth" });
  };
  return (
    <div
      ref={ref}
      className={`toolkit-scroll${reduced ? " toolkit-reduced" : ""}`}
    >
      <div className="toolkit-stage">
        <div className="section-kicker">
          <span>02 / THE TOOLKIT</span>
          <span>FROM INTERFACE TO IMPLEMENTATION</span>
        </div>
        <div className="toolkit-scenes">
          <motion.div
            className="toolkit-scene toolkit-intro"
            aria-hidden={reduced ? undefined : active !== -1}
            style={
              reduced
                ? {}
                : { opacity: introOpacity, visibility: introVisibility }
            }
          >
            <p className="toolkit-scene-index">MY TECHNOLOGY STACK</p>
            <h2 aria-label="Tools I build with">
              {["TOOLS I", "BUILD WITH."].map((word) => (
                <span className="toolkit-word" key={word}>
                  {word.split("").map((char, i) => (
                    <CharacterV1
                      key={i}
                      char={char}
                      index={i}
                      count={word.length}
                      progress={intro}
                    />
                  ))}
                </span>
              ))}
            </h2>
            <p className="toolkit-note">From the browser to the database.</p>
          </motion.div>
          {skillGroups.map((group, i) => (
            <SkillScene
              key={group.title}
              group={group}
              index={i}
              progress={scrollYProgress}
              active={active === i}
            />
          ))}
        </div>
        {!reduced && (
          <div className="toolkit-bottom">
            <nav
              className="toolkit-chapters"
              aria-label="Technology categories"
            >
              {skillGroups.map((group, i) => (
                <button
                  key={group.title}
                  onClick={() => jumpTo(i)}
                  aria-current={active === i ? "step" : undefined}
                >
                  <span>0{i + 1}</span>
                  {group.title}
                </button>
              ))}
            </nav>
            <div className="toolkit-progress" aria-hidden="true">
              <motion.span style={{ scaleX: scrollYProgress }} />
            </div>
            <p className="toolkit-hint">
              SCROLL TO EXPLORE <span>↓</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
