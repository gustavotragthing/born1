import Head from "next/head";
import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";
import Link from "next/link";

import Texto from "@/pages/Texto";
import Topo2 from "@/components/Topo2";
import Born3 from "@/components/Born3";
import Pe from "@/components/Pe";

export default function Home() {
  const images = ["/born910.png"];

  return (
    <>
      <Head>
        <title>Born Inverter</title>

        <meta
          name="description"
          content="Especialistas em eletrônica, manutenção e reparo de equipamentos e placas eletrônicas."
        />

        <meta
          name="keywords"
          content="Born Inverter, eletrônica, manutenção, placas eletrônicas, reparo eletrônico"
        />

        <meta name="author" content="Born Inverter" />

        <meta property="og:title" content="Born Inverter" />

        <meta
          property="og:description"
          content="Especialistas em eletrônica e manutenção de placas eletrônicas."
        />

        <meta property="og:image" content="/born910.png" />

        <meta property="og:type" content="website" />
      </Head>

      <main
        className="text-black bg-cover bg-center min-h-screen overflow-x-hidden"
        style={{ backgroundImage: "url('/eletro.png')" }}
      >
        <Topo2 />

        <section className="pt-16 pb-16 px-4 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">

            <div className="w-full md:w-1/2 text-white">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 underline md:text-left">
                Especialistas em Eletrônica
              </h1>

              <p className="text-base md:text-lg leading-relaxed bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                Trabalhamos com manutenção, diagnóstico e reparo de equipamentos eletrônicos,
                oferecendo soluções completas com foco em qualidade, precisão e confiança.
                Nossa equipe atua com dedicação em cada detalhe, identificando falhas com
                rapidez e aplicando técnicas modernas para garantir o melhor desempenho e
                a durabilidade dos aparelhos.
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <ImageSlider images={images} />
            </div>

          </div>
        </section>

        {Array(3).fill(null).map((_, i) => (
          <br key={i} />
        ))}

        {Array(3).fill(null).map((_, i) => (
          <br key={i} />
        ))}

        {Array(3).fill(null).map((_, i) => (
          <br key={i} />
        ))}

        <Born3 />
        <Pe />
      </main>
    </>
  );
}