'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

                {/* TIÊU ĐỀ TRUNG TÂM - Trồi nhẹ khi cuộn đến */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center max-w-3xl mx-auto space-y-3"
                >
                    <h3 className="tracking-tight font-bold text-foreground text-2xl sm:text-4xl whitespace-pre-line">
                        {EPILOGUE_SECTION.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-muted-foreground leading-relaxed">
                        {EPILOGUE_SECTION.description}
                    </p>
                </motion.div>

                {/* KHỐI TƯƠNG TÁC ĐỘT PHÁ */}
                <div className="space-y-8">

                    {/* LAYOUT MOBILE (Dưới md): Tích hợp Shadcn Accordion */}
                    <div className="md:hidden">
                        <Accordion
                            type="single"
                            collapsible
                            defaultValue="item-0"
                            onValueChange={(value) => {
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

                    {/* LAYOUT PC (Từ md trở lên): Giữ nguyên bộ thấu kính co giãn hàng ngang kết hợp mượt mà với Framer Motion */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="hidden md:block space-y-8"
                    >
                        {/* Thanh điều hướng chữ mỏng */}
                        <div className="grid grid-cols-3 border-b border-border/40 pb-4 gap-6">
                            {TRINITY_DATA.map((item, idx) => (
                                <button
                                    key={idx}
                                    onMouseEnter={() => setActiveTab(idx)}
                                    onClick={() => setActiveTab(idx)}
                                    className="text-left space-y-2 group/btn outline-none cursor-pointer"
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
                                        className={`relative h-full rounded-2xl overflow-hidden border border-border/60 bg-secondary/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu ${isActive ? 'flex-grow-[4] shadow-md' : 'flex-grow-[1] opacity-40 grayscale-[40%]'
                                            }`}
                                    >
                                        <Image src={item.image} alt={item.title} fill sizes="40vw" loading="lazy" className="object-scale-down" />

                                        {/* Lớp phủ nhòe cực nhẹ cho các tab không kích hoạt */}
                                        <AnimatePresence>
                                            {!isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="absolute inset-0 bg-background/20 backdrop-blur-xs flex items-center justify-center p-4"
                                                >
                                                    <span className="font-mono text-xl font-bold text-foreground/40">{item.index}</span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Mô tả dưới cùng cho PC với hiệu ứng trượt đổi chữ mượt mà (Crossfade Text) */}
                        <div className="min-h-[60px] max-w-2xl overflow-hidden relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                >
                                    <p className="text-xs sm:text-sm font-light text-muted-foreground leading-relaxed">
                                        {TRINITY_DATA[activeTab]?.desc || TRINITY_DATA[0].desc}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                </div>
            </div>
        </>
    )
}

export default SmartOperation