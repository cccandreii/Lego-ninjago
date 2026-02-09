"use client"

import { useEffect, useRef, useState } from "react"

interface Season {
  number: string
  title: string
  year: string
  color: string
  description: string
  theme: string
  featured?: boolean
  quote?: string
  details?: string[]
}

const seasons: Season[] = [
  {
    number: "Pilot",
    title: "Way of the Ninja",
    year: "2011",
    color: "#d4af37",
    description:
      "The two pilot episodes that started it all. We meet Kai, a hot-headed blacksmith who joins Sensei Wu's quest to stop Lord Garmadon. The ninja team assembles for the first time: Kai, Jay, Cole, and Zane. It introduces Spinjitzu and the Golden Weapons, laying the foundation for everything that follows.",
    theme: "Beginnings",
  },
  {
    number: "01",
    title: "Rise of the Snakes",
    year: "2012",
    color: "#4ade80",
    description:
      "The first full season, and where the real story begins. Lloyd Garmadon starts as a bratty kid trying to be evil like his father, unleashing the Serpentine tribes on Ninjago. But the ninja take him in, and we watch him slowly transform from a nuisance into someone with real potential. The Serpentine aren't just villains either; each tribe has its own culture and history. This season set the tone for the entire series: your bloodline doesn't define your destiny.",
    theme: "Identity",
  },
  {
    number: "02",
    title: "Legacy of the Green Ninja",
    year: "2012",
    color: "#4ade80",
    description:
      "The prophecy is fulfilled: Lloyd is the Green Ninja, destined to face the Dark Lord. But the Dark Lord is his own father. The emotional climax of this season is devastating. Lloyd, still just a kid, has to fight the person he loves most in the world to save everyone else. Garmadon isn't purely evil; he's corrupted by the Great Devourer's venom, and you can see the father underneath fighting to break free. The final battle isn't won with fists. It's won with love.",
    theme: "Love vs. Duty",
  },
  {
    number: "03",
    title: "Rebooted",
    year: "2014",
    color: "#a5f3fc",
    featured: true,
    quote: "We're all afraid. But that doesn't mean we stop fighting.",
    description:
      "This is it. The season that broke me and made me understand what this show truly was. The Overlord returns as a digital virus threatening to consume all of Ninjago, and the ninja must navigate a technologically advanced New Ninjago City to stop him. But this season isn't really about the villain. It's about Zane.",
    details: [
      "Throughout the season, Zane begins to malfunction. He's a Nindroid, an android built by Dr. Julien, and he's always known he was different. But this season forces him to confront what that difference means. He discovers hidden memories, faces the reality of his creation, and questions whether a machine can truly have a soul.",
      "And then comes the finale. The Overlord has become the Golden Master, wielding ultimate power, and the ninja are outmatched. There is no trick, no last-minute weapon, no deus ex machina. Someone has to make the sacrifice. And Zane steps forward.",
      "He doesn't hesitate. He looks at his brothers, the people he chose as family, and he walks into the fire. He absorbs the Golden Master's power, knowing it will destroy him. His final moments are quiet and devastating. He remembers his father. He remembers his friends. He smiles. And then he's gone.",
      "The ninja don't celebrate their victory. They stand in the ruins, broken. The memorial scene that follows is one of the most emotional moments in any animated series I've ever watched. Each ninja takes turns speaking about what Zane meant to them. Cole, the stoic leader, breaks down. Jay can't find words. Lloyd places a hand on the memorial. Kai says what everyone is thinking: Zane was the best of them.",
      "As a kid, I cried. I didn't fully understand why it hit so hard. But as I grew older, I realized: Zane taught me that heroism isn't about power. It's about choosing others over yourself. It's about walking into the fire because someone has to, and because you love the people behind you too much to let them burn.",
      "This season is the heart and soul of Ninjago. Everything before it built to this moment. Everything after it carries the weight of Zane's sacrifice. He does come back eventually, rebuilt as a titanium Nindroid, but the show never pretends the sacrifice didn't matter. The other ninja are changed forever. And so was I.",
    ],
    theme: "Ultimate Sacrifice",
  },
  {
    number: "04",
    title: "Tournament of Elements",
    year: "2015",
    color: "#d4af37",
    description:
      "A Hunger Games-style tournament brings together Elemental Masters from across the land, each with unique powers: Speed, Gravity, Nature, Shadow, and more. Chen, the seemingly charming host, is manipulating everyone. This season explores trust, betrayal, and the danger of fighting alone. The ninja learn that even competitors can become allies, and that unity is the greatest weapon against those who seek to divide. It also gives Kai and Skylor's relationship real depth, and we learn more about the Elemental Masters' history.",
    theme: "Unity & Trust",
  },
  {
    number: "05",
    title: "Possession",
    year: "2015",
    color: "#4ade80",
    description:
      "Morro, Wu's first student who was consumed by jealousy and rage, returns as a ghost and possesses Lloyd. The team must function without their leader and find a way to save him from the inside. Morro's story is tragic; he was told he would be the Green Ninja and couldn't accept that he wasn't. It's a powerful lesson about entitlement, envy, and the fact that wanting something desperately doesn't mean you deserve it. In the end, even Morro finds a measure of redemption.",
    theme: "Letting Go",
  },
  {
    number: "06",
    title: "Skybound",
    year: "2016",
    color: "#3b82f6",
    description:
      "Nadakhan, a djinn pirate, grants wishes that always twist against the wisher. Jay takes center stage as his deepest insecurities are exploited. The season is a love story at its core, showing how Jay and Nya's relationship is tested to its breaking point. It also has one of the most creative endings in the series: Jay uses his final wish to undo everything, erasing the entire season from the timeline. Only he and Nya remember what happened, carrying that weight in silence.",
    theme: "Consequences",
  },
  {
    number: "07",
    title: "Hands of Time",
    year: "2017",
    color: "#ef4444",
    description:
      "Acronix and Krux, twin Time Elemental Masters, return after being lost in time for decades. Kai and Nya discover their parents were involved in the original conflict and were taken prisoner. It's deeply personal; Kai must confront the anger he's carried his whole life about being abandoned, only to learn the truth was far more complicated. The season teaches that the stories we tell ourselves about our past aren't always the full picture.",
    theme: "Family & Truth",
  },
  {
    number: "08",
    title: "Sons of Garmadon",
    year: "2018",
    color: "#a855f7",
    description:
      "The series takes a dramatically darker turn. A criminal biker gang worships Lord Garmadon and seeks to resurrect him, but as pure evil, without any of the love that once defined him. Harumi, a princess Lloyd falls for, is revealed as the mastermind. Her betrayal is crushing. The season deals with loss, grief, and the shattering realization that the people you trust most can be the ones who hurt you. When Garmadon returns without his humanity, Lloyd loses his father for the second time. The tone shift proved the series was maturing alongside its audience.",
    theme: "Betrayal & Grief",
  },
  {
    number: "09",
    title: "Hunted",
    year: "2018",
    color: "#ef4444",
    description:
      "Split into two storylines: Lloyd leads a resistance in Ninjago against his father's tyranny while the rest of the ninja are trapped in the Realm of Oni and Dragons. Both groups must find their strength without each other. The season is about resilience; about standing up even when you've lost everything, even when the odds are impossible. Lloyd, who has every reason to give up, chooses to fight not with power but with hope. The reunion of the team is one of the most earned emotional moments in the series.",
    theme: "Resilience & Hope",
  },
  {
    number: "10",
    title: "March of the Oni",
    year: "2019",
    color: "#6b7280",
    description:
      "The Oni, primal forces of destruction, invade Ninjago. Lord Garmadon must fight alongside the ninja to stop them, creating an uneasy alliance. This short but powerful season forces Lloyd to work with the man who destroyed his city and broke his trust. Garmadon's moment of sacrifice, giving his own darkness to save everyone, raises the question: can someone truly change? The ending leaves that answer beautifully ambiguous.",
    theme: "Redemption",
  },
  {
    number: "11",
    title: "Secrets of the Forbidden Spinjitzu",
    year: "2019",
    color: "#d4af37",
    description:
      "The ninja travel to the Never-Realm, a frozen wasteland where Zane has been trapped and corrupted into the Ice Emperor. Decades have passed for him. He's forgotten who he is. The season is a meditation on memory and identity; who are you when you forget everything that made you? The moment Zane remembers, when he hears the Falcon and the memories come flooding back, is quietly devastating. It also introduces Akita and explores themes of vengeance versus forgiveness.",
    theme: "Memory & Identity",
  },
  {
    number: "12",
    title: "Prime Empire",
    year: "2020",
    color: "#22c55e",
    description:
      "The ninja are trapped inside a video game, but the stakes are real; losing all your lives means being deleted permanently. Jay once again takes the spotlight, and the season explores the ethics of creation, artificial intelligence, and responsibility. Unagami, the game's AI, just wants to exist in the real world. He's not evil; he's lonely. The resolution isn't a battle but an act of empathy, teaching that understanding your enemy is sometimes more powerful than defeating them.",
    theme: "Empathy",
  },
  {
    number: "13",
    title: "Master of the Mountain",
    year: "2020",
    color: "#78716c",
    description:
      "Cole's season. He journeys to the Shintaro Kingdom and discovers the Geckles and Munce, enslaved underground. Cole confronts his relationship with his late mother, the Elemental Master of Earth before him, and learns that leadership isn't about strength. It's about lifting others up. The Skull Sorcerer is one of the more menacing villains, and the season gives Cole the emotional depth he has always deserved.",
    theme: "True Strength",
  },
  {
    number: "14",
    title: "Seabound",
    year: "2021",
    color: "#06b6d4",
    description:
      "Nya discovers her full potential as the Water Ninja, but at an unbearable cost. To stop Wojira and save the world, she must merge with the ocean itself, losing her physical form and her identity as a person. The ninja lose another member of their family. Unlike Zane's sacrifice, which was an explosion of heroism, Nya's is slow and heartbreaking. She dissolves into the sea, leaving behind the people who love her. Jay's reaction is devastating. The season asks: what happens when saving the world means losing yourself?",
    theme: "The Cost of Power",
  },
  {
    number: "15",
    title: "Crystalized",
    year: "2022",
    color: "#67e8f9",
    description:
      "The final season. Thirty episodes that bring every thread together. Every major villain returns. Every relationship is tested. The ninja face the Crystal King and an army that represents everything they've ever fought. But the real battle is emotional: can they stay together after everything they've lost? The series ends not with a grand explosion but with the quiet truth that friendship, real friendship, is the most powerful force in any world. A perfect farewell to a show that meant everything.",
    theme: "Legacy",
  },
]

