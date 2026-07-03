'use client'

import { useTheme } from "next-themes"
import Image from "next/image"

const HeLiCorpLogo = () => {
    const { theme } = useTheme()
    return (
        <div className="relative sm:h-7 sm:w-32">
            <Image
                src={`/images/${theme === 'light' ? "HeLiCorp-B-bg.webp" : "HeLiCorp-W-bg.webp"}`}
                alt="Helicorp Logo"
                width={112}
                height={28}
                priority
                style={{ height: 'auto' }}
                className="w-28 h-auto sm:w-32 object-contain"
            />
        </div>
    )
}

export default HeLiCorpLogo