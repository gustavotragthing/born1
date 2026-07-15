import Topo from "@/components/Topo";
import Pe from "@/components/Pe";

export default function Trabalho() {
    return (
        <main
            className="min-h-screen bg-cover bg-center flex flex-col"
            style={{ backgroundImage: "url('/eletro.png')" }}
        >
            <Topo />

            <section className="flex-1 flex items-center justify-center px-6 py-20">
                <div className="max-w-4xl w-full">

                    <div
                        className="
                            bg-white/10
                            backdrop-blur-xl
                            border border-white/20
                            rounded-3xl
                            shadow-2xl
                            p-10 md:p-14
                            text-center
                        "
                    >
                        <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold mb-6">
                            Nossa Missão
                        </span>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
                            Compromisso com a Qualidade
                        </h1>

                        <p className="text-lg leading-9 text-gray-100">
                            A missão da <strong>Born Eletrônica</strong> é oferecer
                            serviços de manutenção e conserto de televisores com
                            excelência, rapidez e transparência, garantindo aos
                            nossos clientes um atendimento de qualidade e soluções
                            eficientes para cada necessidade.
                        </p>

                        <p className="text-lg leading-9 text-gray-100 mt-6">
                            Trabalhamos constantemente para aperfeiçoar nossos
                            conhecimentos, investir em tecnologia e utilizar
                            equipamentos modernos, proporcionando diagnósticos
                            precisos e reparos confiáveis em TVs LED, LCD, OLED,
                            QLED e Smart TVs.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mt-12">

                            <div className="bg-white/10 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-blue-400">
                                    🎯 Missão
                                </h3>

                                <p className="text-gray-300 mt-3">
                                    Oferecer soluções rápidas e eficientes para
                                    cada cliente.
                                </p>
                            </div>

                            <div className="bg-white/10 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-blue-400">
                                    💙 Compromisso
                                </h3>

                                <p className="text-gray-300 mt-3">
                                    Trabalhar com honestidade, respeito e
                                    transparência em cada atendimento.
                                </p>
                            </div>

                            <div className="bg-white/10 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-blue-400">
                                    🚀 Objetivo
                                </h3>

                                <p className="text-gray-300 mt-3">
                                    Ser referência em assistência técnica de
                                    televisores na região.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <Pe />
        </main>
    );
}