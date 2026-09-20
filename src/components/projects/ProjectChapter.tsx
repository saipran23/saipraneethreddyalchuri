import { Reveal } from "@/components/ui/Reveal";
import type { PropsWithChildren } from "react";
export function ProjectChapter({
  number,
  title,
  children,
}: PropsWithChildren<{ number: string; title: string }>) {
  return (
    <section className="project-chapter section-shell">
      <p className="eyebrow">CHAPTER {number}</p>
      <Reveal className="chapter-copy">
        <h2>
          {title}
          <span className="subtle-dot">.</span>
        </h2>
        <div>{children}</div>
      </Reveal>
    </section>
  );
}
