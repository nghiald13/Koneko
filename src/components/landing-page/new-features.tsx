'use client'

import { useState } from "react"
import Image from "next/image"
import { Shield, RotateCw, Wind, Droplets } from "lucide-react"
import { cn } from "@/lib/utils"

const LandingPageNewFeatures = () => {
    // Quản lý ID tính năng đang tương tác (hỗ trợ cả hover trên PC và tap trên Mobile)
    const [activeFeature, setActiveFeature] = useState<number | null>(null)

    const features = [
        {
            id: 1,
            icon: Shield,
            title: "360° Smart Safety Guard",
            desc: "Upgraded with 6 sets of sweeping infrared sensors, the M1 Plus detects your cat's movement in real time—pausing instantly.",
            imageSrc: "/images/m1plus-360.webp",
            glowClass: "shadow-[0_0_60px_rgba(59,130,246,0.25)] border-blue-500/40 dark:shadow-none",
            shortTitle: "Safety Guard",
        },
        {
            id: 2,
            icon: RotateCw,
            title: "Pinch-Free Rotation System",
            desc: "The controlled rotation system limits gear movement within a safe angle—effectively preventing pinching.",
            imageSrc: "/images/m1plus-rotation.webp",
            glowClass: "shadow-[0_0_60px_rgba(168,85,247,0.25)] border-purple-500/40 dark:shadow-none",
            shortTitle: "Rotation",
        },
        {
            id: 3,
            icon: Wind,
            title: "Advanced Odor-Lock Technology",
            desc: "Features a brand-new built-in sealing strip that effectively locks in odors, keeping your home fresh.",
            imageSrc: "/images/m1plus-odorlock.webp",
            glowClass: "shadow-[0_0_60px_rgba(34,197,94,0.25)] border-green-500/40 dark:shadow-none",
            shortTitle: "Odor-Lock",
        },
        {
            id: 4,
            icon: Droplets,
            title: "95% Leak-Prevention Layer",
            desc: "Introduces a custom-fit sealing layer between the chamber and silicone base, preventing 95% of urine leaks.",
            imageSrc: "/images/m1plus-leakprevent.webp",
            glowClass: "shadow-[0_0_60px_rgba(239,68,68,0.25)] border-red-500/40 dark:shadow-none",
            shortTitle: "Leak-Proof",
        },
    ]

    // Xác định ảnh hiển thị hiện tại (nếu không tương tác thì dùng ảnh tổng quan)
    const currentImage = activeFeature !== null
        ? features.find(f => f.id === activeFeature)?.imageSrc
        : "/images/neakasa_m1_upgrades.jfif"

    // Hàm xử lý tap/click thông minh cho thiết bị di động
    const handleFeatureSelect = (id: number) => {
        if (activeFeature === id) {
            setActiveFeature(null) // Nhấn lại lần nữa để tắt, quay về ảnh tổng quan
        } else {
            setActiveFeature(id)
        }
    }

    return (
        <section
            className={cn(
                "relative overflow-hidden",
                "py-16 sm:py-24 md:py-36",
                "bg-background"
            )}
        >
            <div
                className={cn(
                    "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                )}
            >
                {/* Tiêu đề Cinematic */}
                <div
                    className={cn(
                        "flex flex-col items-center",
                        "max-w-3xl mx-auto mb-12 sm:mb-20 md:mb-32 text-center"
                    )}
                >
                    <h2
                        className={cn(
                            "text-3xl font-extrabold tracking-tight text-foreground",
                            "sm:text-4xl md:text-5xl lg:text-6xl"
                        )}
                    >
                        {" "}
                        <span
                            className={cn(
                                "bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
                            )}
                        >
                            All-New Upgrades in the Neakasa M1 Plus
                        </span>
                    </h2>
                </div>

                {/* Khung cấu trúc Grid thích ứng hoàn toàn */}
                <div
                    className={cn(
                        "flex flex-col items-center justify-between gap-10 relative",
                        "md:flex-row md:gap-0"
                    )}
                >
                    {/* TRỌNG TÂM TRUNG TÂM: Nhảy lên đầu trang trên Mobile bằng 'order-1' */}
                    <div
                        className={cn(
                            "relative flex items-center justify-center z-10 order-1",
                            "w-full max-w-[280px] aspect-square",
                            "sm:max-w-[360px]",
                            "md:w-[35%] md:max-w-none md:order-2"
                        )}
                    >
                        {/* Vòng quét laser chìm đồng tâm (Chỉ chạy từ màn hình desktop để tối ưu CPU cho mobile) */}
                        <div
                            className={cn(
                                "hidden absolute inset-0 rounded-full border border-dashed transition-all duration-700 ease-out",
                                "md:block",
                                activeFeature !== null ? "scale-105 opacity-100 border-primary/20 animate-[spin_60s_linear_infinite]" : "scale-95 opacity-0 border-border"
                            )}
                        />

                        {/* Container Kính mờ chứa ảnh linh hoạt */}
                        <div
                            className={cn(
                                "relative flex items-center justify-center overflow-hidden",
                                "w-full h-full p-4 rounded-[32px] border bg-gradient-to-b from-card to-card/40 backdrop-blur-sm",
                                "sm:p-6 sm:rounded-[48px]",
                                "transition-all duration-700 ease-out",
                                activeFeature !== null ? features.find(f => f.id === activeFeature)?.glowClass : "border-border/60 shadow-2xl shadow-foreground/5 dark:shadow-none"
                            )}
                        >
                            {/* Vùng Render Ảnh động với hiệu ứng Crossfade */}
                            <div
                                key={currentImage}
                                className={cn(
                                    "relative w-full h-full animate-in fade-in zoom-in-95 duration-500 ease-out"
                                )}
                            >
                                <Image
                                    src={currentImage || ""}
                                    alt="Neakasa M1 Plus Core Technology Interactive Presentation"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 85vw, 35vw"
                                    className={cn(
                                        "object-contain object-center p-2",
                                        "filter drop-shadow-2xl"
                                    )}
                                />
                            </div>

                            {/* Lớp nhãn trạng thái quét kỹ thuật ở đáy máy khi active */}
                            <div
                                className={cn(
                                    "absolute bottom-4 left-1/2 z-20 -translate-x-1/2 px-3 py-1",
                                    "bg-background/80 border border-border/80 rounded-full text-[9px] font-black tracking-widest text-muted-foreground/80 backdrop-blur-md select-none",
                                    "sm:bottom-6 sm:text-[10px] sm:px-4 sm:py-1.5",
                                    "transition-all duration-500",
                                    activeFeature !== null ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                                )}
                            >
                                {activeFeature === 1 && "360° Safe Guard"}
                                {activeFeature === 2 && "Pinch Free Rotation"}
                                {activeFeature === 3 && "Advanced Odor Lock"}
                                {activeFeature === 4 && "95% Leak-Prevention Layer"}
                            </div>
                        </div>
                    </div>

                    {/* THANH ĐIỀU HƯỚNG TABS CHO MOBILE: Ẩn trên desktop, cuộn mượt mà trên Mobile/Tablet */}
                    <div
                        className={cn(
                            "flex items-center gap-2 overflow-x-auto w-full py-2 px-1 order-2 snap-x snap-mandatory scrollbar-none",
                            "md:hidden"
                        )}
                    >
                        {features.map((item) => {
                            const Icon = item.icon
                            const isFocused = activeFeature === item.id
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleFeatureSelect(item.id)}
                                    className={cn(
                                        "flex items-center gap-2 flex-shrink-0 snap-center outline-none touch-manipulation",
                                        "px-4 py-2.5 rounded-full border text-xs font-semibold tracking-tight transition-all duration-300",
                                        isFocused
                                            ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/15 scale-[1.02]"
                                            : "bg-card text-muted-foreground border-border"
                                    )}
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                    {item.shortTitle}
                                </button>
                            )
                        })}
                    </div>

                    {/* VÙNG HIỂN THỊ TEXT NỘI DUNG MOBILE: Đồng bộ cập nhật theo tab đang chạm */}
                    <div className={cn("block w-full text-center px-2 order-3 min-h-[90px] md:hidden")}>
                        {activeFeature !== null ? (
                            <div className={cn("animate-in fade-in slide-in-from-bottom-2 duration-300")}>
                                <h4 className="text-lg font-bold text-foreground">
                                    {features.find(f => f.id === activeFeature)?.title}
                                </h4>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {features.find(f => f.id === activeFeature)?.desc}
                                </p>
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground italic pt-4">
                                Choose a feature above to preview what's new in Nekasa M1 PLus
                            </p>
                        )}
                    </div>

                    {/* CỘT TRÁI TRÊN DESKTOP: Tự động ẩn trên mobile, hiện từ mốc md: */}
                    <div
                        className={cn(
                            "hidden flex-col space-y-16 z-20 order-1",
                            "md:flex md:w-[30%] md:text-right"
                        )}
                    >
                        {features.slice(0, 2).map((item) => {
                            const Icon = item.icon
                            const isFocused = activeFeature === item.id
                            return (
                                <div
                                    key={item.id}
                                    onMouseEnter={() => setActiveFeature(item.id)}
                                    onMouseLeave={() => setActiveFeature(null)}
                                    onClick={() => handleFeatureSelect(item.id)}
                                    className={cn(
                                        "relative select-none cursor-pointer outline-none touch-manipulation",
                                        "transition-all duration-500",
                                        activeFeature !== null && !isFocused ? "opacity-15 blur-[1px]" : "opacity-100"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "inline-flex items-center justify-center",
                                            "w-12 h-12 mb-4 rounded-2xl border bg-card",
                                            isFocused ? "text-primary border-primary bg-primary/5 shadow-lg shadow-primary/5" : "text-muted-foreground border-border"
                                        )}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight text-foreground">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>

                    {/* CỘT PHẢI TRÊN DESKTOP: Tự động ẩn trên mobile, hiện từ mốc md: */}
                    <div
                        className={cn(
                            "hidden flex-col space-y-16 z-20 order-3",
                            "md:flex md:w-[30%]"
                        )}
                    >
                        {features.slice(2, 4).map((item) => {
                            const Icon = item.icon
                            const isFocused = activeFeature === item.id
                            return (
                                <div
                                    key={item.id}
                                    onMouseEnter={() => setActiveFeature(item.id)}
                                    onMouseLeave={() => setActiveFeature(null)}
                                    onClick={() => handleFeatureSelect(item.id)}
                                    className={cn(
                                        "relative select-none cursor-pointer outline-none touch-manipulation",
                                        "transition-all duration-500",
                                        activeFeature !== null && !isFocused ? "opacity-15 blur-[1px]" : "opacity-100"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "inline-flex items-center justify-center",
                                            "w-12 h-12 mb-4 rounded-2xl border bg-card",
                                            isFocused ? "text-primary border-primary bg-primary/5 shadow-lg shadow-primary/5" : "text-muted-foreground border-border"
                                        )}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight text-foreground">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default LandingPageNewFeatures