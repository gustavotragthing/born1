import Image from "next/image";
import Topo from "@/components/Topo";

export default function Redes() {
    return (

        <div>
            <Topo />
            <main className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/eletro.png')" }}>
                <div className="flex flex-col gap-4 text-lg p-8">


                    {/* Instagram */}
                    <a
                        href="https://instagram.com/born.inverter"
                        target="_blank"
                        className="flex items-center gap-3 p-4 bg-pink-500 text-white rounded-xl "


                    >

                        <Image
                            src="/logoinsta2.png"
                            alt="Logo "
                            width={40}
                            height={0}

                        />

                        Instagram
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/5524998452833"
                        target="_blank"
                        className="flex items-center gap-3 p-4 bg-green-500 text-white rounded-xl"
                    >
                        <Image
                            src="/what2.png"
                            alt="Logo "
                            width={40}
                            height={0}

                        />
                        WhatsApp
                    </a>
                    {/* BOTÃO WHATSAPP FIXO */}
                    <a
                        href="https://wa.me/5524998452833"
                        target="_blank"
                        className="fixed bottom-4 right-400 w-16 h-16 bg-black rounded-full
        flex items-center justify-center shadow-lg hover:scale-1000 transition-transform"
                    >
                        <Image
                            src="/logotiktok.png"
                            alt="WhatsApp"
                            width={32}
                            height={32}
                            className="object-contain filter brightness-0 invert"
                        />
                    </a>

                    <p className="text-sm text-gray-300 text-center mt-4">
                        (@Gustavo Miguel.)
                    </p>
                </div>
            </main>
        </div>
    );
}
