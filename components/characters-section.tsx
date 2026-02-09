"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const characters = [
  {
    name: "Kai",
    element: "Fire",
    color: "#ef4444",
    image: "/images/kai-portrait.jpg",
    description:
      "Hot-headed, fiercely protective, and driven by the fire that burns inside him. Kai is the Master of Fire and was the first ninja recruited by Sensei Wu. His journey from an impulsive loner obsessed with saving his sister to a selfless team player who would sacrifice everything for his brothers is one of the show's most compelling arcs. Kai teaches us that passion is a double-edged sword: it can consume you or fuel you, depending on how you wield it.",
    trait: "Passion & Courage",
  },
  {
    name: "Jay",
    element: "Lightning",
    color: "#3b82f6",
    image: "/images/jay-portrait.jpg",
    description:
      "The comedic heart of the team and the Master of Lightning. Jay's humor masks deep insecurity about who he is and where he came from. He's adopted, he doubts himself constantly, and he uses jokes as armor. But beneath all of that is someone with a heart of gold who never gives up on the people he loves. His relationship with Nya is one of the most genuine romances in animated storytelling, and watching him grow in confidence is incredibly relatable.",
    trait: "Humor & Heart",
  },
  {
    name: "Cole",
    element: "Earth",
    color: "#a3a3a3",
    image: "/images/cole-portrait.jpg",
    description:
      "Strong, steady, and the foundation the team is built on. Cole, the Master of Earth, is the team's rock in every sense of the word. He's a natural leader who leads through action rather than words. His story about reconnecting with his father, accepting his mother's death, and learning that true strength isn't about how hard you can hit but about how much you can carry for the people who depend on you, makes him one of the most quietly powerful characters.",
    trait: "Strength & Vulnerability",
  },
  {
    name: "Zane",
    element: "Ice",
    color: "#67e8f9",
    image: "/images/zane-portrait.jpg",
    description:
      "A Nindroid, a robot built to protect those who cannot protect themselves, and the Master of Ice. Zane is the soul of Ninjago. He's different from the others and he knows it, but his quest to understand what it means to be alive, to feel, to love, and ultimately his willingness to sacrifice himself for his brothers, makes him the most emotionally devastating character in the entire series. He proved that a heart isn't something you're born with. It's something you choose to have.",
    trait: "Identity & Sacrifice",
  },
  {
    name: "Lloyd",
    element: "Energy",
    color: "#4ade80",
    image: "/images/lloyd-portrait.jpg",
    description:
      "The Green Ninja, the chosen one, and the emotional core of everything. Lloyd begins the series as a bratty kid trying to live up to his father's villainous legacy. He ends it as the most burdened, battle-scarred, and mature hero in the show. His childhood was stolen, he was forced to fight his own father, betrayed by someone he loved, and lost friends along the way. Yet he never stops believing in the good in people. Lloyd's journey mirrors growing up itself: messy, painful, and ultimately beautiful.",
    trait: "Destiny & Growth",
  },
  {
    name: "Nya",
    element: "Water",
    color: "#06b6d4",
    image: "/images/nya-portrait.jpg",
    description:
      "Kai's sister and the Master of Water. Nya refused to be defined by anyone else, not as Kai's sister, not as Jay's girlfriend, not as a sidekick. She forged her own path, first as Samurai X and then as a fully realized ninja. Her power over water became the most visually stunning element in the show, and her sacrifice in Seabound, merging with the ocean to save the world, was every bit as heartbreaking as Zane's. She proved that independence and love aren't opposites; they're partners.",
    trait: "Independence & Power",
  },
  {
    name: "Sensei Wu",
    element: "Creation",
    color: "#d4af37",
    image: "/images/wu-portrait.jpg",
    description:
      "The wise, tea-loving mentor who assembled the ninja team and guided them through every trial. Master Wu is the son of the First Spinjitzu Master and the brother of Lord Garmadon. He carries centuries of guilt, wisdom, and love. His cryptic lessons frustrate the ninja endlessly, but every one of them turns out to be exactly what they needed. Wu taught me that a great teacher doesn't give you the answers. They give you the tools to find the answers yourself.",
    trait: "Wisdom & Guidance",
  },
]

function getElementClass(element: string) {
  switch (element) {
    case "Fire": return "fire-card"
    case "Lightning": return "lightning-card"
    case "Ice": return "ice-card"
    case "Earth": return "earth-card"
    case "Energy": return "energy-card"
    case "Water": return "water-card"
    case "Creation": return "wisdom-card"
    default: return ""
  }
}

