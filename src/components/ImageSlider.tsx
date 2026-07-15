"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImageSlider({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);

    function next() {
        setIndex((prev) => (prev + 1) % images.length);
    }

    function prev() {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    }

    return (

        <div className="relative w-full max-w-[600px] h-[220px] sm:h-[300px] md:h-[400px]">
            <Image
                src={images[index]}
                alt="Slide"
                fill
                className="rounded-xl shadow-lg object-cover"
            />
        </div>




    );
}
