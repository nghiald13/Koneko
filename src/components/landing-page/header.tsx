'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const LandingPageHeader = () => {
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
                        <span
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
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav
                        className={cn(
                            "hidden md:flex items-center",
                            "gap-8",
                            "text-sm font-medium text-muted-foreground"
                        )}
                    >
                        <Link
                            href="#features"
                            className={cn(
                                "text-sm font-medium text-muted-foreground",
                                "hover:text-foreground",
                                "transition-colors"
                            )}
                        >
                            Features
                        </Link>
                        <Link
                            href="#specs"
                            className={cn(
                                "text-sm font-medium text-muted-foreground",
                                "hover:text-foreground",
                                "transition-colors"
                            )}
                        >
                            Specs
                        </Link>
                        <Link
                            href="#reviews"
                            className={cn(
                                "text-sm font-medium text-muted-foreground",
                                "hover:text-foreground",
                                "transition-colors"
                            )}
                        >
                            Reviews
                        </Link>
                    </nav>

                    {/* CTA Action Button */}
                    <div
                        className={cn(
                            "flex items-center",
                            "gap-4"
                        )}
                    >
                        <Button
                            variant="default"
                            className={cn(
                                "rounded-full shadow-sm"
                            )}
                        >
                            Pre-order Now
                        </Button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default LandingPageHeader