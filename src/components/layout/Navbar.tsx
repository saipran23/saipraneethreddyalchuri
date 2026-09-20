import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useLenis } from "lenis/react";

const sections = ["Home", "About", "Skills", "Journey", "Projects", "Contact"];
export function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false),
    [active, setActive] = useState("home");
  const lenis = useLenis();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    return () => lenis?.start();
  }, [open, lenis]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      setScrolled(window.scrollY > 40);
      for (const name of [...sections].reverse()) {
        const section = document.getElementById(name.toLowerCase());
        if (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight * 0.35
        ) {
          setActive(name.toLowerCase());
          break;
        }
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const timer = window.setTimeout(update, 700);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);
  const href = (section: string) =>
    `/${section === "Home" ? "#home" : "#" + section.toLowerCase()}`;
  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : ""} ${pathname !== "/" ? "nav-project" : ""}`}
    >
      <Link className="brand" to="/" aria-label="Sai Praneeth Reddy home">
        SPR<span>.</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {sections.map((s) => (
          <Link
            key={s}
            to={href(s)}
            className={
              pathname === "/" && active === s.toLowerCase() ? "active" : ""
            }
            aria-current={
              pathname === "/" && active === s.toLowerCase()
                ? "location"
                : undefined
            }
          >
            {s}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta" to="/#contact">
        Let’s talk <ArrowUpRight size={16} />
      </Link>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button
            className="menu-trigger icon-button"
            aria-label="Open navigation"
          >
            <Menu size={23} />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="menu-overlay" />
          <Dialog.Content
            className="mobile-menu"
            aria-describedby="menu-description"
          >
            <Dialog.Title className="brand">SPR.</Dialog.Title>
            <Dialog.Description id="menu-description" className="sr-only">
              Navigate the portfolio.
            </Dialog.Description>
            <Dialog.Close
              className="menu-close icon-button"
              aria-label="Close navigation"
            >
              <X />
            </Dialog.Close>
            <nav aria-label="Mobile navigation">
              {sections.map((s, i) => (
                <Link key={s} to={href(s)} onClick={() => setOpen(false)}>
                  <span>0{i + 1}</span>
                  {s}
                  <ArrowUpRight />
                </Link>
              ))}
            </nav>
            <p className="eyebrow">ALCHURI SAI PRANEETH REDDY</p>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
