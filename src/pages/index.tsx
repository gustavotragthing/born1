import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";
import Link from "next/link";

import Texto from "@/pages/Texto";
import Topo2 from "@/components/Topo2";
import Born3 from "@/components/Born3";
import Pe from "@/components/Pe";
export default function Home() {
  const images = [

    "/born910.png",
  ];

  return (
    <main
      className="text-black bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/eletro.png')" }}
    >
      <Topo2 />

      {/* CONTEÚDO PRINCIPAL */}
      <section className="pt-24 pb-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">

          {/* SLIDE */}
          <div className="w-full md:w-1/2">
            <ImageSlider images={images} />
          </div>

          {/* TEXTO */}
          <div className="flex flex-1 items-center justify-center">
            <div className="text-center w-full max-w-xl text-white px-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 underline">
                Especialistas em Eletrônica
              </h1>

              <p
                className="text-lg leading-relaxed bg-white/10 backdrop-blur-md
      border border-white/20 rounded-2xl p-6"
              >
                Trabalhamos com manutenção, diagnóstico e reparo de equipamentos
                eletrônicos, sempre com foco em qualidade, precisão e confiança.
                Utilizamos tecnologia de ponta para oferecer soluções rápidas e
                eficientes, atendendo desde pequenos reparos até sistemas mais
                complexos.
              </p>
            </div>
          </div>


        </div>
      </section> <br /><br /><br /><br /><br /><br /><br /><br /><br />

      <Born3 />
      <Pe />
    </main>
  );
}
