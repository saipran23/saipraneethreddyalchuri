import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/ui/Cursor";
import {
  ProjectTransitionContext,
  type TransitionRequest,
} from "@/components/projects/ProjectLink";
import { ScrollTrigger, editorialEase } from "@/lib/animations";
const HomePage = lazy(() => import("@/pages/HomePage"));
const ProjectPage = lazy(() => import("@/pages/ProjectPage"));
function RouteEffects() {
  const location = useLocation(),
    lenis = useLenis();
  useEffect(() => {
    let cancelled = false;
    let timeout = 0;
    const reset = () => {
      if (cancelled) return;
      lenis?.resize();
      ScrollTrigger.refresh();
      const anchor = location.hash
        ? document.getElementById(decodeURIComponent(location.hash.slice(1)))
        : null;
      if (anchor) {
        lenis
          ? lenis.scrollTo(anchor, { offset: -80, immediate: true })
          : anchor.scrollIntoView();
      } else {
        lenis
          ? lenis.scrollTo(0, { immediate: true, force: true })
          : window.scrollTo(0, 0);
      }
      if (!location.hash)
        document.getElementById("main-content")?.focus({ preventScroll: true });
    };
    timeout = window.setTimeout(reset, 350);
    const onLoad = () => {
      lenis?.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", onLoad, true);
    return () => {
      cancelled = true;
      clearTimeout(timeout);
      window.removeEventListener("load", onLoad, true);
    };
  }, [location.pathname, location.hash, lenis]);
  return null;
}
export default function App() {
  const location = useLocation(),
    navigate = useNavigate(),
    reduced = useReducedMotion(),
    lenis = useLenis();
  const [transition, setTransition] = useState<TransitionRequest | null>(null),
    [phase, setPhase] = useState<"expand" | "reveal">("expand");
  useEffect(() => {
    if (transition) lenis?.stop();
    else lenis?.start();
    return () => lenis?.start();
  }, [transition, lenis]);
  return (
    <ProjectTransitionContext.Provider
      value={(request) => {
        if (transition) return;
        setPhase("expand");
        setTransition(request);
      }}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <RouteEffects />
      <Suspense
        fallback={
          <div className="route-loader" role="status">
            SPR<span>.</span>
            <span className="sr-only">Loading portfolio</span>
          </div>
        }
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.18 }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects/:slug" element={<ProjectPage />} />
              <Route path="*" element={<ProjectPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <Cursor />
      <AnimatePresence>
        {transition && (
          <motion.div
            className="project-transition"
            initial={{
              clipPath: `inset(${Math.max(0, transition.rect.top)}px ${Math.max(0, window.innerWidth - transition.rect.right)}px ${Math.max(0, window.innerHeight - transition.rect.bottom)}px ${Math.max(0, transition.rect.left)}px round 18px)`,
              opacity: 1,
            }}
            animate={
              phase === "expand"
                ? { clipPath: "inset(0px 0px 0px 0px round 0px)", opacity: 1 }
                : { opacity: 0, clipPath: "inset(0px 0px 0px 0px round 0px)" }
            }
            transition={{
              duration: phase === "expand" ? 0.5 : 0.3,
              ease: editorialEase,
            }}
            onAnimationComplete={() => {
              if (phase === "expand") {
                navigate(`/projects/${transition.project.slug}`);
                setPhase("reveal");
              } else setTransition(null);
            }}
          >
            <img src={transition.project.image} alt="" />
            <span>{transition.project.title}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </ProjectTransitionContext.Provider>
  );
}
