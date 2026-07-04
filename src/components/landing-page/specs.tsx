'use client'

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"

// Giữ nguyên bộ dữ liệu tối giản của sếp
const SPEC_CATEGORIES = [
    {
        id: "cat-1",
        title: "Spatial Dimensions",
        image: "/images/design-specs.webp",
        specs: [
            { label: "Waste Bin Capacity", value: "11.23L", note: "Up to 14 days of freedom" },
            { label: "Litter Capacity", value: "7.17L", note: "Optimized cycle efficiency" },
            { label: "Entry Height", value: "13.86''", note: "Easy step-in profile" }
        ]
    },
    {
        id: "cat-2",
        title: "Operational Mechanics",
        image: "/images/multi-breeds.webp",
        specs: [
            { label: "Operation Noise", value: "≤ 50dB", note: "Whisper-quiet aura" },
            { label: "Cat Weight Limit", value: "2.2 - 33 lbs", note: "Kitten to heavy breed safety" },
            { label: "Machine Weight", value: "22.81 lbs", note: "10.35kg anti-tip chassis" }
        ]
    },
    {
        id: "cat-3",
        title: "System Ecosystem",
        image: "/images/smart-control.webp",
        specs: [
            { label: "Smart Control", value: "App Sync", note: "iOS & Android dedicated app" },
            { label: "Main Material", value: "PP, ABS, POM", note: "Architectural grade polymers" }
        ]
    }
]

export default function SplitKineticSpecifications() {
    const [activeGroup, setActiveGroup] = useState(0)

    return (
        <section id="specs" className="relative w-full bg-background border-t border-border/40">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* CỘT TRÁI: STICKY DISPLAY (Cố định góc nhìn khi cuộn trên PC) */}
                    <div className="lg:col-span-7 py-12 lg:py-24 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="tracking-tight font-extrabold text-foreground leading-[1.1] text-4xl sm:text-5xl"
                        >
                            Specifications
                        </motion.h2>

                        {/* Khung hiển thị hình ảnh tương tác động theo nhóm trạng thái */}
                        <div className="hidden lg:block relative aspect-[4/3] rounded-[32px] overflow-hidden bg-secondary/10 border border-border/40 shadow-inner group transform-gpu">
                            {SPEC_CATEGORIES.map((cat, idx) => (
                                <div
                                    key={cat.id}
                                    className={cn(
                                        "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu",
                                        activeGroup === idx ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
                                    )}
                                >
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                        priority={idx === 0}
                                        className="object-scale-down transition-transform duration-700 ease-out group-hover:scale-102"
                                    />
                                </div>
                            ))}

                            {/* Lưới grid kỹ thuật (Blueprint Grid Decorator) */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] z-15 pointer-events-none" />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-6 text-sm text-muted-foreground font-light leading-relaxed max-w-sm"
                        >
                            An uncompromised breakdown of mechanical parameters, capacity metrics, and architectural composites of Neakasa M1.
                        </motion.p>
                    </div>

                    {/* CỘT PHẢI: SCROLLABLE SPEC STREAM */}
                    <div className="lg:col-span-5 py-12 lg:py-24 flex flex-col gap-24">
                        {SPEC_CATEGORIES.map((category, groupIdx) => (
                            <SpecGroupObserver
                                key={category.id}
                                category={category}
                                groupIdx={groupIdx}
                                activeGroup={activeGroup}
                                setActiveGroup={setActiveGroup}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

// Sub-component phụ trách giám sát vùng nhìn cuộn tự động kích hoạt Tab
interface SpecGroupProps {
    category: typeof SPEC_CATEGORIES[0]
    groupIdx: number
    activeGroup: number
    setActiveGroup: (idx: number) => void
}

const SpecGroupObserver = ({ category, groupIdx, activeGroup, setActiveGroup }: SpecGroupProps) => {
    const ref = useRef<HTMLDivElement>(null)

    // Kích hoạt khi block chiếm từ 40% diện tích màn hình trở lên
    const isInView = useInView(ref, {
        margin: "-40% 0px -40% 0px"
    })

    useEffect(() => {
        if (isInView) {
            setActiveGroup(groupIdx)
        }
    }, [isInView, groupIdx, setActiveGroup])

    const isActive = activeGroup === groupIdx

    return (
        <div
            ref={ref}
            onMouseEnter={() => setActiveGroup(groupIdx)}
            className={cn(
                "transition-all duration-500 ease-out transform-gpu",
                isActive ? "opacity-100 translate-x-0" : "lg:opacity-25 lg:-translate-x-1"
            )}
        >
            {/* Tiêu đề nhóm */}
            <div className="flex items-center gap-4 mb-8">
                <h3 className="text-sm font-bold tracking-wider text-foreground uppercase">
                    {category.title}
                </h3>
                <div className={cn(
                    "h-[1px] flex-1 transition-all duration-500",
                    isActive ? "bg-primary/50" : "bg-border/60"
                )} />
            </div>

            {/* Danh sách thông số */}
            <div className="flex flex-col">
                {category.specs.map((spec, specIdx) => (
                    <motion.div
                        key={specIdx}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: specIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row sm:items-baseline justify-between py-6 border-b border-border/40 last:border-0"
                    >
                        <div className="space-y-1">
                            <span className="text-base font-medium text-foreground block">
                                {spec.label}
                            </span>
                            <span className="text-xs font-light text-muted-foreground block">
                                {spec.note}
                            </span>
                        </div>
                        <div className="mt-2 sm:mt-0">
                            <span className={cn(
                                "text-xl sm:text-2xl font-extrabold tracking-tight block sm:text-right transition-colors duration-300",
                                isActive ? "text-primary" : "text-foreground"
                            )}>
                                {spec.value}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}