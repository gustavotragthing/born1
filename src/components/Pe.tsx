import Image from "next/image";
import Link from "next/link";

export default function Pe() {
    return (
        <>
            <section className="bg-white py-2 border-t">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">

                        <Image src="/lg.png" alt="LG" width={100} height={50} />
                        <Image src="/sung.png" alt="Samsung" width={100} height={50} />
                        <Image src="/eng.png" alt="Elgin" width={100} height={50} />
                        <Image src="/gree.png" alt="Gree" width={100} height={50} />
                        <Image src="/carrier.png" alt="Carrier" width={100} height={50} />
                        <Image src="/gato.png" alt="Agratto" width={100} height={50} />
                        <Image src="/fugi.png" alt="Fujitsu" width={100} height={50} />
                        <Image src="/mide.png" alt="Midea" width={100} height={50} />
                        <Image src="/uld.png" alt="Consul" width={100} height={50} />
                        <Image src="/dai.png" alt="Daikin" width={100} height={50} />

                    </div>
                </div>
            </section>


       
            <footer className="bg-blue-900 text-gray-200 py-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">

                   
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-white">Entre em contato</h3>

                        <div className="flex items-center gap-3">
                            <Image src="/what2.png" alt="WhatsApp" width={22} height={22} />
                            <span>(+55)24 99845-2833</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Image src="/email.png" alt="Email" width={32} height={32} />
                            <span>borninverter@gmail.com</span>
                        </div>
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-white">
                            Redes sociais
                        </h3>

                        <div className="flex gap-4">

                            <Image src="/logoinsta2.png" alt="Instagram" width={26} height={26} />



                            <Image src="/face-removebg-preview.png" alt="Facebook" width={36} height={36} />



                            <Image src="/logotiktok.png" alt="TikTok" width={26} height={26} />

                        </div>
                    </div>

                  
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

                 
                    <div className="flex flex-col gap-3">
                        <Image src="/born67-removebg-preview.png" alt="Logo" width={120} height={60} />
                        <p className="text-sm text-gray-400">
                            © 2026 • Todos os direitos reservados
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <br />
                        <p className="text-sm text-gray-400">
                            @Gustavo Miguel
                        </p>
                    </div>

                </div>
            </footer>
        </>
    );
}






















