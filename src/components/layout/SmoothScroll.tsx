import { useEffect, useRef, type PropsWithChildren } from "react";
import { ReactLenis, useLenis, type LenisRef } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/animations";
import "lenis/dist/lenis.css";

function ScrollSync() {
  useLenis(() => ScrollTrigger.update());
  return null;
}
export function SmoothScroll({ children }: PropsWithChildren) {
  const ref = useRef<LenisRef>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const tick = (time: number) => ref.current?.lenis?.raf(time * 1000);
    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, []);
  return (
    <ReactLenis
      root
      ref={ref}
      autoRaf={false}
      options={{
        lerp: 0.085,
        smoothWheel: !reduced,
        syncTouch: false,
        anchors: { offset: -90 },
      }}
    >
      <ScrollSync />
      {children}
    </ReactLenis>
  );
}
