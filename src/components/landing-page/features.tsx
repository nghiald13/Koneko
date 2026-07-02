'use client'

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

// Toàn bộ dữ liệu được tập trung tại đây để dễ dàng bảo trì hoặc chuyển đổi thành API Props
const CHAPTER_DATA = [
    {
        id: "chapter-1",
        title: "Designed for the\nGentle Ascent.",
        description: "With an entry height of just 13.86'', the Neakasa M1 Plus offers an effortless step-in. From small kittens weighing 2.2 lbs to majestic breeds up to 33 lbs, every entry is natural, safe, and dignified.",
        image: "/images/neakasa_m1_entry_story.webp",
        alt: "The easy access entry height story",
        highlights: [
            { label: "Access Height", value: "13.86'' Easy Access" },
            { label: "Inclusive Range", value: "2.2 - 33 lbs Limit" }
        ]
    },
    {
        id: "chapter-2",
        title: "Silence is the\nUltimate Luxury.",
        description: "Operating at a whisper-quiet level of ≤ 50dB, the device blends seamlessly into your sanctuary. The massive 11.23L waste bin provides up to 14 days of absolute autonomy, granting you the rarest luxury: time.",
        image: "/images/neakasa_m1_waste_story.webp",
        alt: "14 days of freedom and whisper quiet operation",
        highlights: [
            { label: "Acoustic Aura", value: "≤ 50dB Whisper Quiet" },
            { label: "Storage Legacy", value: "11.23L (Up to 14 Days)" }
        ]
    }
]

const CORE_FEATURES = [
    { title: "Smart Command", desc: "Experience absolute control with the dedicated Android & iOS application, tracking health metrics and automated habits in real time." },
    { title: "Noble Materials", desc: "A structural masterpiece sculpted from premium PP, ABS, and POM polymers, promising high-end architectural resilience and texture." },
    { title: "Absolute Stability", desc: "An engineered chassis weighing 22.81 lbs (10.35kg) ensuring optimal grounding, posture stability, and silent operational load." }
]

const SPEC_INDEX_DATA = [
    { label: "Entry Height", value: "13.86'' (Easy Access)" },
    { label: "Cat Weight Limit", value: "2.2 lbs - 33 lbs" },
    { label: "Waste Box Capacity", value: "11.23L (Up to 14 Days)" },
    { label: "Litter Capacity", value: "7.17L" },
    { label: "Operation Noise", value: "≤ 50dB (Whisper Quiet)" },
    { label: "Machine Weight", value: "22.81 lbs (10.35kg)" },
    { label: "Smart Control", value: "Android & iOS App" },
    { label: "Main Material", value: "PP, ABS, POM" }
]

export default function LandingPageFeatures() {
    return (
        <section className={cn("relative overflow-hidden py-24 sm:py-32 md:py-48 bg-background")}>
            <div className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>

                {/* PROLOGUE */}
                <div className={cn("flex flex-col items-center mb-32 text-center")}>
                    <Badge variant="outline" className={cn("px-4 py-1 mb-8 tracking-[0.2em] uppercase font-light border-primary/30 text-primary rounded-full")}>
                        The Chronicle of Refinement
                    </Badge>
                    <h2 className={cn("tracking-tight font-extrabold text-foreground max-w-4xl leading-[1.1] text-5xl sm:text-6xl md:text-7xl lg:text-8xl")}>
                        More than data. <br />
                        <span className="italic font-light text-muted-foreground">A lifestyle, decoded.</span>
                    </h2>
                </div>

                {/* CHAPTERS GENERATOR */}
                {CHAPTER_DATA.map((chapter, index) => {
                    const isEven = index % 2 === 0
                    return (
                        <div
                            key={chapter.id}
                            className={cn("grid grid-cols-1 gap-16 mb-40 items-center lg:grid-cols-12")}
                        >
                            <div className={cn("lg:col-span-6", isEven ? "order-2 lg:order-1" : "lg:pl-16 order-2")}>
                                <h3 className={cn("tracking-tight font-bold text-foreground mb-8 text-4xl sm:text-5xl whitespace-pre-line")}>
                                    {chapter.title}
                                </h3>
                                <p className={cn("text-lg font-light leading-relaxed text-muted-foreground mb-10 max-w-lg")}>
                                    {chapter.description}
                                </p>
                                <div className="flex gap-12 border-t border-border/60 pt-8">
                                    {chapter.highlights.map((item, hIdx) => (
                                        <div key={hIdx}>
                                            <span className="block text-[10px] font-medium tracking-wider text-muted-foreground uppercase mb-2">
                                                {item.label}
                                            </span>
                                            <span className="text-xl font-bold text-foreground">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={cn("lg:col-span-6", isEven ? "order-1 lg:order-2" : "order-1")}>
                                <div className={cn("relative aspect-[4/3] rounded-[40px] overflow-hidden bg-secondary/20 shadow-2xl")}>
                                    <Image
                                        src={chapter.image}
                                        alt={chapter.alt}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        loading="lazy"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* CHAPTER 3: THE INTELLIGENT SOUL */}
                <div className={cn("relative p-12 sm:p-20 rounded-[60px] bg-secondary/10 border border-border/50")}>
                    <div className={cn("max-w-4xl mx-auto text-center")}>
                        <h3 className={cn("tracking-tight font-bold text-foreground mb-12 text-4xl sm:text-6xl")}>
                            Sophistication <br /> in every molecule.
                        </h3>
                        <div className={cn("grid grid-cols-1 gap-12 text-left md:grid-cols-3")}>
                            {CORE_FEATURES.map((feature, idx) => (
                                <div key={idx} className="space-y-4">
                                    <span className="text-primary font-semibold text-xl block">
                                        {feature.title}
                                    </span>
                                    <p className="text-sm font-light text-muted-foreground leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* EPILOGUE: SPEC INDEX */}
                <div className={cn("mt-32 pt-20 border-t border-border/60")}>
                    <div className={cn("grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4")}>
                        {SPEC_INDEX_DATA.map((spec, i) => (
                            <div key={i} className="group cursor-default">
                                <span className="block text-[10px] font-medium text-muted-foreground uppercase tracking-[0.2em] mb-3 group-hover:text-primary transition-colors">
                                    {spec.label}
                                </span>
                                <span className="text-lg font-bold text-foreground">
                                    {spec.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}