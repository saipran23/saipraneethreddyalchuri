import { certifications } from "@/data/certifications";
import { ArrowUpRight } from "lucide-react";
export function Certifications() {
  if (!certifications.length) return null;
  return (
    <section className="certifications section-shell light-section">
      <div className="section-kicker">
        <span>CONTINUED LEARNING</span>
      </div>
      <h2>
        CERTIFICATIONS<span className="subtle-dot">.</span>
      </h2>
      {certifications.map((c) => (
        <a
          href={c.credential}
          target="_blank"
          rel="noreferrer"
          key={c.credential}
          className="credential"
        >
          <h3>{c.title}</h3>
          <span>{c.issuer}</span>
          <span>{c.year}</span>
          <ArrowUpRight />
        </a>
      ))}
    </section>
  );
}
