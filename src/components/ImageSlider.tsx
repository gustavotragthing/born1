"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageSlider({ images }: { images: string[] }) {
    const [index] = useState(0);

    return (
        <div className="flex justify-center w-full">
            <Image
                src={images[index]}
                alt="Slide"
                width={600}
                height={400}
                priority
                className="w-full max-w-[600px] h-auto rounded-xl shadow-lg object-cover"
            />
        </div>
    );
}