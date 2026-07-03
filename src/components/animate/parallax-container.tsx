"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode, useRef } from "react"

interface ParallaxProps {
    children: ReactNode
    offset?: number // Độ lệch di chuyển (càng cao dịch chuyển càng nhiều)
}

export function ParallaxContainer({ children, offset = 50 }: ParallaxProps) {
    const ref = useRef(null)

    // Theo dõi tiến trình cuộn chuột qua element này
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    // Ánh xạ tiến trình cuộn thành tọa độ di chuyển trục Y (từ offset px đến -offset px)
    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

    return (
        <div ref={ref} className="relative overflow-hidden w-full">
            <motion.div style={{ y }}>{children}</motion.div>
        </div>
    )
}