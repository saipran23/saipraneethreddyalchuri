import { useRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export function GradientCard({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      {...props}
      ref={ref}
      className={cn("gradient-card", className)}
      onPointerMove={(event) => {
        if (event.pointerType === "touch") return;
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty(
          "--mouse-x",
          `${event.clientX - rect.left}px`,
        );
        event.currentTarget.style.setProperty(
          "--mouse-y",
          `${event.clientY - rect.top}px`,
        );
      }}
    >
      {children}
    </div>
  );
}
