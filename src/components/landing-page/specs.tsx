'use client'

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

// Quy hoạch lại dữ liệu: Tách biệt nội dung và tích hợp thêm Asset hình ảnh tương ứng
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
        <section id="specs" className={cn(
            "relative w-full bg-background border-t border-border/40",
        )}>
            <div className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
                <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16")}>

                    {/* CỘT TRÁI: STICKY DISPLAY (Cố định góc nhìn) */}
                    <div className={cn("lg:col-span-7 py-12 lg:py-24 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between")}>
                        <h2 className={cn("tracking-tight font-extrabold text-foreground leading-[1.1] text-4xl sm:text-5xl")}>
                            Specifications
                        </h2>

                        {/* Khung hiển thị hình ảnh tương tác động theo nhóm trạng thái */}
                        <div className={cn("hidden lg:block relative aspect-[4/3] rounded-[32px] overflow-hidden bg-secondary/10 border border-border/40 shadow-inner group")}>

                            {SPEC_CATEGORIES.map((cat, idx) => (
                                <div
                                    key={cat.id}
                                    className={cn(
                                        "absolute inset-0 transition-opacity duration-500 ease-in-out",
                                        activeGroup === idx ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
                                    )}
                                >
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                        priority={idx === 0}
                                        className="object-scale-down transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>
                            ))}

                            {/* Lưới grid kỹ thuật (Blueprint Grid Decorator) */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] z-15 pointer-events-none" />
                        </div>
                        <p className={cn("mt-6 text-sm text-muted-foreground font-light leading-relaxed max-w-sm")}>
                            An uncompromised breakdown of mechanical parameters, capacity metrics, and architectural composites of Neakasa M1 Plus.
                        </p>
                    </div>

                    {/* CỘT PHẢI: SCROLLABLE SPEC STREAM */}
                    <div className={cn("lg:col-span-5 py-12 lg:py-24 flex flex-col gap-20")}>
                        {SPEC_CATEGORIES.map((category, groupIdx) => (
                            <div
                                key={category.id}
                                onMouseEnter={() => setActiveGroup(groupIdx)}
                                className={cn(
                                    "transition-all duration-300",
                                    activeGroup === groupIdx ? "opacity-100 translate-x-0" : "lg:opacity-30 lg:-translate-x-1"
                                )}
                            >
                                {/* Tiêu đề nhóm */}
                                <div className="flex items-center gap-4 mb-8">
                                    <h3 className="text-sm font-bold tracking-wider text-foreground uppercase">
                                        {category.title}
                                    </h3>
                                    <div className="h-[1px] flex-1 bg-border/60" />
                                </div>

                                {/* Danh sách thông số */}
                                <div className="flex flex-col">
                                    {category.specs.map((spec, specIdx) => (
                                        <div
                                            key={specIdx}
                                            className={cn(
                                                "flex flex-col sm:flex-row sm:items-baseline justify-between py-6",
                                                "border-b border-border/40 last:border-0 transition-colors duration-200"
                                            )}
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
                                                <span className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight block sm:text-right text-primary">
                                                    {spec.value}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}