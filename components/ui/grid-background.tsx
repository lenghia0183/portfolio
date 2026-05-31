import type { ReactNode } from "react";

type GridBackgroundProps = {
  size?: number;
};

export function GridBackground({ size = 24 }: GridBackgroundProps): ReactNode {
  const gridStyle = (color: string) => ({
    backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
    backgroundSize: `${size}px ${size}px`,
  });

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-45 dark:hidden"
        style={gridStyle("rgba(100,116,139,0.2)")}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-35 dark:block"
        style={gridStyle("rgba(255,255,255,0.07)")}
        aria-hidden="true"
      />
    </>
  );
}
