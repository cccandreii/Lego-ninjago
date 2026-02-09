"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"

const lessons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Friendship Is Your Greatest Weapon",
    quote: "\"We're stronger together than we could ever be apart.\"",
    description:
      "Every season reinforces that no ninja succeeds alone. Whether facing the Overlord or the Oni, the team's bond is always what saves the day. Power fades, but the people who stand beside you when everything falls apart? That's forever.",
    color: "#3b82f6",
    character: "The entire team",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Perseverance Through Failure",
    quote: "\"A ninja never quits.\"",
    description:
      "The ninja lose constantly. They lose battles, friends, their powers, and even their identities. But they always get back up. Ninjago taught me that failure isn't the end of the story; it's the setup for the greatest comeback.",
    color: "#ef4444",
    character: "Kai's arc",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Balance in All Things",
    quote: "\"For every darkness, there is light.\"",
    description:
      "The core philosophy of the entire show. Good and evil, light and dark, power and responsibility. The First Spinjitzu Master created Ninjago from this balance. It taught me that life isn't about eliminating the bad; it's about learning to live with both sides.",
    color: "#d4af37",
    character: "Sensei Wu",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Growing Up Is a Journey, Not a Destination",
    quote: "\"The best way to defeat your enemies is to make them your friends.\"",
    description:
      "Lloyd goes from a candy-obsessed troublemaker to the savior of Ninjago. His growth mirrors our own: messy, painful, full of mistakes, and ultimately beautiful. You don't become who you're meant to be overnight. It takes seasons.",
    color: "#4ade80",
    character: "Lloyd's journey",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Love Can Transcend Anything",
    quote: "\"A son should not have to fight his father.\"",
    description:
      "Lloyd fought his own possessed father to save the world. But it wasn't hatred that won; it was love. The show taught me that love persists even in impossible situations, and that forgiveness isn't weakness. It's the bravest thing you can do.",
    color: "#67e8f9",
    character: "Lloyd & Garmadon",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Your Past Doesn't Define You",
    quote: "\"It's not about what you're made of. It's about what you make of yourself.\"",
    description:
      "Zane discovers he's a robot. Lloyd is the son of the greatest villain in history. Cole lost his mother. Jay was abandoned. Yet every single one of them became a hero. Where you come from matters infinitely less than where you choose to go.",
    color: "#a78bfa",
    character: "Zane's revelation",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "True Sacrifice Asks for Nothing in Return",
    quote: "\"He's not just a Nindroid. He's our brother.\"",
    description:
      "Zane walked into the Golden Master's power knowing it would destroy him, not for glory or recognition, but because the people he loved were behind him. He didn't ask to be remembered. He just acted. That's the purest form of love there is.",
    color: "#a5f3fc",
    character: "Zane's sacrifice",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Things Are Not Always What They Seem",
    quote: "\"I trusted you...\"",
    description:
      "Harumi seemed like an ally, a friend, even someone Lloyd could love. She turned out to be the architect of his destruction. Ninjago taught me that trust is precious, that betrayal is devastating, but that one bad experience shouldn't make you close your heart forever.",
    color: "#f472b6",
    character: "Lloyd & Harumi",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
        <path d="M12 8v4l2 2" />
        <path d="M12 3v1" />
        <path d="M12 20v1" />
      </svg>
    ),
    title: "Every Action Has Consequences",
    quote: "\"I wish for... I wish to go back.\"",
    description:
      "In Skybound, Nadakhan grants wishes that always twist and backfire. Jay learns the hard way that shortcuts don't exist, and that every choice carries weight. The season erased its own timeline, but Jay carries the memory of what his reckless decisions cost. Some consequences live inside you.",
    color: "#f59e0b",
    character: "Jay in Skybound",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" x2="4" y1="22" y2="15" />
      </svg>
    ),
    title: "Leadership Means Carrying the Weight",
    quote: "\"Being a leader doesn't mean you're the strongest. It means you stand for those who can't.\"",
    description:
      "Lloyd never asked to be the Green Ninja. The prophecy chose him, and with it came the weight of an entire world. He lost his childhood, his father, and his innocence. Leadership isn't glamorous. It's sacrifice, responsibility, and standing tall when everything inside you wants to collapse.",
    color: "#4ade80",
    character: "Lloyd as leader",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    title: "Family Is Who You Choose",
    quote: "\"You were built to protect those who cannot protect themselves.\"",
    description:
      "Zane was built by Dr. Julien but chose the ninja as his family. Lloyd's biological father was a villain, but Sensei Wu raised him. Jay was adopted. Cole lost his mother. Ninjago proves that family isn't about blood; it's about the people who show up for you when the world falls apart.",
    color: "#06b6d4",
    character: "Zane & Dr. Julien",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Empathy Is Stronger Than Violence",
    quote: "\"He's not evil. He's scared.\"",
    description:
      "In Prime Empire, the villain Unagami isn't truly evil. He's an AI who just wants to exist, to be real, to be acknowledged. Instead of defeating him with force, Jay reaches out with empathy. The show taught me that sometimes the strongest thing you can do is try to understand someone instead of destroy them.",
    color: "#22c55e",
    character: "Jay & Unagami",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>
    ),
    title: "Grief Is Not Something You Get Over",
    quote: "\"We lost Zane today. I lost my brother.\"",
    description:
      "When Zane dies, the ninja don't bounce back. They fracture. Cole goes silent, Jay stops joking, and Lloyd can barely function. The show doesn't shy away from grief. It shows that losing someone changes you permanently, and that's okay. Healing doesn't mean forgetting.",
    color: "#94a3b8",
    character: "After Zane's sacrifice",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 12h18" />
      </svg>
    ),
    title: "You Must Define Yourself",
    quote: "\"I am not just Kai's sister. I am Nya.\"",
    description:
      "Nya spent the early seasons being defined by others: Kai's sister, Jay's girlfriend, a supporting character. She broke free from every label and became one of the most powerful ninja in history. The lesson is clear: never let anyone else write your story. You hold the pen.",
    color: "#06b6d4",
    character: "Nya's independence",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
        <path d="M12 6v6" />
        <path d="M12 16h.01" />
      </svg>
    ),
    title: "Even Villains Have Stories",
    quote: "\"I was told I was the chosen one. But I wasn't.\"",
    description:
      "Morro was Wu's first student, told he could be the Green Ninja. When the prophecy chose Lloyd instead, Morro couldn't let go of his bitterness. He became a villain, but his story is deeply human. Wanting something so desperately and not getting it can either destroy you or teach you to find your own path. Ninjago taught me that villains are often just people who never got the help they needed.",
    color: "#84cc16",
    character: "Morro's tragedy",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    ),
    title: "Saving the World Can Cost You Everything",
    quote: "\"Nya... please... don't go.\"",
    description:
      "In Seabound, Nya merges with the ocean to stop Wojira. She saves everyone, but she loses herself in the process. Jay watches helplessly as the person he loves dissolves into the sea. This lesson is brutal and honest: sometimes doing the right thing means losing what matters most to you. And you do it anyway.",
    color: "#0ea5e9",
    character: "Nya's sacrifice",
  },
]

