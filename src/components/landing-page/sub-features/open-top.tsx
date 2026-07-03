import { cn } from "@/lib/utils"
import Image from "next/image"

const CHAPTER_DATA = [
    {
        id: "chapter-1",
        tag: "Chapter I // Clean & Comfort",
        title: "Hands-Free Living:\nFully Automated Gradual Cleaning",
        description: "The Neakasa M1 features a gradual self-cleaning mode that ensures thorough cleanliness, ensuring your kitty always has a fresh, sanitary place to go. Say goodbye to the traditional, time-consuming task of scooping litter.",
        image: "/images/no-more-scoop.webp",
        alt: "Fully automated gradual cleaning technology of Neakasa M1",
        highlights: [
            { label: "Operation Type", value: "Gradual Cleaning" },
            { label: "Daily Task", value: "0% Scooping Needed" }
        ]
    },
    {
        id: "chapter-2",
        tag: "Chapter II // Architectural Space",
        title: "Open-Top Comfort:\nStress-Free for Large Cats",
        description: "Unlike other litter boxes with cramped entrances, the Neakasa M1 features a spacious open-top design that cats naturally prefer. It provides a spacious and welcoming environment, even for large cats like Maine Coons and Ragdolls, allowing for a safe and smooth transition to an automated litter box.",
        image: "/images/open_top_box_1.webp",
        alt: "Spacious open-top design friendly for large breeds",
        highlights: [
            { label: "Design Archetype", value: "Spacious Open-Top" },
            { label: "Breed Compatibility", value: "Maine Coons & Ragdolls Approved" }
        ]
    }
]

const SAFETY_SECTION = {
    title: "Why Open-Top is the\nHealthier Choice.",
    description: "Prioritize your cat's safety and well-being with an open-air structure that completely eliminates trapping risks while respecting their natural instincts."
}

const SAFETY_REASONS = [
    { title: "No Trapping Risks", desc: "The innovative open-top structure keeps the entrance open 24/7, preventing any chance of getting stuck." },
    { title: "Up to around 33 lbs", desc: "Provides a massive, stress-free space for felines of all sizes, especially comfortable for large breeds." },
    { title: "Follows Instincts", desc: "The open-air design respects their natural preferences, making the transition to automatic cleaning effortless." },
    { title: "Easy Pouring", desc: "Ditch the scoop. Simply pour fresh litter directly into the spacious top opening with zero mess." }
]

const OpenTop = () => {

    return (
        <>
            {/* CHAPTERS GENERATOR (CHAPTER 1 & 2) */}
            {CHAPTER_DATA.map((chapter, index) => {
                const isEven = index % 2 === 0
                return (
                    <div
                        key={chapter.id}
                        className="grid grid-cols-1 gap-16 mb-40 items-center lg:grid-cols-12"
                    >
                        <div className={cn("lg:col-span-6", isEven ? "order-2 lg:order-1" : "lg:pl-16 order-2")}>
                            <h3 className="tracking-tight font-bold text-foreground mb-6 text-3xl sm:text-4xl whitespace-pre-line">
                                {chapter.title}
                            </h3>
                            <p className="text-base font-light leading-relaxed text-muted-foreground mb-8 max-w-lg">
                                {chapter.description}
                            </p>
                            <div className="flex gap-12 border-t border-border/60 pt-6">
                                {chapter.highlights.map((item, hIdx) => (
                                    <div key={hIdx}>
                                        <span className="block text-[10px] font-medium tracking-wider text-muted-foreground uppercase mb-1">
                                            {item.label}
                                        </span>
                                        <span className="text-lg font-bold text-foreground">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={cn("lg:col-span-6", isEven ? "order-1 lg:order-2" : "order-1")}>
                            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-secondary/20 shadow-xl border border-border/40">
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

            {/* WHY OPEN-TOP: PURE MINIMALIST LAYOUT */}
            <div className="mb-40 pt-20 border-t border-border/40 space-y-16">

                {/* HÀNG TRÊN: TIÊU ĐỀ & HÌNH ẢNH ĐỐI XỨNG PHẲNG */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Khối chữ đơn giản bên trái */}
                    <div className="lg:col-span-5 space-y-4">
                        <h3 className="tracking-tight font-bold text-foreground text-3xl sm:text-4xl leading-tight whitespace-pre-line">
                            {SAFETY_SECTION.title}
                        </h3>
                        <p className="text-sm font-light leading-relaxed text-muted-foreground max-w-md">
                            {SAFETY_SECTION.description}
                        </p>
                    </div>

                    {/* Hình ảnh phẳng, gọn gàng bên phải */}
                    <div className="lg:col-span-7">
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-secondary/20 shadow-xl border border-border/40">
                            <Image
                                src="/images/open_top_litter_box_1.webp"
                                alt="Neakasa M1 Open-top safety structure"
                                fill
                                sizes="(max-width: 1024px) 100vw, 55vw"
                                loading="lazy"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* HÀNG DƯỚI: DANH SÁCH CÁC THÔNG SỐ ĐƯỢC CHIA ĐỀU TĂM TẮP */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border/20">
                    {SAFETY_REASONS.map((reason, idx) => (
                        <div key={idx} className="space-y-2">
                            {/* Tiêu đề thẻ dạng text phẳng, không bọc box màu mè */}
                            <h4 className="text-xs font-bold tracking-wider text-foreground uppercase flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block" />
                                {reason.title}
                            </h4>
                            <p className="text-xs font-light text-muted-foreground leading-relaxed pl-3.5">
                                {reason.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default OpenTop