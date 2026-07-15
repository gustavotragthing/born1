"use client";

import Image from "next/image";

export default function ImageSlider({ images }: { images: string[] }) {
    return (
        <div className="w-full flex justify-center px-4">
            <Image
                src={images[0]}
                alt="Slide"
                width={1200}
                height={800}
                priority
                className="
          w-full
          max-w-xs
          sm:max-w-md
          md:max-w-lg
          lg:max-w-2xl
          h-auto
          rounded-2xl
          shadow-2xl
          object-contain
        "
            />
        </div>
    );
}