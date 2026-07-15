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
                            Assistência Técnica Especializada
                        </span>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
                            Especialistas em TVs
                        </h1>

                        <p className="text-lg leading-9 text-gray-100">
                            A <strong>Born Eletrônica</strong> é especializada
                            em manutenção e conserto de televisores,
                            oferecendo serviços com qualidade, rapidez e
                            total transparência.

                            Trabalhamos com televisores <strong>LED, LCD,
                                OLED, QLED e Smart TVs</strong>, realizando
                            diagnósticos precisos e reparos em placas
                            eletrônicas, fontes, barras de LED e demais
                            componentes.

                            Nosso compromisso é devolver o funcionamento do
                            seu equipamento com segurança, utilizando peças de
                            qualidade e equipamentos modernos para garantir um
                            serviço confiável e duradouro.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mt-12">

                            <div className="bg-white/10 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-blue-400">
                                    🔧 Qualidade
                                </h3>

                                <p className="text-gray-300 mt-3">
                                    Reparos realizados com equipamentos
                                    profissionais.
                                </p>
                            </div>

                            <div className="bg-white/10 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-blue-400">
                                    ⚡ Rapidez
                                </h3>

                                <p className="text-gray-300 mt-3">
                                    Diagnóstico rápido para reduzir o tempo de
                                    espera.
                                </p>
                            </div>

                            <div className="bg-white/10 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-blue-400">
                                    ⭐ Garantia
                                </h3>

                                <p className="text-gray-300 mt-3">
                                    Atendimento transparente e compromisso com
                                    a satisfação do cliente.
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