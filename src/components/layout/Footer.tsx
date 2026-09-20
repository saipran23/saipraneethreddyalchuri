import { ArrowUp } from "lucide-react";
import { socials } from "@/data/socialLinks";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a className="brand" href="/#home">
          SPR.
        </a>
        <div className="footer-links">
          {Object.entries(socials).map(([name, url]) => (
            <a
              key={name}
              href={url}
              target={name === "email" ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              {name}
            </a>
          ))}
        </div>
        <a
          className="back-top"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "instant"
                : "smooth",
            });
          }}
        >
          Back to top <ArrowUp size={16} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SAI PRANEETH REDDY</span>
        <span>DESIGNED & BUILT WITH REACT</span>
        <a href="https://skiper-ui.com" target="_blank" rel="noreferrer">
          Motion inspired by Skiper UI & Magic UI
        </a>
      </div>
    </footer>
  );
}
