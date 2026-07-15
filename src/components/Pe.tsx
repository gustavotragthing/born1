import Image from "next/image";
import Link from "next/link";

export default function Pe() {
    return (
        <footer className="bg-slate-950 border-t border-white/10 text-gray-300">

            <div className="max-w-7xl mx-auto px-6 py-14">

                <div className="grid md:grid-cols-4 gap-10">

                    {/* Empresa */}
                    <div>

                        <Image
                            src="/222gato.png"
                            alt="Born Eletrônica"
                            width={170}
                            height={70}
                        />

                        <p className="mt-5 leading-7 text-gray-400">
                            Especialistas em conserto de televisores,
                            Smart TVs, reparo de placas eletrônicas
                            e manutenção especializada.
                        </p>

                    </div>

                    {/* Contato */}
                    <div>

                        <h3 className="text-xl font-bold text-white mb-5">
                            Contato
                        </h3>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3">

                                <Image
                                    src="/what2.png"
                                    alt="WhatsApp"
                                    width={24}
                                    height={24}
                                />

                                <span>(24) 99845-2833</span>

                            </div>

                            <div className="flex items-center gap-3">

                                <Image
                                    src="/email.png"
                                    alt="Email"
                                    width={26}
                                    height={26}
                                />

                                <span>borninverter@gmail.com</span>

                            </div>

                        </div>

                    </div>

                    {/* Redes */}
                    <div>

                        <h3 className="text-xl font-bold text-white mb-5">
                            Redes Sociais
                        </h3>

                        <div className="flex gap-5">

                            <a
                                href="https://instagram.com/born.inverter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition"
                            >
                                <Image
                                    src="/logoinsta2.png"
                                    alt="Instagram"
                                    width={35}
                                    height={35}
                                />
                            </a>

                            <a
                                href="#"
                                className="hover:scale-110 transition"
                            >
                                <Image
                                    src="/face-removebg-preview.png"
                                    alt="Facebook"
                                    width={35}
                                    height={35}
                                />
                            </a>

                            <a
                                href="https://tiktok.com/@born.inverter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition"
                            >
                                <Image
                                    src="/logotiktok.png"
                                    alt="TikTok"
                                    width={35}
                                    height={35}
                                />
                            </a>

                        </div>

                    </div>

                    {/* Pagamentos */}
                    <div>

                        <h3 className="text-xl font-bold text-white mb-5">
                            Pagamentos
                        </h3>

                        <div className="flex flex-wrap gap-3 items-center">

                            <Image
                                src="/strobirob.png"
                                alt="Pix"
                                width={90}
                                height={50}
                            />

                            <Image
                                src="/visa.png"
                                alt="Visa"
                                width={55}
                                height={35}
                            />

                            <Image
                                src="/elo.png"
                                alt="Elo"
                                width={55}
                                height={35}
                            />

                        </div>

                    </div>

                </div>

                {/* Linha */}
                <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-sm text-gray-500">
                        © 2026 Born Eletrônica • Todos os direitos reservados.
                    </p>

                    <p className="text-sm text-gray-500">
                        Desenvolvido por <span className="text-blue-400 font-semibold">Gustavo Miguel</span>
                    </p>

                </div>

            </div>

        </footer>
    );
}