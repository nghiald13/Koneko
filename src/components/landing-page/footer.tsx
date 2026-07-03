'use client'

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

// 1. KỶ LUẬT DỮ LIỆU: Phân tách toàn bộ thông tin cấu trúc và liên hệ ra khỏi JSX
const FOOTER_INFRASTRUCTURE = {
    brand: {
        title: "HeliCorp Global.",
        description: "Architecting the ultimate boundary between engineering precision and feline ecosystem automation."
    },
    contact: {
        title: "Corporate Contact",
        items: [
            { label: "Location", value: "M2 F Street, Tan Thoi Nhat, District 12, Ho Chi Minh City, Vietnam" },
            { label: "Hotline", value: "0965 255 227", href: "tel:0965255227" },
            { label: "Support", value: "support@helicorp.vn", href: "mailto:support@helicorp.vn" },
            { label: "Operation", value: "08:00 - 20:00 | Mon - Sun" }
        ]
    },
    navigation: {
        title: "Ecosystem Hub",
        links: [
            { label: "Specifications", href: "#specs" },
            { label: "Consultation", href: "#consult" },
            { label: "Privacy Policy", href: "#privacy" },
            { label: "Terms of Service", href: "#terms" }
        ]
    },
    copyright: `© ${new Date().getFullYear()} HeliCorp Global. All rights reserved. Precision crafted under global specifications.`
}

export default function LandingPageFooter() {
    return (
        // Quy tắc sắp xếp Class Tailwind: Layout -> Sizing/Spacing -> Typography -> Visual/Styling -> Interactive/States -> Responsive -> Animations.
        <footer className="relative w-full bg-background border-t border-border/50">
            <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

                {/* UPPER MAIN LAYOUT STRUCTURE */}
                <div className="grid grid-cols-1 gap-12 pb-16 border-b border-border/40 md:grid-cols-12 lg:gap-16">

                    {/* CỘT 1: THƯƠNG HIỆU (ASSET SPEC) */}
                    <div className="md:col-span-4 lg:col-span-5 space-y-4">
                        <h3 className="tracking-tighter font-black text-foreground text-xl sm:text-2xl">
                            {FOOTER_INFRASTRUCTURE.brand.title}
                        </h3>
                        <p className="max-w-xs text-xs font-light leading-relaxed text-muted-foreground">
                            {FOOTER_INFRASTRUCTURE.brand.description}
                        </p>
                        <Badge variant="outline" className="px-3 py-0.5 text-[10px] font-mono tracking-widest uppercase border-primary/20 text-primary rounded-full">
                            Node Active // 2026
                        </Badge>
                    </div>

                    {/* CỘT 2: LIÊN HỆ ĐỊA CHỈ (CORPORATE DATA CONTACT) */}
                    <div className="md:col-span-5 lg:col-span-4 space-y-6">
                        <h4 className="text-xs font-bold tracking-[0.2em] text-foreground uppercase">
              // {FOOTER_INFRASTRUCTURE.contact.title}
                        </h4>
                        <ul className="space-y-4">
                            {FOOTER_INFRASTRUCTURE.contact.items.map((item, idx) => (
                                <li key={idx} className="space-y-1">
                                    <span className="block text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
                                        {item.label}
                                    </span>
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className="block text-sm font-medium text-foreground transition-colors hover:text-primary"
                                        >
                                            {item.value}
                                        </Link>
                                    ) : (
                                        <span className="block text-sm font-light text-foreground/90">
                                            {item.value}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CỘT 3: ĐIỀU HƯỚNG TÓM TẮT (ECOSYSTEM INTERACTIVE HUB) */}
                    <div className="md:col-span-3 lg:col-span-3 space-y-6">
                        <h4 className="text-xs font-bold tracking-[0.2em] text-foreground uppercase">
              // {FOOTER_INFRASTRUCTURE.navigation.title}
                        </h4>
                        <ul className="space-y-3">
                            {FOOTER_INFRASTRUCTURE.navigation.links.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="inline-block text-sm font-light text-muted-foreground transition-all duration-200 hover:text-foreground hover:translate-x-0.5"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* LOWER END: COPYRIGHT MATRIX */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
                    <p className="text-[11px] font-light text-muted-foreground tracking-wide text-center sm:text-left">
                        {FOOTER_INFRASTRUCTURE.copyright}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-muted-foreground/40 uppercase">
                        <span>Secure TLS 1.3</span>
                        <span>•</span>
                        <span>HeliCorp Layer</span>
                    </div>
                </div>

            </div>
        </footer>
    )
}