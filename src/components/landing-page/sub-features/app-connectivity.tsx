'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const CONNECTIVITY_SECTION = {
    tag: "Chapter IV // Digital Connection",
    title: "Stay Connected with Your Cat\nThrough the Neakasa App.",
    description: "Effortlessly monitor your cat's bathroom habits, track litter levels, and remotely control operation modes at your fingertips. For the best experience, please update to the latest firmware after setup."
}

const AppConnectivity = () => {
    return (
        <>
            {/* CONNECTIVITY FULL-WIDTH (CHAPTER 4) */}
            <div className="mb-24 text-center relative overflow-hidden">
                <div className="mx-auto space-y-8 relative z-10">

                    {/* TIÊU ĐỀ PHẲNG - Fade và trồi nhẹ */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-3"
                    >
                        <h3 className="tracking-tight font-bold text-foreground text-2xl sm:text-4xl whitespace-pre-line">
                            {CONNECTIVITY_SECTION.title}
                        </h3>
                    </motion.div>

                    {/* KHUNG ẢNH APP ĐỘNG - Kích hoạt mượt mà khi lọt vào tầm mắt */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="relative mx-auto px-4 max-w-5xl"
                    >
                        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border/60 bg-secondary/20 shadow-xs transition-transform duration-500 hover:scale-[1.01] transform-gpu">
                            <Image
                                src="/images/neakasa_m1_smart_app_control_1.webp"
                                alt="Neakasa M1 App Interface"
                                fill
                                sizes="(max-width: 1024px) 100vw, 60vw"
                                unoptimized={true} // Giữ nguyên định dạng gốc giúp ảnh WebP động chạy mượt không bị cache tĩnh
                                loading="lazy"
                                className="object-scale-down p-4 sm:p-8"
                            />
                        </div>
                    </motion.div>

                    {/* MÔ TẢ PHẲNG - Xuất hiện sau cùng */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xs sm:text-sm font-light text-muted-foreground leading-relaxed max-w-xl mx-auto"
                    >
                        {CONNECTIVITY_SECTION.description}
                    </motion.p>

                </div>
            </div>
        </>
    )
}

export default AppConnectivity