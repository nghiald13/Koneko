'use client'

import React, { useState } from "react"
import { cn } from "@/lib/utils"

// Import trực tiếp các component nguyên tử (Atomic Components) của Shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// 1. KỶ LUẬT DỮ LIỆU: Cô lập data-driven tách biệt hoàn toàn khỏi cấu trúc render
const FORM_DATA = {
    badge: "Limited Privilege Available",
    title: "Experience the Future of Feline Care Today.",
    description: "Secure your priority positioning for the Neakasa M1 Plus ecosystem deployment.",
    perks: [
        { id: "perk-1", text: "Exclusive 20% Off for the first 50 early registrants." },
        { id: "perk-2", text: "2-Year Official Warranty guaranteed by HeliCorp Global." },
        { id: "perk-3", text: "Free Premium Doorstep Delivery & professional setup consultation." }
    ],
    success: {
        title: "Application Received.",
        message: "Your security token and premium reservation slot have been provisioned. A private consultant will contact you within 15 minutes."
    }
}

export default function SubscribeForm() {
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", note: "" })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    // Xử lý submit trên thẻ form HTML tiêu chuẩn
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!formData.name || !formData.phone || !formData.email) return

        setIsSubmitting(true)
        // Giả lập kết nối API an toàn trong 1.5 giây
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSuccess(true)
    }

    return (
        <section id="subscribeForm" className={cn(
            "relative w-full py-24 bg-secondary/30 border-t border-border/50",
        )}>
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">

                    {/* CỘT BÊN TRÁI: THÔNG ĐIỆP UY TÍN */}
                    <div className="flex flex-col justify-center lg:col-span-5">
                        <Badge variant="secondary" className="w-fit px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary hover:bg-primary/10 border-none rounded-full">
                            {FORM_DATA.badge}
                        </Badge>
                        <h2 className="tracking-tight font-extrabold text-foreground leading-[1.1] text-3xl sm:text-4xl md:text-5xl">
                            {FORM_DATA.title}
                        </h2>
                        <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                            {FORM_DATA.description}
                        </p>

                        <ul className="mt-8 space-y-4">
                            {FORM_DATA.perks.map((perk) => (
                                <li key={perk.id} className="flex items-start gap-3">
                                    <svg className="flex-shrink-0 w-5 h-5 mt-0.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm font-light text-foreground/90">
                                        {perk.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CỘT BÊN PHẢI: THẺ FORM TIÊU CHUẨN KẾT HỢP SHADCN FIELDS */}
                    <div className="relative lg:col-span-7">
                        <div className="relative overflow-hidden p-8 md:p-10 bg-card/70 backdrop-blur-md rounded-3xl border border-border/60 shadow-xl min-h-[490px] flex flex-col justify-center">

                            {/* Lưới Grid trang trí bảo mật */}
                            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

                            {!isSuccess ? (
                                // Sử dụng thẻ HTML form nguyên bản theo đúng ý sếp
                                <form
                                    onSubmit={handleSubmit}
                                    className={cn("space-y-5 transition-opacity duration-300", isSubmitting && "opacity-50 pointer-events-none")}
                                >
                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Full Name</Label>
                                            <Input
                                                id="name"
                                                required
                                                placeholder="Nguyen Van A"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="bg-background/50 border-border/80 rounded-xl px-4 py-3 h-11 text-sm focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all placeholder:text-muted-foreground/40"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                required
                                                placeholder="0912 xxx xxx"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="bg-background/50 border-border/80 rounded-xl px-4 py-3 h-11 text-sm focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all placeholder:text-muted-foreground/40"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="name@company.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="bg-background/50 border-border/80 rounded-xl px-4 py-3 h-11 text-sm focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all placeholder:text-muted-foreground/40"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="note" className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Cat Breeds & Architectural Notes</Label>
                                        <Textarea
                                            id="note"
                                            rows={3}
                                            placeholder="Tell us about your cats (optional)"
                                            value={formData.note}
                                            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                                            className="bg-background/50 border-border/80 rounded-xl px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all resize-none placeholder:text-muted-foreground/40"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-6 text-sm font-semibold tracking-wide rounded-xl shadow-lg transition-all active:scale-[0.99] cursor-pointer"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-4 w-4 mr-2 text-current" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                <span className="opacity-80">Encrypting Secure Pipeline...</span>
                                            </>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Submit Secure Consultation Request
                                                <svg className="w-4 h-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            ) : (
                                /* MÀN HÌNH THANK YOU CAO CẤP */
                                <div className="flex flex-col items-center text-center space-y-6 py-6 z-10 animate-in fade-in zoom-in-95 duration-500">
                                    <div className="relative flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full border border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.2)]">
                                        <svg className="w-8 h-8 text-primary animate-in zoom-in duration-300 delay-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-extrabold tracking-tight text-foreground">
                                            {FORM_DATA.success.title}
                                        </h3>
                                        <p className="max-w-md text-sm font-light leading-relaxed text-muted-foreground">
                                            {FORM_DATA.success.message}
                                        </p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}