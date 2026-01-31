import Image from "next/image";
import Link from "next/link";

export default function Pe() {
    return (
        <>
            {/* ===== MARCAS DE AR CONDICIONADO ===== */}
            <section className="bg-white py-0,02 border-t">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-center text-xl font-semibold text-gray-800 mb-6">

                    </h3>

                    <div className="flex  items-center justify-center gap-8">
                        {/* Substitua pelos logos das marcas */}
                        <Image src="/lg.png" alt="LG" width={120} height={60} />
                        <Image src="/sung.png" alt="Samsung" width={120} height={60} />
                        <Image src="/eng.png" alt="Elgin" width={120} height={60} />
                        <Image src="/gree.png" alt="Gree" width={120} height={60} />
                        <Image src="/carrier.png" alt="Gree" width={120} height={60} />
                        <Image src="/gato.png" alt="Gree" width={120} height={60} />
                        <Image src="/fugi.png" alt="Gree" width={120} height={60} />
                        <Image src="/mide.png" alt="Gree" width={120} height={60} />
                        <Image src="/uld.png" alt="Gree" width={120} height={60} />
                        <Image src="/dai.png" alt="Gree" width={120} height={60} />
                    </div>
                </div>
            </section>

            {/* ===== RODAPÉ ===== */}
            <footer className="bg-blue-900 text-gray-200 py-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">

                    {/* Contato */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-white">Entre em contato</h3>

                        <div className="flex items-center gap-3">
                            <Image src="/what2.png" alt="WhatsApp" width={22} height={22} />
                            <span>(+55)24 99845-2833</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Image src="/email.png" alt="Email" width={32} height={32} />
                            <span>contato@seudominio.com</span>
                        </div>
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-white">
                            Redes sociais
                        </h3>

                        <div className="flex gap-4">
                            <a href="https://instagram.com" target="_blank">
                                <Image src="/logoinsta2.png" alt="Instagram" width={26} height={26} />
                            </a>

                            <Link href="#">
                                <Image src="/face-removebg-preview.png" alt="Facebook" width={36} height={36} />
                            </Link>

                            <a href="https://tiktok.com" target="_blank">
                                <Image src="/logotiktok.png" alt="TikTok" width={26} height={26} />
                            </a>
                        </div>
                    </div>

                    {/* Formas de pagamento */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-white">
                            Formas de pagamento
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            <Image src="/strobirob.png" alt="Pix" width={100} height={94} />
                            <Image src="/visa.png" alt="Visa" width={60} height={84} />
                            <Image src="/elo.png" alt="Elo" width={60} height={84} />

                        </div>
                    </div>

                    {/* Logo / Direitos */}
                    <div className="flex flex-col gap-3">
                        <Image src="/born67-removebg-preview.png" alt="Logo" width={120} height={60} />
                        <p className="text-sm text-gray-400">
                            © 2026 • Todos os direitos reservados
                        </p>
                    </div>

                </div>
            </footer>
        </>
    );
}






















