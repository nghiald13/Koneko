import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/10">
      {/* 1. HEADER / NAVBAR COMPONENT */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-foreground">
              Neakasa <span className="text-primary font-extrabold">M1</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="#specs" className="transition-colors hover:text-foreground">
              Specs
            </Link>
            <Link href="#reviews" className="transition-colors hover:text-foreground">
              Reviews
            </Link>
          </nav>

          {/* CTA Action Button */}
          <div className="flex items-center gap-4">
            <Button variant="default" className="rounded-full shadow-sm">
              Pre-order Now
            </Button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>
        {/* 2. HERO SECTION COMPONENT */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Centered Typography & CTA Layout */}
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              {/* Badge thông báo nhỏ phong cách Apple */}
              <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground mb-6 ring-1 ring-inset ring-border">
                The Future of Feline Care
              </span>

              {/* Main Heading */}
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Revolutionary Open-Top{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent block md:inline">
                  Self-Cleaning
                </span>{" "}
                Litter Box
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed">
                Experience the ultimate comfort for your cat and effortless maintenance for you.
                Odor-free, ultra-quiet, and 100% safe.
              </p>

              {/* Hero Buttons CTA */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-none transition-all duration-300"
                >
                  Buy Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 text-base font-medium border-border hover:bg-secondary/50 transition-colors"
                >
                  <Play className="mr-2 h-4 w-4 fill-current" />
                  Watch Video
                </Button>
              </div>
            </div>

            {/* Product Image Showcase Container */}
            <div className="mt-16 md:mt-24 relative mx-auto max-w-5xl rounded-3xl border border-border/60 bg-background p-2 shadow-2xl shadow-foreground/5 dark:shadow-none">
              <div className="overflow-hidden rounded-2xl bg-secondary/10">
                <Image
                  src="/images/neakasam1-2.webp" // Đường dẫn ảnh sản phẩm của bạn
                  alt="Neakasa M1 Open-Top Self-Cleaning Cat Litter Box Showcase"
                  width={1200}
                  height={675}
                  priority={true} // Bắt buộc dùng true để tối ưu chỉ số LCP cho Hero Image
                  className="h-auto w-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
              </div>
            </div>
          </div>

          {/* Decorative Subtle Background Glow */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-primary/20 to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]" />
          </div>
        </section>
      </main>
    </div>
  )
}