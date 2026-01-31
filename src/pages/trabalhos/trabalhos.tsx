import Image from "next/image";
import Topo from "@/components/Topo";
import Trabalhosfeitos from "@/components/Trabalhosfeitos";
import Pe from "@/components/Pe";

import Born3 from "@/components/Born3";
export default function Trabalho() {
    const images = [

        "/born4.jpeg",
        "/born5.jpeg",
        "/born7.jpeg",
        "/born8.jpeg",
    ];

    return (
        <main className="min-h-screen bg-white text-black min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/eletro.png')" }}>

            <Topo />
            <div className="mt-10 px-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">

                {/* SLIDER */}
                <div className="w-full md:w-1/2">
                    <Trabalhosfeitos images={images} />
                </div>



            </div>
            {/* BOTÃO WHATSAPP FIXO */}

            <Born3 />
            <p className="text-sm text-gray-300 text-center mt-16 mb-6">
                (@Gustavo Miguel.)
            </p>
            <Pe />
        </main>
    );
}



