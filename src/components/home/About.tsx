import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { socials } from "@/data/socialLinks";
export function About() {
  return (
    <section id="about" className="about section-shell dark-section">
      <div className="section-kicker">
        <span>01 / THE INTRODUCTION</span>
        <span>A LITTLE CONTEXT</span>
      </div>
      <div className="about-layout">
        <Reveal className="profile-composition">
          <div className="profile-outline" />
          <div className="about-profile">
            <div className="profile-top">
              <span>SPR. / PROFILE</span>
              <ArrowUpRight size={18} />
            </div>
            <img
              src="/profile/praneeth-about.jpeg"
              alt="Full-length portrait of Sai Praneeth Reddy"
              width={864}
              height={1184}
              loading="lazy"
            />
            <div className="profile-status">
              <span className="status-dot" />
              OPEN TO OPPORTUNITIES<span>INDIA</span>
            </div>
          </div>
          <span className="profile-caption">ALCHURI SAI PRANEETH REDDY</span>
        </Reveal>
        <div className="about-copy">
          <Reveal>
            <p className="eyebrow muted">MORE THAN A TITLE</p>
            <h2>
              HELLO,
              <br />
              I’M PRANEETH<span className="subtle-dot">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about-lead">
              I like understanding what happens
              <br className="desktop-only" /> behind the interface.
            </p>
            <p className="body-muted">
              I’m an Integrated M.Tech CSE student at VIT-AP University. My
              focus is full-stack development and backend systems, API design,
              and databases. I work with Java and JavaScript, practise data
              structures and algorithms, and explore how to build clear, useful
              web experiences.
            </p>
            <p className="body-muted">
              The next chapter: system design and the foundations of AI
              engineering.
            </p>
            <div className="about-facts">
              <div>
                <span>FOCUS</span>
                <p>
                  Full-Stack
                  <br />
                  Backend & APIs
                </p>
              </div>
              <div>
                <span>BUILDING WITH</span>
                <p>
                  React · Node.js
                  <br />
                  PostgreSQL
                </p>
              </div>
              <div>
                <span>EXPLORING</span>
                <p>
                  Docker · Linux
                  <br />
                  System Design · AI
                </p>
              </div>
            </div>
            <a
              href={socials.github}
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              A closer look at my code <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
