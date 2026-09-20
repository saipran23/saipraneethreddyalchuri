import { Github, Code2, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { GradientCard } from "@/components/ui/GradientCard";
import { Reveal } from "@/components/ui/Reveal";
import { socials } from "@/data/socialLinks";
const cards = [
  {
    title: "GITHUB",
    subtitle: "Explore my code",
    handle: "@saipran23",
    url: socials.github,
    Icon: Github,
  },
  {
    title: "LEETCODE",
    subtitle: "DSA & problem solving",
    handle: "Trees · Graphs · DP",
    url: socials.leetcode,
    Icon: Code2,
  },
  {
    title: "LINKEDIN",
    subtitle: "Professional profile",
    handle: "Let’s connect",
    url: socials.linkedin,
    Icon: Linkedin,
  },
  {
    title: "EMAIL",
    subtitle: "Start a conversation",
    handle: "A good place to begin",
    url: socials.email,
    Icon: Mail,
  },
];
export function DeveloperProfiles() {
  return (
    <section className="profiles section-shell dark-section">
      <div className="section-kicker">
        <span>04 / BEYOND THIS PAGE</span>
        <span>CODE. PRACTISE. CONNECT.</span>
      </div>
      <Reveal className="section-heading">
        <h2>
          FIND ME
          <br />
          IN THE DETAILS<span className="subtle-dot">.</span>
        </h2>
        <p>
          Repositories, problem solving,
          <br />
          and the work in between.
        </p>
      </Reveal>
      <div className="profile-grid">
        {cards.map((c) => (
          <GradientCard key={c.title}>
            <a
              href={c.url}
              target={c.title === "EMAIL" ? undefined : "_blank"}
              rel="noreferrer"
              className="profile-link"
            >
              <div className="profile-link-top">
                <c.Icon size={26} />
                <ArrowUpRight size={24} />
              </div>
              <p className="profile-handle">{c.handle}</p>
              <h3>{c.title}</h3>
              <p>{c.subtitle}</p>
            </a>
          </GradientCard>
        ))}
      </div>
    </section>
  );
}
