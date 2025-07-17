import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL || "https://rent-lah-heap.vercel.app",
    endpoint: "/api/auth",
    fetchOptions: {
        credentials: "include"
    }
})
