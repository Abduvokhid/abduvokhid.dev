"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const alignGrid = () => {
      if (!gridRef.current) return;
      
      const gridSize = 60;
      const containerWidth = 960; // max-w-4xl (896px) + 32px offset each side
      const viewportWidth = window.innerWidth;
      
      // Calculate where left border is from viewport edge
      const borderPosition = (viewportWidth - containerWidth) / 2;
      
      // Offset grid so a line falls exactly on the border position
      const offset = borderPosition % gridSize;
      gridRef.current.style.backgroundPositionX = `${offset}px`;
    };

    alignGrid();
    window.addEventListener("resize", alignGrid);
    return () => window.removeEventListener("resize", alignGrid);
  }, []);

  return (
    <section className="relative py-20 md:py-32 z-10">
      {/* Grid pattern - full viewport width, dynamically positioned to align with borders */}
      <div 
        ref={gridRef}
        className="absolute inset-0 bg-grid-pattern pointer-events-none"
        style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
      />
      {/* Gradient fade at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-background via-background/80 to-transparent pointer-events-none"
        style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
      />
      
      <div className="relative space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
          Software Engineering
          <br />
          <span className="text-muted-foreground">Leader</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Delivering practical and secure financial systems through scalable 
          architectures and reliable payment technologies.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {["FinTech", "Payments", "Anti-fraud", "BNPL", "Cybersecurity"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
