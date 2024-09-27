"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function not_found() {
    const router = useRouter();
    useEffect(() => {
        router.replace("/")
    }, [])
}