import Image from "next/image"

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

                    {/* TIÊU ĐỀ PHẲNG */}
                    <div className="space-y-2">
                        <h3 className="tracking-tight font-bold text-foreground text-2xl sm:text-4xl whitespace-pre-line">
                            {CONNECTIVITY_SECTION.title}
                        </h3>
                    </div>

                    {/* KHUNG ẢNH APP TỐI GIẢN - KHÔNG BOX BỌC NGOÀI */}
                    <div className="relative mx-auto px-4">
                        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border/60 bg-secondary/20 shadow-xs transition-transform duration-300 hover:scale-[1.01]">
                            <Image
                                src="/images/neakasa_m1_smart_app_control_1.webp"
                                alt="Neakasa M1 App Interface"
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                loading="lazy"
                                className="object-scale-down"
                            />
                        </div>
                    </div>

                    {/* MÔ TẢ PHẲNG */}
                    <p className="text-xs sm:text-sm font-light text-muted-foreground leading-relaxed max-w-xl mx-auto">
                        {CONNECTIVITY_SECTION.description}
                    </p>

                </div>
            </div>
        </>
    )
}

export default AppConnectivity