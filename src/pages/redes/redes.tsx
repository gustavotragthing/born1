import Image from "next/image";
import Topo from "@/components/Topo";
import Pe from "@/components/Pe";

export default function Redes() {
    return (
        <div className="min-h-screen flex flex-col">
            <Topo />

            {/* MAIN COM FUNDO */}
            <main
                className="flex-1 bg-cover bg-center flex flex-col items-center justify-center"
                style={{ backgroundImage: "url('/eletro.png')" }}
            >
                {/* CARD CENTRAL */}
                <div
                    className="
            flex flex-col items-center gap-6
            bg-white/10 backdrop-blur-md
            border border-white/20
            rounded-2xl p-8
            shadow-2xl
          "
                >
                    <h1 className="text-2xl font-bold text-white">
                        Minhas Redes
                    </h1>

                    <p className="text-sm text-gray-200 text-center max-w-xs">
                        Me acompanhe nas redes sociais e fale comigo diretamente 💬
                    </p>

                    {/* INSTAGRAM */}
                    <a
                        href="https://instagram.com/born.inverter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
                    >
                        <Image
                            src="/logoinsta2.png"
                            alt="Instagram"
                            width={40}
                            height={40}
                        />
                    </a>

                    {/* WHATSAPP */}
                    <a
                        href="https://wa.me/5524998452833"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
                    >
                        <Image
                            src="/what2.png"
                            alt="WhatsApp"
                            width={45}
                            height={45}
                        />
                    </a>

                    {/* TIKTOK */}
                    <a
                        href="https://tiktok.com/@born.inverter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
                    >
                        <Image
                            src="/logotiktok.png"
                            alt="TikTok"
                            width={45}
                            height={45}
                        />
                    </a>
                </div>

                {/* ESPAÇO EXTRA COM FUNDO (SEM TAILWIND PRA NÃO DAR ERRO) */}
                <div style={{ height: "140px" }} />
            </main>

            {/* RODAPÉ */}

        </div>
    );
}