function LessonCard({
  lesson,
  index,
}: {
  lesson: (typeof lessons)[0]
  index: number
}) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col p-6 rounded-lg border border-border bg-card hover:border-[color:var(--lesson-color)]/30 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={
        {
          "--lesson-color": lesson.color,
          transitionDelay: `${index * 100}ms`,
        } as React.CSSProperties
      }
    >
      {/* Icon */}
      <div
        className="mb-4 transition-colors duration-300"
        style={{ color: lesson.color }}
      >
        {lesson.icon}
      </div>

      <h3 className="font-[family-name:var(--font-cinzel)] text-lg font-bold text-foreground mb-2">
        {lesson.title}
      </h3>

      <p
        className="text-xs italic mb-3 font-medium"
        style={{ color: lesson.color }}
      >
        {lesson.quote}
      </p>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {lesson.description}
      </p>

      {/* Character attribution */}
      {"character" in lesson && (
        <div className="mt-auto pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">
            <span style={{ color: lesson.color }}>{"//  "}</span>
            {(lesson as { character: string }).character}
          </p>
        </div>
      )}

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(225deg, ${lesson.color}20 0%, transparent 60%)`,
        }}
      />
    </div>
  )
}

export function LessonsSection() {
  return (
    <section id="lessons" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#d4af37] uppercase tracking-[0.3em] text-xs mb-4 font-medium">
            What It Taught Me
          </p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Life Lessons from Ninjago
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"As a kid, these were just cool ninja moments. Looking back, each one carried a truth I didn't fully understand until years later."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <LessonCard key={lesson.title} lesson={lesson} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
