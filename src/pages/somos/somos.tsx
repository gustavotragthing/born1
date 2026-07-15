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

                <div
                    className="
                        max-w-4xl
                        bg-white/10
                        backdrop-blur-xl
                        border border-white/20
                        rounded-3xl
                        p-10 md:p-14
                        shadow-2xl
                        text-white
                    "
                >

                    <div className="text-center mb-10">

                        <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                            Conheça a Born Eletrônica
                        </span>

                        <h1 className="text-4xl md:text-5xl font-extrabold mt-6">
                            Quem Somos
                        </h1>

                    </div>

                    <div className="space-y-6 text-lg leading-8 text-gray-100">

                        <p>
                            A <strong>Born Eletrônica</strong> é especializada
                            em manutenção e reparo de televisores, oferecendo
                            soluções técnicas para Smart TVs, LED, LCD, OLED e
                            QLED de diversas marcas.
                        </p>

                        <p>
                            Nossa missão é fornecer serviços de alta qualidade,
                            realizando diagnósticos precisos e reparos seguros,
                            sempre com transparência e compromisso com nossos
                            clientes.
                        </p>

                        <p>
                            Contamos com profissionais capacitados e equipamentos
                            modernos para análise e recuperação de placas
                            eletrônicas, fontes, sistemas de imagem, barras de
                            LED e demais componentes eletrônicos.
                        </p>

                        <p>
                            Trabalhamos com dedicação, honestidade e excelência,
                            buscando entregar o melhor resultado para que sua TV
                            volte a funcionar com o máximo desempenho e
                            confiabilidade.
                        </p>

                    </div>

                    <div className="mt-10 grid md:grid-cols-3 gap-4">

                        <div className="bg-white/10 rounded-2xl p-4 text-center">
                            <h3 className="font-bold text-xl">🔧</h3>
                            <p>Técnicos Especializados</p>
                        </div>

                        <div className="bg-white/10 rounded-2xl p-4 text-center">
                            <h3 className="font-bold text-xl">📺</h3>
                            <p>Conserto de TVs</p>
                        </div>

                        <div className="bg-white/10 rounded-2xl p-4 text-center">
                            <h3 className="font-bold text-xl">⭐</h3>
                            <p>Qualidade Garantida</p>
                        </div>

                    </div>

                </div>

            </section>

            <Pe />
        </main>
    );
}