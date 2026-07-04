import LandingPageNewFeatures from "@/components/landing-page/new-features"
import LandingPageFeatures from "@/components/landing-page/features"
import LandingPageHeader from "@/components/landing-page/header"
import LandingPageHero from "@/components/landing-page/hero"
import SplitKineticSpecifications from "@/components/landing-page/specs"
import SubscribeForm from "@/components/landing-page/subscribe-form"
import LandingPageFooter from "@/components/landing-page/footer"
import { Toaster } from "sonner"

export default function HomePage() {

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/10">
      <Toaster />

      {/* 1. HEADER / NAVBAR COMPONENT */}
      <LandingPageHeader />

      {/* MAIN CONTENT */}
      <main>

        {/* 2. HERO SECTION COMPONENT */}
        <LandingPageHero />

        {/* 3. NEW FEATURES SECTION COMPONENT */}
        <LandingPageNewFeatures />

        {/* 4. FEATURES SECTION COMPONENT */}
        <LandingPageFeatures />

        {/* 5. SPECS SECTION COMPONENT */}
        <SplitKineticSpecifications />

        {/* 6. SUBSCRIBE FORM SECTION COMPONENT */}
        <SubscribeForm />

      </main>

      {/* 7. FOOTER */}
      <LandingPageFooter />

    </div>
  )
}