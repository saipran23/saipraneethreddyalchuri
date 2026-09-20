import { ArrowUpRight } from "lucide-react";
import { additionalProjects } from "@/data/projects";
import { GradientCard } from "@/components/ui/GradientCard";
import { socials } from "@/data/socialLinks";
export function AdditionalProjects() {
  return (
    <section className="additional-projects section-shell light-section">
      <div className="section-kicker">
        <span>THE WORK CONTINUES</span>
        <span>EXPERIMENTS & EXPLORATIONS</span>
      </div>
      <div className="section-heading">
        <h2>
          MORE THINGS
          <br />
          I’VE BUILT<span className="subtle-dot">.</span>
        </h2>
        <a
          className="text-link"
          href={socials.github + "?tab=repositories"}
          target="_blank"
          rel="noreferrer"
        >
          Browse all repositories <ArrowUpRight />
        </a>
      </div>
      {additionalProjects.length > 0 && (
        <div className="additional-grid">
          {additionalProjects.map((p) => (
            <GradientCard key={p.id}>
              <a href={p.github} target="_blank" rel="noreferrer">
                <span className="eyebrow">{p.year || "PROJECT"}</span>
                <h3>
                  {p.title}
                  <ArrowUpRight />
                </h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.technologies.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </a>
            </GradientCard>
          ))}
        </div>
      )}
    </section>
  );
}
