"use client"

import { useEffect, useRef, useState } from "react"

const monologueLines = [
  "Long before time had a name,",
  "the First Spinjitzu Master created Ninjago",
  "using four elemental weapons.",
  "",
  "But when he passed,",
  "a dark presence sought to collect them all:",
  "the Scythe of Quakes, the Nunchucks of Lightning,",
  "the Shurikens of Ice, and the Sword of Fire.",
  "",
  "Now, a new generation of ninja must rise",
  "to protect the weapons, protect the world,",
  "and learn that the greatest power",
  "comes not from the weapons they wield\u2026",
  "but from the bonds they share.",
]

export function MonologueSection() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          monologueLines.forEach((_, index) => {
            setTimeout(() => {
              setVisibleLines((prev) => [...prev, index])
            }, index * 400)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="origin"
      ref={sectionRef}
      className="relative py-32 sm:py-40 overflow-hidden"
    >
      {/* Dark atmospheric background */}
      <div className="absolute inset-0 bg-[hsl(220,20%,4%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(45,60%,15%,0.15),_transparent_70%)]" />

      {/* Side glow lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <p className="text-[#d4af37] uppercase tracking-[0.3em] text-xs mb-12 font-medium">
          The Origin
        </p>

        <div className="space-y-1">
          {monologueLines.map((line, index) => {
            if (line === "") {
              return <div key={index} className="h-6" />
            }
            return (
              <p
                key={index}
                className={`font-[family-name:var(--font-cinzel)] text-xl sm:text-2xl md:text-3xl leading-relaxed transition-all duration-700 ${
                  visibleLines.includes(index)
                    ? "opacity-100 translate-y-0 text-glow"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  color: visibleLines.includes(index)
                    ? "hsl(40, 20%, 88%)"
                    : "transparent",
                }}
              >
                {line}
              </p>
            )
          })}
        </div>

        {visibleLines.length === monologueLines.length && (
          <div className="mt-16 animate-fade-in-up opacity-0" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
            <div className="w-16 h-px bg-[#d4af37]/50 mx-auto mb-8" />
            <p className="text-muted-foreground text-sm italic max-w-md mx-auto leading-relaxed">
              {"This opening monologue gave me chills as a kid. Now I understand it was setting the stage for lessons about legacy, responsibility, and what it truly means to be a hero."}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
