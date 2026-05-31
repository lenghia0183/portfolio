"use client";

import { useEffect, useState, type ReactNode } from "react";

export function MouseGlow(): ReactNode {
  const [position, setPosition] = useState({ x: -400, y: -400 });

  useEffect(() => {
    const onMove = (event: PointerEvent): void => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 hidden mix-blend-screen lg:block"
      style={{
        background: `radial-gradient(360px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.09), transparent 42%)`,
      }}
    />
  );
}