function FireParticles() {
  const particles = [
    { left: "15%", bottom: "10%", width: 6, height: 6, delay: "0s", duration: "1.8s", color: "#ef4444" },
    { left: "35%", bottom: "5%", width: 8, height: 8, delay: "0.4s", duration: "2.1s", color: "#fb923c" },
    { left: "55%", bottom: "15%", width: 5, height: 5, delay: "0.8s", duration: "1.6s", color: "#fbbf24" },
    { left: "75%", bottom: "8%", width: 7, height: 7, delay: "1.2s", duration: "2s", color: "#ef4444" },
    { left: "25%", bottom: "12%", width: 4, height: 4, delay: "0.6s", duration: "1.5s", color: "#fb923c" },
    { left: "65%", bottom: "6%", width: 6, height: 6, delay: "1s", duration: "1.9s", color: "#fbbf24" },
    { left: "85%", bottom: "18%", width: 5, height: 5, delay: "0.3s", duration: "1.7s", color: "#ef4444" },
    { left: "45%", bottom: "3%", width: 4, height: 4, delay: "1.4s", duration: "2.2s", color: "#fb923c" },
  ]

  return (
    <>
      {/* Fire glow overlay */}
      <div
        className="fire-glow absolute inset-0 pointer-events-none z-10"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(239, 68, 68, 0.2) 0%, transparent 70%)" }}
      />
      {/* Fire particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="fire-particle z-20"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: p.width,
            height: p.height,
            backgroundColor: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
            filter: "blur(1px)",
          }}
        />
      ))}
    </>
  )
}

function LightningEffects() {
  const sparks = [
    { top: "20%", left: "10%", size: 3, delay: "0s" },
    { top: "40%", right: "15%", size: 4, delay: "0.8s" },
    { top: "60%", left: "25%", size: 3, delay: "1.6s" },
    { top: "30%", right: "30%", size: 2, delay: "0.4s" },
    { top: "70%", left: "60%", size: 3, delay: "1.2s" },
    { top: "15%", left: "70%", size: 2, delay: "2s" },
  ]

  return (
    <>
      {/* Lightning flash overlay */}
      <div
        className="lightning-flash absolute inset-0 pointer-events-none z-10"
        style={{ backgroundColor: "rgba(96, 165, 250, 0.08)" }}
      />
      {/* SVG lightning bolt */}
      <svg
        className="lightning-bolt z-20"
        style={{ top: "5%", left: "12%", animationDelay: "0.5s" }}
        width="30"
        height="60"
        viewBox="0 0 30 60"
        fill="none"
      >
        <path
          d="M15 0 L18 20 L25 22 L12 40 L15 28 L8 26 Z"
          fill="rgba(96, 165, 250, 0.6)"
          filter="url(#glow1)"
        />
        <defs>
          <filter id="glow1">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <svg
        className="lightning-bolt z-20"
        style={{ top: "10%", right: "18%", animationDelay: "2s" }}
        width="20"
        height="45"
        viewBox="0 0 20 45"
        fill="none"
      >
        <path
          d="M10 0 L13 15 L18 16 L7 30 L10 21 L5 20 Z"
          fill="rgba(147, 197, 253, 0.5)"
          filter="url(#glow2)"
        />
        <defs>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      {/* Electric sparks */}
      {sparks.map((s, i) => (
        <div
          key={i}
          className="spark z-20"
          style={{
            top: s.top,
            left: "left" in s ? s.left : undefined,
            right: "right" in s ? s.right : undefined,
            width: s.size,
            height: s.size,
            backgroundColor: "#93c5fd",
            boxShadow: "0 0 6px 2px rgba(96, 165, 250, 0.6)",
            animationDelay: s.delay,
          }}
        />
      ))}
    </>
  )
}

function CharacterCard({
  character,
  index,
}: {
  character: (typeof characters)[0]
  index: number
}) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const elementClass = getElementClass(character.element)

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-700 hover:border-[color:var(--char-color)]/40 ${elementClass} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={
        {
          "--char-color": character.color,
          transitionDelay: `${index * 100}ms`,
        } as React.CSSProperties
      }
    >
      {/* Element-specific animated effects */}
      {character.element === "Fire" && <FireParticles />}
      {character.element === "Lightning" && <LightningEffects />}

      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <Image
          src={character.image || "/placeholder.svg"}
          alt={`${character.name} - Master of ${character.element}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

        {/* Element badge */}
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border pulse-glow z-30"
          style={{
            color: character.color,
            borderColor: `${character.color}66`,
            backgroundColor: `${character.color}15`,
          }}
        >
          {character.element}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 p-5">
        <h3
          className="font-[family-name:var(--font-cinzel)] text-xl font-bold mb-1"
          style={{ color: character.color }}
        >
          {character.name}
        </h3>
        <p
          className="text-xs uppercase tracking-wider mb-3 font-medium"
          style={{ color: `${character.color}99` }}
        >
          {character.trait}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {character.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-30"
        style={{ backgroundColor: character.color }}
      />
    </div>
  )
}

export function CharactersSection() {
  return (
    <section id="characters" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#d4af37] uppercase tracking-[0.3em] text-xs mb-4 font-medium">
            The Team
          </p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Masters of Their Elements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each ninja represents a different element — and a different facet of what it means to grow up.
            Together, they taught me that our differences are our greatest strength.
          </p>
        </div>

        {/* First row: 3 ninja */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {characters.slice(0, 3).map((character, index) => (
            <CharacterCard
              key={character.name}
              character={character}
              index={index}
            />
          ))}
        </div>
        {/* Second row: 4 characters centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.slice(3).map((character, index) => (
            <CharacterCard
              key={character.name}
              character={character}
              index={index + 3}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
