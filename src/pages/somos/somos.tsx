import Image from "next/image";
import Topo from "@/components/Topo";
import Trabalhosfeitos from "@/components/Trabalhosfeitos";
import Pe from "@/components/Pe";

import Born3 from "@/components/Born3";
export default function Trabalho() {


    return (
        <main
            className="min-h-screen bg-cover bg-center flex flex-col"
            style={{ backgroundImage: "url('/eletro.png')" }}
        >
            <Topo />

            {/* Container que centraliza */}
            <div className="flex flex-1 items-center justify-center">
                <div className="text-center w-full max-w-xl text-white px-6">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 underline">
                        Quem somos
                    </h1>

                    <p
                        className="text-lg leading-relaxed bg-white/10 backdrop-blur-md
      border border-white/20 rounded-2xl p-6"
                    >
                        A Born é uma empresa voltada a manutenção de sistemas eletrônicos com especialização em reparos de placas de ar condicionado inverter. Atuamos com profissionalismo, comprometimento e credibilidade a fim de fidelizarmos nossos clientes com nossa equipe técnica altamente qualificada e com treinamentos sólidos para fornecer o melhor que a eletrônica tem a disponibilizar para nossos clientes.
                    </p>
                </div>
            </div>

        </main>
    );
}



