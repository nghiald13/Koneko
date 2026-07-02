import LandingPageNewFeatures from "@/components/landing-page/new-features"
import LandingPageFeatures from "@/components/landing-page/features"
import LandingPageHeader from "@/components/landing-page/header"
import LandingPageHero from "@/components/landing-page/hero"
import SplitKineticSpecifications from "@/components/landing-page/specs"


export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/10">

      {/* MAIN CONTENT */}
      <main>
        {/* 1. HEADER / NAVBAR COMPONENT */}
        <LandingPageHeader />

        {/* 2. HERO SECTION COMPONENT */}
        <LandingPageHero />

        {/* 3. NEW FEATURES SECTION COMPONENT */}
        <LandingPageNewFeatures />

        {/* 4. FEATURES SECTION COMPONENT */}
        <LandingPageFeatures />

        {/* 5. SPECS SECTION COMPONENT */}
        <SplitKineticSpecifications />
      </main>
    </div>
  )
}