'use client'

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import {
    MessageScrollerProvider,
    MessageScroller,
    MessageScrollerViewport,
    MessageScrollerContent,
    MessageScrollerItem
} from "@/components/ui/message-scroller"

import { Message } from "@/components/ui/message"
import { Bubble, BubbleContent } from "@/components/ui/bubble"

// Import Input/Button cơ bản của Shadcn
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { toast } from "sonner"
import { askChatbot } from "@/utils/chatAction"

interface IMessageData {
    id: string
    role: 'user' | 'assistant'
    content: string
}

export default function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<IMessageData[]>([
        {
            id: "welcome",
            role: 'assistant',
            content: 'Xin chào! Em là trợ lý ảo từ HeLiCorp. Em có thể giúp gì cho sếp và bé mèo nhà mình ạ?'
        }
    ])
    const [inputValue, setInputValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputValue.trim() || isLoading) return

        const userText = inputValue.trim()
        setInputValue("")

        const userMsgId = `user-${Date.now()}`
        const updatedMessages = [
            ...messages,
            { id: userMsgId, role: 'user', content: userText } as IMessageData
        ]
        setMessages(updatedMessages)
        setIsLoading(true)

        try {
            const historyForAPI = messages.slice(1).map(m => ({ role: m.role, content: m.content }))
            const res = await askChatbot(userText, historyForAPI)

            if (res.success && res.reply) {
                setMessages(prev => [
                    ...prev,
                    { id: `ai-${Date.now()}`, role: 'assistant', content: res.reply! }
                ])
            } else {
                toast.error(res.error || "Không nhận được phản hồi từ trợ lý ảo.")
            }
        } catch (err) {
            toast.error("Lỗi đường truyền kết nối AI.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        // RESPONSIVE: Trên mobile sát viền đáy/phải, trên desktop cách lề 6 đơn vị (bottom-6 right-6)
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 font-sans transform-gpu">
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        // Hiệu ứng mượt mà: Mobile trượt từ dưới lên, Desktop phóng to nhẹ từ góc
                        initial={{ opacity: 0, scale: 0.9, y: 60 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 60 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        // RESPONSIVE: Mobile chiếm trọn màn hình (w-screen h-screen), Desktop thu về w-[380px] h-[560px]
                        className="w-screen h-screen sm:w-[360px] md:w-[380px] sm:h-[520px] md:h-[560px] bg-background/95 backdrop-blur-2xl border-0 sm:border border-border sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden sm:mb-4"
                    >
                        {/* ─── CHAT HEADER ─── */}
                        <div className="p-4 bg-card border-b border-border flex items-center justify-between shadow-sm shrink-0">
                            <div className="flex items-center gap-2">
                                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                <div>
                                    <h4 className="text-sm font-semibold text-foreground tracking-wide">
                                        HeLiCorp Assistant
                                    </h4>
                                    <p className="text-[11px] text-muted-foreground">Tư vấn tự động 24/7</p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                                className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground cursor-pointer"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </Button>
                        </div>

                        {/* ─── CHAT VIEWPORT ─── */}
                        <MessageScrollerProvider autoScroll defaultScrollPosition="last-anchor" scrollPreviousItemPeek={48}>
                            {/* flex-1 đảm bảo danh sách tin nhắn kéo giãn tự động theo chiều cao màn hình thiết bị */}
                            <MessageScroller className="flex-1 p-4">
                                <MessageScrollerViewport>
                                    <MessageScrollerContent className="space-y-4">
                                        {messages.map((msg) => (
                                            <MessageScrollerItem
                                                key={msg.id}
                                                messageId={msg.id}
                                                scrollAnchor={msg.role === "user"}
                                            >
                                                <Message align={msg.role === 'user' ? 'end' : 'start'}>
                                                    <Bubble variant={msg.role === 'user' ? 'default' : 'secondary'}>
                                                        {/* break-words: Chống tràn chữ với các liên kết dài trên màn hình hẹp */}
                                                        <BubbleContent className="break-words text-[13px] sm:text-sm leading-relaxed">
                                                            {msg.content}
                                                        </BubbleContent>
                                                    </Bubble>
                                                </Message>
                                            </MessageScrollerItem>
                                        ))}

                                        {/* Loading Indicator */}
                                        {isLoading && (
                                            <MessageScrollerItem messageId="ai-loading" scrollAnchor={false}>
                                                <Message align="start">
                                                    <Bubble variant="secondary">
                                                        <BubbleContent className="flex items-center gap-1.5 py-2 px-3">
                                                            <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                                            <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                                            <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" />
                                                        </BubbleContent>
                                                    </Bubble>
                                                </Message>
                                            </MessageScrollerItem>
                                        )}
                                    </MessageScrollerContent>
                                </MessageScrollerViewport>
                            </MessageScroller>
                        </MessageScrollerProvider>

                        {/* ─── CHÂN TRANG NHẬP TIN NHẮN ─── */}
                        {/* pb-safe: Hỗ trợ chống đè vạch điều hướng (Home Indicator) trên iPhone/iPad */}
                        <form onSubmit={handleSendMessage} className="p-3 pb-safe border-t border-border bg-card flex items-center gap-2 shrink-0">
                            <Input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Hỏi về Neakasa M1 Plus..."
                                disabled={isLoading}
                                className="flex-1 bg-background border-border focus-visible:ring-1 focus-visible:ring-primary rounded-xl px-3.5 h-10 text-[13px] sm:text-sm"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                disabled={isLoading || !inputValue.trim()}
                                className="h-10 w-10 rounded-xl shrink-0 cursor-pointer"
                            >
                                <svg className="w-4 h-4 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </Button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* BONG BÓNG TRÒN BẬT CHAT CHÂN TRANG */}
            {/* RESPONSIVE: Ẩn nút tròn này đi khi chatbox đang mở trên màn hình mobile (mở full-screen rồi không cần nút nữa) */}
            <motion.button
                layout
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`ml-auto items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-shadow cursor-pointer border border-primary/20 mr-6 mb-6 sm:mr-0 sm:mb-0 ${isOpen ? 'hidden sm:flex' : 'flex'}`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.svg
                            key="close" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.2 }}
                            className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            key="chat" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.6, opacity: 0 }} transition={{ duration: 0.2 }}
                            className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </motion.svg>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    )
}