function FeaturedSeasonCard({ season }: { season: Season }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative my-16 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Glowing border container */}
      <div className="relative rounded-2xl overflow-hidden">
        {/* Animated border glow */}
        <div
          className="absolute -inset-px rounded-2xl opacity-60"
          style={{
            background: `linear-gradient(135deg, ${season.color}, transparent 40%, transparent 60%, ${season.color})`,
          }}
        />
        <div
          className="absolute -inset-px rounded-2xl opacity-30 blur-md"
          style={{ backgroundColor: season.color }}
        />

        <div className="relative bg-[hsl(220,20%,7%)] rounded-2xl p-6 sm:p-8 md:p-10">
          {/* Header badge */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{
                backgroundColor: `${season.color}20`,
                color: season.color,
                border: `1px solid ${season.color}40`,
              }}
            >
              The Season That Changed Everything
            </div>
          </div>

          {/* Title area */}
          <div className="flex flex-wrap items-baseline gap-4 mb-4">
            <div
              className="text-5xl sm:text-6xl font-bold font-[family-name:var(--font-cinzel)] opacity-20"
              style={{ color: season.color }}
            >
              {season.number}
            </div>
            <div>
              <h3
                className="font-[family-name:var(--font-cinzel)] text-2xl sm:text-3xl md:text-4xl font-bold"
                style={{ color: season.color }}
              >
                {season.title}
              </h3>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-muted-foreground text-sm">{season.year}</span>
                <span className="text-muted-foreground">{"/"}</span>
                <span
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{ color: season.color }}
                >
                  {season.theme}
                </span>
              </div>
            </div>
          </div>

          {/* Quote */}
          {season.quote && (
            <blockquote
              className="border-l-2 pl-4 sm:pl-6 my-6 text-lg sm:text-xl italic font-[family-name:var(--font-cinzel)] leading-relaxed"
              style={{ borderColor: season.color, color: `${season.color}cc` }}
            >
              {`"${season.quote}"`}
            </blockquote>
          )}

          {/* Main description */}
          <p className="text-foreground text-base sm:text-lg leading-relaxed mb-6">
            {season.description}
          </p>

          {/* Detailed paragraphs */}
          {season.details?.map((detail, i) => (
            <p
              key={i}
              className={`text-sm sm:text-base leading-relaxed mb-4 ${
                i === season.details!.length - 1
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {detail}
            </p>
          ))}

          {/* Memorial divider */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
              style={{
                backgroundColor: `${season.color}15`,
                border: `1px solid ${season.color}30`,
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={season.color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div>
              <p className="text-foreground text-sm font-medium">
                In memory of Zane
              </p>
              <p className="text-muted-foreground text-xs">
                {"The Titanium Ninja. A brother. The best of us."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SeasonCard({
  season,
  index,
}: {
  season: Season
  index: number
}) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-6 sm:gap-8">
        {/* Timeline */}
        <div className="flex flex-col items-center shrink-0">
          <div
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-[10px] font-bold"
            style={{
              borderColor: season.color,
              color: season.color,
            }}
          >
            {season.number}
          </div>
          <div className="w-px flex-1 bg-border mt-3" />
        </div>

        {/* Content */}
        <div className="pb-10">
          <div className="flex flex-wrap items-baseline gap-3 mb-2">
            <h3
              className="font-[family-name:var(--font-cinzel)] text-xl sm:text-2xl font-bold"
              style={{ color: season.color }}
            >
              {season.title}
            </h3>
            <span className="text-muted-foreground text-xs">{season.year}</span>
          </div>
          <div
            className="inline-block px-2.5 py-0.5 rounded text-xs font-medium uppercase tracking-wider mb-3"
            style={{
              backgroundColor: `${season.color}15`,
              color: season.color,
            }}
          >
            {season.theme}
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
            {season.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function SeasonsSection() {
  // Separate featured season (Season 3) from the rest
  const regularSeasons = seasons.filter((s) => !s.featured)
  const featuredSeason = seasons.find((s) => s.featured)
  // Split into before and after the featured season
  const beforeFeatured = regularSeasons.filter(
    (s) => Number.parseInt(s.number) < 3 || s.number === "Pilot"
  )
  const afterFeatured = regularSeasons.filter(
    (s) => Number.parseInt(s.number) > 3 && s.number !== "Pilot"
  )

  return (
    <section id="seasons" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[hsl(220,18%,8%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#d4af37] uppercase tracking-[0.3em] text-xs mb-4 font-medium">
            The Complete Journey
          </p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Every Season, Every Lesson
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {
              "Fifteen seasons. Over two hundred episodes. Eleven years of storytelling. Each season brought its own battles, but the real fights were always internal. Here is every chapter of the journey, and why each one mattered."
            }
          </p>
        </div>

        {/* Seasons before the featured one */}
        <div>
          {beforeFeatured.map((season, index) => (
            <SeasonCard key={season.number} season={season} index={index} />
          ))}
        </div>

        {/* Featured Season 3 */}
        {featuredSeason && <FeaturedSeasonCard season={featuredSeason} />}

        {/* Seasons after the featured one */}
        <div>
          {afterFeatured.map((season, index) => (
            <SeasonCard key={season.number} season={season} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
