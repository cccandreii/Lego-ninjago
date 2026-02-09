"use client"

import { useEffect, useRef, useState } from "react"

export function MoreSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="more" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[hsl(220,18%,8%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(142,60%,20%,0.1),_transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center mb-16">
            <p className="text-[#d4af37] uppercase tracking-[0.3em] text-xs mb-4 font-medium">
              The Bigger Picture
            </p>
            <h2 className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {"More Than \"Just a Kids' Show\""}
            </h2>
          </div>

          <div className="space-y-8 text-secondary-foreground leading-relaxed">
            <p className="text-lg">
              {"People hear \"Lego Ninjago\" and assume it's just plastic bricks and silly cartoon battles. I get it — I used to think the same thing about how others saw the show. But the truth is, Ninjago operates on a level that most \"adult\" shows never reach."}
            </p>

            <p>
              {"It tackles grief when a beloved character is lost. It explores identity through Zane's realization that he's a machine built to feel. It questions the nature of good and evil through Garmadon — a father consumed by darkness who still loves his son. It addresses destiny vs. free will through Lloyd, who never asked to be the chosen one."}
            </p>

            <div className="border-l-2 border-[#4ade80]/40 pl-6 my-10">
              <p className="font-[family-name:var(--font-cinzel)] text-xl sm:text-2xl text-foreground text-glow italic">
                {"\"The show didn't talk down to its audience. It trusted us to understand complex emotions — and we did.\""}
              </p>
            </div>

            <p>
              {"The writing in Ninjago respects its audience. It doesn't shy away from consequences. Characters make real mistakes with real costs. Relationships fracture. Trust is broken and rebuilt. And through it all, the message stays consistent: you are more than your worst moment, and you are never truly alone."}
            </p>

            <p>
              {"For a show built on toy bricks, Ninjago constructed something unbreakable in the hearts of everyone who truly watched it. It was my first encounter with storytelling that made me feel seen, that challenged me to be better, and that proved animation can be art."}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { number: "15", label: "Seasons", color: "#4ade80" },
            { number: "200+", label: "Episodes", color: "#3b82f6" },
            { number: "11", label: "Years Running", color: "#ef4444" },
            { number: "1", label: "Unforgettable Journey", color: "#d4af37" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4">
              <div
                className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl font-bold mb-1"
                style={{ color: stat.color }}
              >
                {stat.number}
              </div>
              <div className="text-muted-foreground text-xs uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
