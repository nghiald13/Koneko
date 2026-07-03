'use client'

import { useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import DialogVideo from "./dialog-video"

export function HeroCTA() {
    const [dialogState, setDialogState] = useState(false)

    return (
        <>
            <DialogVideo dialogState={dialogState} setDialogState={setDialogState} />
            <div className="flex flex-col items-center justify-center w-full mt-10 gap-4 sm:flex-row sm:w-auto">
                <Button
                    variant="default"
                    size="lg"
                    className="w-full px-8 text-base font-medium rounded-full shadow-lg shadow-primary/20 hover:shadow-none sm:w-auto transition-all duration-300"
                >
                    Buy Now
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    className="w-full px-8 text-base font-medium border-border rounded-full hover:bg-secondary/50 sm:w-auto transition-colors"
                    onClick={() => setDialogState(true)}
                >
                    <Play className="w-4 h-4 mr-2 fill-current" />
                    Watch Video
                </Button>
            </div>
        </>
    )
}