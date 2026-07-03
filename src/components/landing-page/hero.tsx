import { cn } from "@/lib/utils"
import { HeroCTA } from "./hero-CTA"

const LandingPageHero = () => {
    return (
        <>
            {/* MAIN CONTENT */}
            {/* 2. HERO SECTION COMPONENT */}
            <section id="hero"
                className={cn(
                    "relative overflow-hidden",
                    "py-20 md:py-32",
                    "bg-gradient-to-b from-background to-secondary/30",
                )}
            >
                <div
                    className={cn(
                        "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    )}
                >
                    {/* Centered Typography & CTA Layout */}
                    <div
                        className={cn(
                            "flex flex-col items-center",
                            "max-w-3xl mx-auto",
                            "text-center"
                        )}
                    >
                        {/* Badge thông báo nhỏ phong cách Apple */}
                        <span
                            className={cn(
                                "inline-flex items-center",
                                "px-4 py-1.5 mb-6",
                                "text-xs font-semibold text-secondary-foreground",
                                "bg-secondary rounded-full ring-1 ring-inset ring-border"
                            )}
                        >
                            The Future of Feline Care
                        </span>

                        {/* Main Heading */}
                        <h1
                            className={cn(
                                "text-4xl font-extrabold tracking-tight text-foreground",
                                "sm:text-5xl md:text-6xl lg:text-7xl"
                            )}
                        >
                            Revolutionary Open-Top{" "}
                            <span
                                className={cn(
                                    "block",
                                    "bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent",
                                    "md:inline"
                                )}
                            >
                                Self-Cleaning
                            </span>{" "}
                            Litter Box
                        </h1>

                        {/* Subtitle */}
                        <p
                            className={cn(
                                "max-w-2xl mt-6",
                                "text-lg text-muted-foreground leading-relaxed",
                                "sm:text-xl md:text-2xl"
                            )}
                        >
                            Experience the ultimate comfort for your cat and effortless
                            maintenance for you. Odor-free, ultra-quiet, and 100% safe.
                        </p>

                        {/* Hero Buttons CTA */}
                        <HeroCTA />
                    </div>

                    {/* Product Image Showcase Container */}
                    <div
                        className={cn(
                            "relative",
                            "max-w-7xl mx-auto p-2 mt-16",
                            "border border-border/60 bg-background rounded-3xl shadow-2xl shadow-foreground/5 dark:shadow-none",
                            "md:mt-24"
                        )}
                    >
                        <div
                            className={cn(
                                "overflow-hidden",
                                "bg-secondary/10 rounded-2xl"
                            )}
                        >
                            <picture className="w-full block">
                                {/* Thiết bị >= 768px (md) sẽ load ảnh nằm ngang này */}
                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/images/neakasa_m1_pc.webp"
                                    width="1200"
                                    height="675"
                                />
                                {/* Thiết bị < 768px (mặc định) sẽ chỉ tải ảnh dọc này để tối ưu dung lượng */}
                                <img
                                    src="/images/neakasa_m1_mobile.webp"
                                    alt="Neakasa M1 Open-Top Self-Cleaning Cat Litter Box Showcase"
                                    width="375"
                                    height="500"
                                    loading="eager"
                                    fetchPriority="high"
                                    className={cn(
                                        "w-full h-auto object-cover object-center bg-transparent",
                                        "hover:scale-[1.01] transition-transform duration-700"
                                    )}
                                />
                            </picture>
                        </div>
                    </div>
                </div>

                {/* Decorative Subtle Background Glow */}
                <div
                    className={cn(
                        "absolute left-1/2 -z-10",
                        "w-[36rem] aspect-[1155/678] -translate-x-1/2",
                        "transform-gpu overflow-hidden blur-3xl",
                        "top-[calc(100%-13rem)]",
                        "sm:w-[72rem] sm:top-[calc(100%-30rem)]"
                    )}
                    aria-hidden="true"
                >
                    <div
                        className={cn(
                            "relative -translate-x-1/2",
                            "w-[36rem] aspect-[1155/678]",
                            "bg-gradient-to-tr from-primary/20 to-secondary",
                            "opacity-30",
                            "left-[calc(50%+3rem)]",
                            "sm:w-[72rem] sm:left-[calc(50%+36rem)]"
                        )}
                    />
                </div>
            </section>
        </>
    )
}

export default LandingPageHero