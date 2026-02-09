import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MonologueSection } from "@/components/monologue-section"
import { CharactersSection } from "@/components/characters-section"
import { SeasonsSection } from "@/components/seasons-section"
import { LessonsSection } from "@/components/lessons-section"
import { MoreSection } from "@/components/more-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MonologueSection />
      <CharactersSection />
      <SeasonsSection />
      <LessonsSection />
      <MoreSection />
      <Footer />
    </main>
  )
}
