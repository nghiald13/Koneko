'use client'

import { Dispatch, SetStateAction } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    Dialog,
    DialogContent,
    DialogClose,
} from "@/components/ui/dialog"

interface DialogVideoProps {
    dialogState: boolean
    setDialogState: Dispatch<SetStateAction<boolean>>
}

const DialogVideo = ({ dialogState, setDialogState }: DialogVideoProps) => {
    return (
        <Dialog open={dialogState} onOpenChange={setDialogState}>
            <DialogContent
                className={cn(
                    "fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
                    "w-[calc(100%-2rem)] aspect-video p-0 overflow-hidden",
                    "bg-black border border-border rounded-2xl shadow-2xl",
                    "sm:w-full sm:max-w-xl",
                    "md:max-w-2xl",
                    "lg:w-[90vw] lg:max-w-5xl",
                    "xl:max-w-6xl"
                )}
            >
                {/* Nút bấm Close thủ công hỗ trợ tối đa UX trên Mobile */}
                <DialogClose
                    className={cn(
                        "absolute top-4 right-4 z-50 flex items-center justify-center",
                        "w-8 h-8",
                        "bg-background/80 backdrop-blur-sm rounded-full border border-border text-muted-foreground",
                        "hover:text-foreground",
                        "transition-colors"
                    )}
                >
                    <X className="w-4 h-4" />
                    <span className="sr-only">Close</span>
                </DialogClose>

                {/* Video Player Frame */}
                <iframe
                    src="https://www.youtube.com/embed/CfUI6tIdGBs?si=WE-47ASzixJGPyp3&autoplay=1"
                    title="Neakasa M1 Cat Litter Box"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className={cn(
                        "w-full h-full",
                        "border-0"
                    )}
                />
            </DialogContent>
        </Dialog>
    )
}

export default DialogVideo