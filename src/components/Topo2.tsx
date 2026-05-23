import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Topo() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <>
       
            <header className="relative flex items-center justify-center bg-[#F4F4F4] h-30 px-6">
            
                <button
                    onClick={() => setMenuAberto(true)}
                    className="absolute left-6 flex flex-col gap-1"
                >
                    <span className="w-8 h-1 bg-black rounded"></span>
                    <span className="w-8 h-1 bg-black rounded"></span>
                    <span className="w-8 h-1 bg-black rounded"></span>
                </button>

    
                <Image
                    src="/born67.png"
                    alt="Logo Born"
                    width={190}
                    height={40}
                    className="object-contain"
                />
            </header>

   
            {menuAberto && (
                <div
                    onClick={() => setMenuAberto(false)}
                    className="fixed inset-0 bg-white/50 z-40"
                />
            )}

            <aside
                className={`fixed top-0 left-0 h-full bg-white/10 backdrop-blur-md
                border border-white/20 z-50 shadow-lg
                transform transition-transform duration-300
                ${menuAberto ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="p-6 flex justify-between items-center">
                    <Image
                        src="/born67-removebg-preview.png"
                        alt="Logo"
                        width={120}
                        height={60}
                    />
                    <button
                        onClick={() => setMenuAberto(false)}
                        className="text-xl text-white"
                    >
                        ✕
                    </button>
                </div>

                <nav className="flex flex-col gap-6 p-6 text-lg">
                    <Link
                        href="/redes/redes"
                        translate="no"
                        className="text-white hover:underline hover:underline-offset-4 transition"
                    >
                        Redes Sociais
                    </Link>

                    <Link
                        href="/missao/missao"
                        translate="no"
                        className="text-white hover:underline hover:underline-offset-4 transition"
                    >
                        Nossa Missão
                    </Link>

                    <Link
                        href="/somos/somos"
                        translate="no"
                        className="text-white hover:underline hover:underline-offset-4 transition"
                    >
                        Quem Somos
                    </Link>

                    <Link
                        href="/valores/valores"
                        translate="no"
                        className="text-white hover:underline hover:underline-offset-4 transition"
                    >
                        Valores da Empresa
                    </Link>
                </nav>
            </aside>
        </>
    );
}
