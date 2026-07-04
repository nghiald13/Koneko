'use server' // Thêm dòng này để biến đây thành Server Action thực thụ

import { ISubscriber } from "@/components/landing-page/subscribe-form"

const backendURL = process.env.BACKEND_URL
const subscribeURL = process.env.SUBSCRIBE_API

export async function postSubscribe(subscriber: ISubscriber) {
    const fetchURL = `${backendURL}${subscribeURL}`

    try {
        const response = await fetch(fetchURL, {
            method: "POST",
            body: JSON.stringify(subscriber),
            headers: {
                "Content-Type": "application/json"
            },
            // Thêm timeout ngắn hoặc config cache nếu cần thiết
            cache: 'no-store'
        })

        // Đọc data an toàn từ response
        const data = await response.json()

        if (response.status === 201 || data.statusCode === 201) {
            return {
                statusCode: 201,
                message: "Created",
            }
        }

        if (response.status === 400 || data.statusCode === 400) {
            return {
                statusCode: 400,
                message: Array.isArray(data.message) ? data.message.join(", ") : (data.message || "Bad Request"),
            }
        }

        return {
            statusCode: data.statusCode || response.status,
            message: data.message || "Internal Server Error"
        }

    } catch (error: any) {
        // Bẫy lỗi khi server Render sập hoặc timeout kết nối
        console.error("Server Action Fetch Error:", error)
        return {
            statusCode: 500,
            message: "Internal Server Error. Please try again later!"
        }
    }
}