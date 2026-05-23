"use client";
import Image from "next/image";

export default function ImageSlider({ images }: { images: string[] }) {
    return (
        <div className="w-full flex justify-center">
            <Image
                src={images[0]}
                alt="Slide"
                width={1200}
                height={800}
                className="w-full max-w-2xl h-auto rounded-xl shadow-lg"
                priority
            />
        </div>
    );
}

