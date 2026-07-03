'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { useState } from "react"

const EPILOGUE_SECTION = {
    title: "Crafted for a Quieter,\nCleaner Home.",
    description: "Maintain a serene living space with whisper-quiet operation and thoughtful design details that minimize mess and simplify deep cleaning."
}

const TRINITY_DATA = [
    {
        index: "01",
        tag: "SILENCE",
        title: "Whisper-Quiet Operation for Peaceful Sleep",
        desc: "The Neakasa M1 operates with whisper-quiet performance. Enjoy undisturbed sleep and a serene home, even when your kitty visits late at night.",
        image: "/images/Whisper-Quiet.webp"
    },
    {
        index: "02",
        tag: "HYGIENE",
        title: "Detachable Design for Easy Cleanup",
        desc: "Our fully detachable design makes deep cleaning the Neakasa M1 a breeze. Easily wash away odors for a fresh, hygienic home.",
        image: "/images/detachable-design.webp"
    },
    {
        index: "03",
        tag: "NEATNESS",
        title: "Anti-Tracking Mat for Cleaner Spaces",
        desc: "Exiting onto the soft anti-tracking mat, your cat leaves no granules behind. This effectively reduces litter tracking to keep your floors spotless.",
        image: "/images/Cleaner-Spaces.webp"
    }
]

const SmartOperation = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <>
            {/* EPILOGUE ARCHITECTURAL FRAME: THE INTERACTIVE SPLITTER */}
            <div className="pt-20 border-t border-border/60 max-w-5xl mx-auto space-y-12 px-4 sm:px-0">

                {/* TIÊU ĐỀ TRUNG TÂM */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-primary uppercase block">
          // System Epilogue
                    </span>
                    <h3 className="tracking-tight font-bold text-foreground text-2xl sm:text-4xl whitespace-pre-line">
                        {EPILOGUE_SECTION.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-muted-foreground leading-relaxed">
                        {EPILOGUE_SECTION.description}
                    </p>
                </div>

                {/* KHỐI TƯƠNG TÁC ĐỘT PHÁ */}
                <div className="space-y-8">

                    {/* LAYOUT MOBILE (Dưới md): Tích hợp Shadcn Accordion */}
                    <div className="md:hidden">
                        <Accordion
                            type="single"
                            collapsible
                            defaultValue="item-0"
                            onValueChange={(value) => {
                                // Đồng bộ hóa state nếu sếp muốn giữ liên kết giữa mobile và PC khi resize màn hình
                                if (value) setActiveTab(parseInt(value.split("-")[1]))
                            }}
                            className="w-full space-y-3"
                        >
                            {TRINITY_DATA.map((item, idx) => (
                                <AccordionItem
                                    key={idx}
                                    value={`item-${idx}`}
                                    className="border border-border/60 rounded-2xl px-5 bg-background data-[state=open]:shadow-2xs transition-all duration-300 overflow-hidden"
                                >
                                    <AccordionTrigger className="hover:no-underline py-4 text-left">
                                        <div className="space-y-1 pr-4">
                                            <span className="text-[9px] font-mono text-primary/80 block">
                                                [{item.index}] {item.tag}
                                            </span>
                                            <h4 className="tracking-tight font-bold text-foreground text-sm leading-snug">
                                                {item.title}
                                            </h4>
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent className="pb-5 pt-1 space-y-4">
                                        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border/60 bg-secondary/10 shadow-3xs">
                                            <Image src={item.image} alt={item.title} fill sizes="100vw" loading="lazy" className="object-cover" />
                                        </div>
                                        <p className="text-xs font-light text-muted-foreground leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* LAYOUT PC (Từ md trở lên): Giữ nguyên bộ thấu kính co giãn hàng ngang */}
                    <div className="hidden md:block space-y-8">
                        {/* Thanh điều hướng chữ mỏng */}
                        <div className="grid grid-cols-3 border-b border-border/40 pb-4 gap-6">
                            {TRINITY_DATA.map((item, idx) => (
                                <button
                                    key={idx}
                                    onMouseEnter={() => setActiveTab(idx)}
                                    onClick={() => setActiveTab(idx)}
                                    className="text-left space-y-2 group/btn outline-none"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-primary/70">
                                            [{item.index}] {item.tag}
                                        </span>
                                        <span className={`w-1.5 h-1.5 rounded-full bg-primary transition-all duration-300 ${activeTab === idx ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
                                    </div>
                                    <h4 className={`tracking-tight font-bold text-base transition-colors duration-300 ${activeTab === idx ? 'text-foreground' : 'text-muted-foreground group-hover/btn:text-foreground/70'}`}>
                                        {item.title}
                                    </h4>
                                </button>
                            ))}
                        </div>

                        {/* Khung chứa ảnh co giãn chuyển động mượt */}
                        <div className="flex gap-4 h-[380px] w-full">
                            {TRINITY_DATA.map((item, idx) => {
                                const isActive = activeTab === idx
                                return (
                                    <div
                                        key={idx}
                                        className={`relative h-full rounded-2xl overflow-hidden border border-border/60 bg-secondary/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'flex-grow-[4] shadow-md' : 'flex-grow-[1] opacity-40 grayscale-[40%]'
                                            }`}
                                    >
                                        <Image src={item.image} alt={item.title} fill sizes="40vw" loading="lazy" className="object-scale-down" />
                                        {!isActive && (
                                            <div className="absolute inset-0 bg-background/20 backdrop-blur-xs flex items-center justify-center p-4">
                                                <span className="font-mono text-xl font-bold text-foreground/40">{item.index}</span>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>

                        {/* Mô tả dưới cùng cho PC */}
                        <div className="min-h-[60px] max-w-2xl">
                            <p className="text-xs sm:text-sm font-light text-muted-foreground leading-relaxed">
                                {activeTab >= 0 && TRINITY_DATA[activeTab] ? TRINITY_DATA[activeTab].desc : TRINITY_DATA[0].desc}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SmartOperation