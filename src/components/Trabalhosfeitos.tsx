"use client";
import Image from "next/image";
import { useState } from "react";

export default function Trabalhos({ images }: { images: string[] }) {
    const [Trabalhos, setIndex] = useState(0);

    function next() {
        setIndex((prev) => (prev + 1) % images.length);
    }

    function prev() {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    }

    return (

        <div className="  relative w-300 h-[700px]  shadow-lg">
            <Image
                src={images[Trabalhos]}
                alt="Slide"
                fill
                className="rounded-xl shadow-lg object-cover"
            />



            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 
             hover:bg-white text-black 
             shadow-xl backdrop-blur-sm
             w-12 h-12 rounded-full 
             flex items-center justify-center
             text-3xl font-bold transition-all"
            >
                ◀
            </button>

            <button
                onClick={prev}
                className="absolute right-4 top-1/2 -translate-y-1/2 
             hover:bg-white text-black 
             shadow-xl backdrop-blur-sm
             w-12 h-12 rounded-full 
             flex items-center justify-center
             text-3xl font-bold transition-all"
            >
                ▶
            </button>

        </div >
    );
}
