import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

export const HelLiCorpLogo = () => {
    return (
        <div className="relative sm:h-7 sm:w-32">
            <Image
                src="/images/HeLiCorp-B-bg.webp"
                alt="Helicorp Logo"
                width={112}
                height={28}
                priority
                style={{height: 'auto'}}
                className="w-28 h-auto sm:w-32 object-contain"
            />
        </div>
    )
}

const LandingPageHeader = () => {
    const navData = [
        { href: "#newFeat", text: "What's New" },
        { href: "#mainFeat", text: "Features" },
        { href: "#specs", text: "Specs" }
    ]

    return (
        <>
            {/* 1. HEADER / NAVBAR COMPONENT */}
            <header
                className={cn(
                    "sticky top-0 z-50",
                    "w-full",
                    "border-b border-border bg-background/80 backdrop-blur-md",
                    "transition-colors"
                )}
            >
                <div
                    className={cn(
                        "flex justify-between items-center",
                        "h-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    )}
                >
                    {/* Brand Logo */}
                    <Link
                        href="/"
                        className={cn(
                            "flex items-center",
                            "space-x-2"
                        )}
                    >
                        <HelLiCorpLogo />

                        {/* <span
                            className={cn(
                                "text-xl font-bold tracking-tight text-foreground"
                            )}
                        >
                            Neakasa{" "}
                            <span
                                className={cn(
                                    "font-extrabold text-primary"
                                )}
                            >
                                M1
                            </span>
                        </span> */}
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav
                        className={cn(
                            "hidden md:flex items-center",
                            "gap-8",
                            "text-sm font-medium text-muted-foreground"
                        )}
                    >
                        {navData.map(nav => (
                            <Link key={nav.href} href={nav.href}
                                className={cn(
                                    "text-sm font-medium text-muted-foreground",
                                    "hover:text-foreground",
                                    "transition-colors"
                                )}
                            >
                                {nav.text}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Action Button */}
                    <div
                        className={cn(
                            "flex items-center",
                            "gap-4"
                        )}
                    >
                        <Button asChild
                            variant="default"
                            className={cn(
                                "rounded-full shadow-sm"
                            )}
                        >
                            <Link href="#subscribeForm">Pre-order Now</Link>
                        </Button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default LandingPageHeader