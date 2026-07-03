import HeLiCorpLogo from "../brand-logo/HeLiCorpLogo"

// 1. KỶ LUẬT DỮ LIỆU: Cập nhật lại hạ tầng thông tin Chi nhánh (Branch)
const FOOTER_INFRASTRUCTURE = {
    contact: {
        title: "Contact",
        items: [
            { label: "Location", value: "M2 F Street, Tan Thoi Nhat, District 12, Ho Chi Minh City, Vietnam" },
            { label: "Hotline", value: "0965 255 227" },
            { label: "Support", value: "support@helicorp.vn" },
            { label: "Operation", value: "08:00 - 20:00 | Mon - Sun" }
        ]
    },
    branches: {
        title: "Branch",
        items: [
            {
                name: "Ho Chi Minh City Headquarters",
                address: "R54, Street 15, Quarter 5, Dong Hung Thuan Ward, Ho Chi Minh City"
            },
            {
                name: "HELIPET Cat Litter Warehouse",
                address: "25.2ha Area, Son Dong, Hanoi"
            },
            {
                name: "HELIPET Dinh Tien Hoang (HCMC)",
                address: "166 Dinh Tien Hoang Street, Tan Dinh Ward, Ho Chi Minh City"
            },
            {
                name: "HELIPET Thuy Khue (Hanoi)",
                address: "35 Thuy Khue Street, Tay Ho Ward, Hanoi"
            }
        ]
    },
    copyright: `© ${new Date().getFullYear()} HeliCorp Global. All rights reserved. Precision crafted under global specifications.`
}

export default function LandingPageFooter() {
    return (
        <footer className="relative w-full bg-background border-t border-border/50">
            <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

                {/* UPPER MAIN LAYOUT STRUCTURE */}
                <div className="grid grid-cols-1 gap-12 pb-16 border-b border-border/40 md:grid-cols-12 lg:gap-16">

                    {/* CỘT 1: THƯƠNG HIỆU */}
                    <div className="md:col-span-3 lg:col-span-3 space-y-3">
                        <HeLiCorpLogo />
                        <p className="text-sm font-medium text-foreground/80 tracking-wide pt-1">
                            Healthy Living Corporation
                        </p>
                    </div>

                    {/* CỘT 2: LIÊN HỆ ĐỊA CHỈ (Giữ nguyên) */}
                    <div className="md:col-span-4 lg:col-span-4 space-y-6">
                        <h4 className="text-2xl font-extrabold tracking-[0.2em] text-foreground uppercase">
                            {FOOTER_INFRASTRUCTURE.contact.title}
                        </h4>
                        <ul className="space-y-4">
                            {FOOTER_INFRASTRUCTURE.contact.items.map((item, idx) => (
                                <li key={idx} className="space-y-1">
                                    <span className="block text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
                                        {item.label}
                                    </span>

                                    <span className="block text-sm font-light text-foreground/90">
                                        {item.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CỘT 3: HỆ THỐNG CHI NHÁNH & KHO HÀNG (BRANCH NETWORK) */}
                    <div className="md:col-span-5 lg:col-span-5 space-y-6">
                        <h4 className="text-2xl font-extrabold tracking-[0.2em] text-foreground uppercase">
                            {FOOTER_INFRASTRUCTURE.branches.title}
                        </h4>
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 gap-y-4">
                            {FOOTER_INFRASTRUCTURE.branches.items.map((branch, idx) => (
                                <li key={idx} className="space-y-1 text-left">
                                    <span className="block text-xs font-bold text-foreground/90 tracking-tight">
                                        {branch.name}
                                    </span>
                                    <span className="block text-xs font-light text-muted-foreground leading-relaxed max-w-sm">
                                        {branch.address}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}