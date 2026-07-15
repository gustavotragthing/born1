import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Topo2() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <>
            {/* TOPO */}
            <header
                className="
                    sticky top-0 z-50
                
                    backdrop-blur-md
                    border-b border-white/10
                    shadow-xl
                "
            >
                <div className="max-w-7xl mx-auto h-24 px-6 relative flex items-center justify-center">

                    {/* Menu Hambúrguer */}
                    <button
                        onClick={() => setMenuAberto(true)}
                        className="
        absolute left-6
        flex flex-col gap-1
        p-3
        bg-gray-300
        hover:bg-gray-400
        rounded-xl
        shadow-lg
        transition-all
        duration-300
    "
                        aria-label="Abrir menu"
                    >
                        <span className="w-8 h-1 bg-black rounded"></span>
                        <span className="w-8 h-1 bg-black rounded"></span>
                        <span className="w-8 h-1 bg-black rounded"></span>
                    </button>

                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="222gato.png"
                            alt="Born Eletrônica"
                            width={190}
                            height={70}
                            priority
                            className="object-contain hover:scale-105 transition duration-300"
                        />
                    </Link>

                </div>
            </header>

            {/* Fundo escuro ao abrir menu */}


            {/* Menu Lateral */}
            <aside
                className={`
                    fixed top-0 left-0
                    h-screen w-72
                  backdrop-blur-md
               
                  
              
                    z-50
                    transform transition-transform duration-300 ease-in-out
                    ${menuAberto ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                {/* Cabeçalho do menu */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">

                    <Image
                        src="/222gato.png"
                        alt="Born Eletrônica"
                        width={140}
                        height={60}
                    />

                    <button
                        onClick={() => setMenuAberto(false)}
                        className="text-white text-3xl hover:text-red-400 transition"
                        aria-label="Fechar menu"
                    >
                        ✕
                    </button>
                </div>

                {/* Navegação */}
                <nav className="flex flex-col gap-3 p-6">


                    <Link
                        href="/"
                        onClick={() => setMenuAberto(false)}
                        className="text-white px-4 py-3 rounded-xl hover:bg-blue-600 transition"
                    >
                        🏠 Início
                    </Link>
                    <Link
                        href="/somos/somos"
                        onClick={() => setMenuAberto(false)}
                        className="text-white px-4 py-3 rounded-xl hover:bg-blue-600 transition"
                    >
                        👨‍🔧 Quem Somos
                    </Link>

                    <Link
                        href="/missao/missao"
                        onClick={() => setMenuAberto(false)}
                        className="text-white px-4 py-3 rounded-xl hover:bg-blue-600 transition"
                    >
                        🎯 Nossa Missão
                    </Link>

                    <Link
                        href="/valores/valores"
                        onClick={() => setMenuAberto(false)}
                        className="text-white px-4 py-3 rounded-xl hover:bg-blue-600 transition"
                    >
                        ⭐ Valores
                    </Link>

                    <Link
                        href="/redes/redes"
                        onClick={() => setMenuAberto(false)}
                        className="text-white px-4 py-3 rounded-xl hover:bg-blue-600 transition"
                    >
                        📱 Redes Sociais
                    </Link>

                </nav>

                {/* Rodapé do menu */}
                <div className="absolute bottom-6 left-0 right-0 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} Born Eletrônica
                </div>
            </aside>
        </>
    );
}