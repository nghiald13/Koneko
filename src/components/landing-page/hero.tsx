"use client"

import { cn } from "@/lib/utils"
import { HeroCTA } from "./hero-CTA"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const LandingPageHero = () => {
    const containerRef = useRef<HTMLElement>(null)

    // Theo dõi tiến trình cuộn trang của toàn bộ section Hero
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    // KỊCH BẢN PARALLAX 3D ĐỈNH CAO CHO ẢNH SHOWCASE:
    // Khi cuộn chuột, ảnh tự scale to ra (từ 0.9 lên 1.05) và đổi góc nghiêng 3D về phẳng
    const scaleImage = useTransform(scrollYProgress, [0, 0.5], [0.92, 1.05])
    const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0])
    const opacityGlow = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.6])

    // Cấu hình nhịp rơi cho từng từ trong tiêu đề (Staggered Animation)
    const titleWords = "Revolutionary Open-Top Self-Cleaning Litter Box".split(" ")

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background via-background to-secondary/20 perspective-1000"
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 1. TEXT TYPOGRAPHY SECTION */}
                <div className="flex flex-col items-center max-w-4xl mx-auto text-center relative z-10">

                    {/* Badge hiện lên mịn màng */}
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-semibold text-primary bg-primary/10 rounded-full ring-1 ring-inset ring-primary/20 backdrop-blur-md"
                    >
                        The Future of Feline Care
                    </motion.span>

                    {/* Tiêu đề bắn chữ từng từ siêu mượt (Text Split Effect) */}
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] flex flex-wrap justify-center gap-x-3 gap-y-1 overflow-hidden">
                        {titleWords.map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.06, // Đứa trước kéo đứa sau lên
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className={cn(
                                    word === "Self-Cleaning" || word === "Open-Top"
                                        ? "bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent"
                                        : ""
                                )}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>

                    {/* Subtitle trồi lên trễ hơn một nhịp */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl mt-8 text-lg text-muted-foreground leading-relaxed sm:text-xl md:text-2xl font-light"
                    >
                        Experience the ultimate comfort for your cat and effortless
                        maintenance for you. Odor-free, ultra-quiet, and 100% safe.
                    </motion.p>

                    {/* CTA Buttons xuất hiện sau cùng */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full flex justify-center"
                    >
                        <HeroCTA />
                    </motion.div>
                </div>

                {/* 2. AMAZING SHOWCASE CONTAINER (CINEMATIC SCALING EFFECT) */}
                <motion.div
                    style={{
                        scale: scaleImage,
                        rotateX: rotateX,
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative max-w-6xl mx-auto p-1.5 mt-20 border border-border/60 bg-background rounded-3xl shadow-2xl shadow-primary/5 dark:shadow-none transform-gpu origin-top"
                >
                    <div className="overflow-hidden bg-secondary/10 rounded-2xl">
                        <picture className="w-full block">
                            <source media="(min-width: 768px)" srcSet="/images/neakasa_m1_pc.webp" width="1200" height="675" />
                            <img
                                src="/images/neakasa_m1_mobile.webp"
                                alt="Neakasa M1 Open-Top Self-Cleaning Cat Litter Box Showcase"
                                width="375"
                                height="500"
                                loading="eager"
                                fetchPriority="high"
                                className="w-full h-auto object-cover object-center bg-transparent hover:scale-[1.02] transition-transform duration-1000 ease-out"
                            />
                        </picture>
                    </div>
                </motion.div>
            </div>

            {/* Đống đèn LED (Glow Background) chuyển động ảo diệu phía sau */}
            <motion.div
                style={{ opacity: opacityGlow }}
                className="absolute left-1/2 top-[60%] -z-10 w-[72rem] aspect-[1155/678] -translate-x-1/2 transform-gpu blur-3xl overflow-hidden"
                aria-hidden="true"
            >
                <div className="relative left-[calc(50%-20rem)] w-[60rem] aspect-[1155/678] bg-gradient-to-tr from-primary/30 to-emerald-400/20 opacity-40 animate-pulse duration-[8s]" />
            </motion.div>
        </section>
    )
}

export default LandingPageHero