'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { motion } from "framer-motion"

const ECOSYSTEM_INTRO = {
    tag: "Chapter III // Ultimate Autonomy",
    title: "Designed for Ultimate Convenience\nand Peace of Mind.",
    description: "Experience worry-free cat care with features built for 14-day autonomy, superior odor control, and the specific needs of multi-cat households."
}

const CORE_FEATURES = [
    { title: "Odor-Free Disposal", image: "/images/Pull-_-Wrap-Waste-Solution-oder-free-home.webp", subtitle: "3-Sec Pull & Wrap", desc: "The Neakasa M1 features a 'Pull and Wrap' Waste Management System, ensuring a seamless, odor-free, and contactless litter disposal process. A quick pull securely wraps the trash bag." },
    { title: "Massive Capacity", image: "/images/14-Days-Scoop-Free.webp", subtitle: "14 Days of Freedom", desc: "M1 boasts an ample capacity of 11.23L for the waste bin and 7.17L for the litter. You can confidently go on your travels, knowing your box handles the load for up to 2 weeks." },
    { title: "Inclusive Design", image: "/images/multi-cat-litter-box.webp", subtitle: "Multi-Cat Families", desc: "Perfect for multi-cat households! Accommodates felines ranging from 2.2 lbs to around 33 lbs. For pregnant cats and small kittens under 2.2 lbs, our thoughtful Kitten Mode ensures safe use." }
]

const ConvenientDesign = () => {
    return (
        <>
            {/* ECOSYSTEM INTRO HEADER (CHAPTER 3) - Cuộn tới tự động trồi lên mịn màng */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center mb-20 text-center pt-16 border-t border-border/50"
            >
                <h3 className="tracking-tight font-bold text-foreground mb-4 text-3xl sm:text-5xl whitespace-pre-line">
                    {ECOSYSTEM_INTRO.title}
                </h3>
                <p className="text-base font-light text-muted-foreground max-w-2xl leading-relaxed">
                    {ECOSYSTEM_INTRO.description}
                </p>
            </motion.div>

            {/* ECOSYSTEM CORE FEATURES CAROUSEL - Hiệu ứng các item bắn so le từ phải qua trái */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.15 } // Mỗi thẻ xuất hiện cách nhau 0.15 giây
                    }
                }}
                className="mb-40 w-full px-4 sm:px-0 relative"
            >
                {/* CHÚ THÍCH SWIPE (Chỉ hiển thị trên Mobile) */}
                <div className="flex items-center gap-1.5 sm:hidden px-1 opacity-60 mb-2">
                    <span className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
                        Swipe to see more
                    </span>
                    <span className="text-[10px] text-muted-foreground animate-pulse">→</span>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full relative group/carousel"
                >
                    <CarouselContent className="-ml-6">
                        {CORE_FEATURES.map((feature, idx) => (
                            <CarouselItem
                                key={idx}
                                className="pl-6 md:basis-1/2 lg:basis-1/3 snap-start"
                            >
                                {/* Mỗi item là một khối motion.div nhận hiệu ứng trượt từ phải sang */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: 40 },
                                        show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    className="space-y-5 group"
                                >
                                    {/* KHUNG ẢNH MINH HỌA */}
                                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border/60 bg-secondary/20 shadow-xs transition-transform duration-500 group-hover:scale-[1.02] transform-gpu">
                                        <Image
                                            src={feature.image || `/images/ecosystem_feature_${idx + 1}.webp`}
                                            alt={feature.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            loading="lazy"
                                            className="object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* KHỐI CHỮ PHẲNG DƯỚI ẢNH */}
                                    <div className="space-y-2 px-1">
                                        <span className="text-[10px] font-mono tracking-widest text-primary uppercase block">
                                            {feature.subtitle}
                                        </span>
                                        <h4 className="tracking-tight font-bold text-foreground text-lg sm:text-xl">
                                            {feature.title}
                                        </h4>
                                        <p className="text-xs font-light text-muted-foreground leading-relaxed pt-1">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* NÚT ĐIỀU HƯỚNG TỐI GIẢN */}
                    <div className="hidden sm:block">
                        <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover/carousel:opacity-100 transition-opacity bg-background border-border/60 text-muted-foreground hover:text-foreground" />
                        <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover/carousel:opacity-100 transition-opacity bg-background border-border/60 text-muted-foreground hover:text-foreground" />
                    </div>
                </Carousel>
            </motion.div>
        </>
    )
}

export default ConvenientDesign