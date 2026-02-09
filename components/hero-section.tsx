"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function HeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return

    const colors = ["#4ade80", "#3b82f6", "#ef4444", "#d4af37", "#67e8f9"]
    const particles: HTMLDivElement[] = []

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div")
      const color = colors[Math.floor(Math.random() * colors.length)]
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: ${color};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        bottom: -10px;
        opacity: 0;
        animation: float ${Math.random() * 6 + 6}s linear infinite;
        animation-delay: ${Math.random() * 6}s;
      `
      container.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      for (const p of particles) {
        p.remove()
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/ninjago-hero.jpg"
          alt="Ninjago world landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[hsl(220,20%,6%)]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(220,20%,6%)]" />
      </div>

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm mb-6 font-medium">
            An English Project Presentation
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
          <h1 className="font-[family-name:var(--font-cinzel)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 text-balance">
            <span className="text-[#4ade80]">NINJAGO</span>
          </h1>
        </div>

        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
          <p className="text-lg sm:text-xl text-secondary-foreground leading-relaxed max-w-2xl mx-auto mb-4">
            More than an animated series. A story about friendship, perseverance, balance, and the courage to grow.
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "1100ms", animationFillMode: "forwards" }}>
          <p className="text-muted-foreground italic text-base mb-10">
            {"When I was younger, I watched it for the action. As I grew up, I realized it was teaching me how to live."}
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "1400ms", animationFillMode: "forwards" }}>
          <a
            href="#origin"
            className="inline-flex items-center gap-2 border border-[#4ade80]/40 text-[#4ade80] px-8 py-3 rounded-full hover:bg-[#4ade80]/10 transition-all duration-300 text-sm uppercase tracking-widest"
          >
            Begin the Journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
