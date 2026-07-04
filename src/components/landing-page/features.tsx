'use client'

import { motion } from "framer-motion"
import OpenTop from "./sub-features/open-top"
import ConvenientDesign from "./sub-features/convenient-design"
import AppConnectivity from "./sub-features/app-connectivity"
import SmartOperation from "./sub-features/smart-operation"

const MAIN_INTRO = {
    title: "A Stress-Free Experience\nfor You and Your Cat.",
    description: "Enjoy a harmonious home with a system that combines fully automated cleaning for you with a spacious, open-top design that cats naturally prefer."
}

export default function LandingPageFeatures() {
    return (
        <section id="mainFeat" className="relative overflow-hidden py-24 sm:py-32 md:py-48 bg-background">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* PROLOGUE INTRO */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center mb-32 text-center"
                >
                    <h2 className="tracking-tight font-extrabold text-foreground max-w-4xl leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-pre-line">
                        {MAIN_INTRO.title}
                    </h2>
                    <p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground max-w-2xl">
                        {MAIN_INTRO.description}
                    </p>
                </motion.div>

                <OpenTop />

                <ConvenientDesign />

                <AppConnectivity />

                <SmartOperation />
            </div>
        </section>
    )
}