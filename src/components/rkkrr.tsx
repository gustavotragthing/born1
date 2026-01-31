import Image from "next/image";
import Topo from "@/components/Topo";

export default function Redes() {
    return (

        <div className="">
            <Topo />
            <main className=" min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/eletro.png')" }}>
                <div className="  flex justify-between items-center  justify-center bg-gray-600 rounded-3 ">

                    <a
                        href="https://wa.me/5524998452833"
                        target="_blank"
                        className=" bottom-4 right-  w-30 h-30  bg-pink-500 rounded-full
        flex items-center justify-center shadow-lg hover:scale-120 transition-transform"
                    >
                        <Image
                            src="/logoinsta2.png"
                            alt="WhatsApp"
                            width={80}
                            height={80}
                            className="object-contain filter brightness-0 invert"
                        />
                    </a>

                    {/* BOTÃO WHATSAPP FIXO */}
                    <a

                        href="https://wa.me/5524998452833"
                        target="_blank"
                        className=" bottom-4 right- w-30 h-30 bg-green-500 rounded-full
        flex items-center justify-center shadow-lg hover:scale-120 transition-transform"
                    >
                        <Image
                            src="/what2.png"
                            alt="WhatsApp"
                            width={110}
                            height={110}
                            className=""
                        />
                    </a>

                    {/* BOTÃO WHATSAPP FIXO */}
                    <a
                        href="https://wa.me/5524998452833"
                        target="_blank"
                        className=" bottom-78 right-  w-30 h-30  bg-black rounded-full
        flex items-center justify-center shadow-lg hover:scale-120 transition-transform"
                    >
                        <Image
                            src="/logotiktok.png"
                            alt="WhatsApp"
                            width={120}
                            height={120}
                            className=""
                        />
                    </a>

                    <p className="text-sm text-gray-300 text-center mt-4">

                    </p>
                </div>
            </main>
        </div>
    );
}