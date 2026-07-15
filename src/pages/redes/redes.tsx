import Image from "next/image";
import Topo2 from "@/components/Topo2";
import Pe from "@/components/Pe";

export default function Redes() {
    return (
        <div className="min-h-screen flex flex-col">
            <Topo2 />

            <main
                className="flex-1 bg-cover bg-center flex items-center justify-center px-6 py-20"
                style={{ backgroundImage: "url('/eletro.png')" }}
            >
                <div className="w-full max-w-6xl">

                    {/* Título */}
                    <div className="text-center mb-14">
                        <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold mb-5">
                            Fale Conosco
                        </span>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                            Nossas Redes Sociais
                        </h1>

                        <p className="text-gray-300 mt-5 text-lg max-w-2xl mx-auto">
                            Acompanhe nossos serviços, conheça nossos reparos e
                            entre em contato pelos canais oficiais da Born
                            Eletrônica.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Instagram */}
                        <a
                            href="https://instagram.com/born.inverter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                bg-white/10
                                backdrop-blur-xl
                                border border-white/20
                                rounded-3xl
                                p-10
                                text-center
                                shadow-2xl
                                hover:-translate-y-2
                                hover:bg-pink-500/20
                                transition-all
                                duration-300
                            "
                        >
                            <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                                <Image
                                    src="/logoinsta2.png"
                                    alt="Instagram"
                                    width={50}
                                    height={50}
                                />
                            </div>

                            <h2 className="text-white text-2xl font-bold mt-6">
                                Instagram
                            </h2>

                            <p className="text-gray-300 mt-3">
                                Fotos, vídeos, serviços realizados e novidades.
                            </p>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/5524998452833"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                bg-white/10
                                backdrop-blur-xl
                                border border-white/20
                                rounded-3xl
                                p-10
                                text-center
                                shadow-2xl
                                hover:-translate-y-2
                                hover:bg-green-500/20
                                transition-all
                                duration-300
                            "
                        >
                            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                                <Image
                                    src="/what2.png"
                                    alt="WhatsApp"
                                    width={50}
                                    height={50}
                                />
                            </div>

                            <h2 className="text-white text-2xl font-bold mt-6">
                                WhatsApp
                            </h2>

                            <p className="text-gray-300 mt-3">
                                Solicite um orçamento e fale diretamente com
                                nossa equipe.
                            </p>
                        </a>

                        {/* TikTok */}
                        <a
                            href="https://tiktok.com/@born.inverter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                bg-white/10
                                backdrop-blur-xl
                                border border-white/20
                                rounded-3xl
                                p-10
                                text-center
                                shadow-2xl
                                hover:-translate-y-2
                                hover:bg-white/20
                                transition-all
                                duration-300
                            "
                        >
                            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto shadow-lg">
                                <Image
                                    src="/logotiktok.png"
                                    alt="TikTok"
                                    width={50}
                                    height={50}
                                />
                            </div>

                            <h2 className="text-white text-2xl font-bold mt-6">
                                TikTok
                            </h2>

                            <p className="text-gray-300 mt-3">
                                Dicas, curiosidades e vídeos de consertos de TVs.
                            </p>
                        </a>

                    </div>

                </div>
            </main>

            <Pe />
        </div>
    );
}