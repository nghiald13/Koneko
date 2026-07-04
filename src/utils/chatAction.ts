'use server'

// Đổi sang dùng khóa bảo mật của Google Gemini (Lấy free tại Google AI Studio)
const AI_API_KEY = process.env.GEMINI_API_KEY

// Endpoint chính thức cho dòng model Flash (Miễn phí, tốc độ phản hồi cực nhanh)
const CHAT_AI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${AI_API_KEY}`

const SYSTEM_PROMPT = `
Bạn là Trợ lý ảo chuyên nghiệp của HeLiCorp Global (đại lý ủy quyền chính thức).
Nhiệm vụ của bạn là tư vấn cho khách hàng về hệ sinh thái robot vệ sinh cao cấp cho mèo Neakasa M1 Plus.
Thông tin cốt lõi:
- Sản phẩm: Robot dọn phân mèo thông minh Neakasa M1 Plus.
- Ưu đãi độc quyền: Giảm giá 20% cho khách hàng đăng ký sớm trên landing page.
- Chính sách: Bảo hành chính hãng 2 năm bởi HeLiCorp Global, Miễn phí vận chuyển và lắp đặt tận nhà.
- Mục tiêu: Định hướng và thuyết phục khách hàng điền form đăng ký nhận ưu đãi ở cuối trang.
Hãy trả lời ngắn gọn, lịch sự, chuyên nghiệp bằng Tiếng Việt và luôn hướng khách hàng về việc để lại thông tin tư vấn.
`

interface IChatMessage {
    role: 'user' | 'assistant'
    content: string
}

export async function askChatbot(userMessage: string, chatHistory: IChatMessage[]) {
    if (!AI_API_KEY) {
        return { success: false, error: "Gemini API Key chưa được cấu hình trong biến môi trường." }
    }

    try {
        // ─── CHUYỂN ĐỔI LỊCH SỬ CHAT SANG ĐỊNH DẠNG CỦA GOOGLE GEMINI ───
        const formattedContents = [
            ...chatHistory.map(msg => ({
                // Trong Gemini API, role của trợ lý phải là 'model' thay vì 'assistant'
                role: msg.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: msg.content }]
            })),
            {
                role: 'user',
                parts: [{ text: userMessage }]
            }
        ]

        const response = await fetch(CHAT_AI_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: formattedContents,
                // System Prompt được cấu hình riêng trong tham số systemInstruction
                systemInstruction: {
                    parts: [{ text: SYSTEM_PROMPT }]
                },
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 800,
                }
            }),
            cache: 'no-store'
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.error?.message || "Lỗi xử lý luồng dữ liệu từ Gemini API")
        }

        // Trích xuất chuỗi văn bản trả về từ cấu trúc JSON của Gemini
        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text

        if (!replyText) {
            throw new Error("Không tìm thấy dữ liệu văn bản trong phản hồi.")
        }

        return {
            success: true,
            reply: replyText as string
        }

    } catch (error: any) {
        console.error("Gemini API Error:", error)
        return {
            success: false,
            error: "Hệ thống đang bận xử lý dữ liệu, sếp vui lòng thử lại sau!"
        }
    }
}