import Head from "next/head";
import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";
import Link from "next/link";

import Topo from "@/components/Topo2";
import Born3 from "@/components/Born3";
import Pe from "@/components/Pe";

export default function Home() {
  const images = ["/ratata.jpeg"];

  return (
    <>
      <Head>
        <title>Born Eletrônica | Conserto de TVs</title>

        <meta
          name="description"
          content="Especialistas em conserto de televisores LED, LCD, OLED e Smart TVs. Diagnóstico preciso, reparo de placas e assistência técnica especializada."
        />

        <meta
          name="keywords"
          content="conserto de tv, assistência técnica tv, smart tv, televisão, reparo de placas, born eletrônica"
        />

        <meta name="author" content="Born Eletrônica" />

        <meta property="og:title" content="Born Eletrônica" />

        <meta
          property="og:description"
          content="Especialistas em manutenção de televisores e reparo eletrônico."
        />

        <meta property="og:image" content="/novoimg.jpeg" />
        <meta property="og:type" content="website" />
      </Head>

      <main
        className="min-h-screen bg-cover bg-center text-white overflow-x-hidden"
        style={{ backgroundImage: "url('/eletro.png')" }}
      >
        <Topo />

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="inline-block bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                Assistência Técnica Especializada
              </span>

              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                Conserto de
                <span className=""> TVs LED e tvs LCD</span>
              </h1>

              <p className=" text-lg  bg-black/40 backdrop-blur-md p-6 rounded-2xl border ">
                Somos especialistas em manutenção de televisores de diversas
                marcas e modelos. Realizamos diagnóstico eletrônico,
                reparo de placas, troca de componentes e recuperação
                completa do equipamento, sempre utilizando técnicas modernas
                para garantir qualidade, segurança e durabilidade.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <div className="bg-white/10 rounded-xl px-5 py-3">
                  ✓ Diagnóstico Preciso
                </div>

                <div className="bg-white/10 rounded-xl px-5 py-3">
                  ✓ Reparo de Placas
                </div>

                <div className="bg-white/10 rounded-xl px-5 py-3">
                  ✓ Atendimento Rápido
                </div>

              </div>

            </div>

            <div className="flex justify-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <ImageSlider images={images} />
              </div>
            </div>

          </div>
        </section>

        {/* DIFERENCIAIS */}

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <h2 className="text-4xl font-bold text-center mb-14">
            Por que escolher a Born Eletrônica?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/20 transition">
              <h3 className="text-2xl font-bold mb-4">
                📺 Especialistas em TVs
              </h3>

              <p className="text-gray-200 leading-7">
                Trabalhamos com televisores LED, LCD, OLED, QLED e Smart TVs de
                diversas marcas.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/20 transition">
              <h3 className="text-2xl font-bold mb-4">
                🔧 Tecnologia e Precisão
              </h3>

              <p className="text-gray-200 leading-7">
                Equipamentos modernos para diagnóstico eletrônico e reparo com
                alto padrão de qualidade.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/20 transition">
              <h3 className="text-2xl font-bold mb-4">
                ⭐ Qualidade Garantida
              </h3>

              <p className="text-gray-200 leading-7">
                Compromisso com transparência, atendimento de qualidade e
                satisfação do cliente.
              </p>
            </div>

          </div>

        </section>

        <Born3 />

        <Pe />

      </main>
    </>
  );
}