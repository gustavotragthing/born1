
import { useState } from "react";
import Image from "next/image";
export default function Born3() {
    return (<a
        href="https://wa.me/5524998452833"
        target="_blank"
        className="fixed bottom-4 right-6 z-50 w-16 h-16 bg-green-500 rounded-full
            flex items-center justify-center shadow-lg hover:scale-120 transition-transform"
    >
        <Image
            src="/what2.png"
            alt="WhatsApp"
            width={32}
            height={32}
            className="object-contain filter brightness-0 invert"
        />
    </a>)
}