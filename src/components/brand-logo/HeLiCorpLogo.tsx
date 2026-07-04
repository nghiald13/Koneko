'use client'

import Image from "next/image"

const HeLiCorpLogo = () => {
    return (
        <div className="relative sm:h-7 sm:w-32">
            <Image
                src="/images/HeLiCorp-B-bg.webp"
                alt="Helicorp Logo Light"
                width={112}
                height={28}
                priority
                className="w-28 h-auto sm:w-32 object-contain dark:hidden"
            />

            <Image
                src="/images/HeLiCorp-W-bg.webp"
                alt="Helicorp Logo Dark"
                width={112}
                height={28}
                priority
                className="hidden w-28 h-auto sm:w-32 object-contain dark:block"
            />
        </div>
    )
}

export default HeLiCorpLogo