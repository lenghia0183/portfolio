"use client";

import { useEffect, useState, type ReactNode } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function scramble(target: string, progress: number): string {
  return target
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      if (i < Math.floor(progress * target.length)) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join("");
}

export function TextScramble({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}): ReactNode {
  const [displayed, setDisplayed] = useState(text);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 28;
    let raf: number;
    let started = false;

    const timeout = setTimeout(() => {
      started = true;
      const tick = () => {
        frame++;
        setDisplayed(scramble(text, frame / totalFrames));
        if (frame < totalFrames) {
          raf = requestAnimationFrame(tick);
        } else {
          setDisplayed(text);
        }
      };
      raf = requestAnimationFrame(tick);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (started) cancelAnimationFrame(raf);
    };
  }, [text, delay]);

  return (
    <span className={className} aria-label={text}>
      {displayed}
    </span>
  );
}
