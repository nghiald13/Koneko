import LandingPageHeader from "@/components/landing-page/header"
import LandingPageHero from "@/components/landing-page/hero"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/10">

      {/* MAIN CONTENT */}
      <main>
        {/* 1. HEADER / NAVBAR COMPONENT */}
        <LandingPageHeader />
        <LandingPageHero />

      </main>
    </div>
  )
}