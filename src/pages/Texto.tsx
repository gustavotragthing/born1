import Image from "next/image";
import Link from "next/link";

export default function Texto() {
    return (
        <div className="w-full md:w-1/2 text-justify leading-relaxed text-lg text-gray-200   bg-white/10 backdrop-blur-md
            border border-white/20 rounded-2xl">

            <h1 className="text-3xl font-bold mb-4 text-center text-gray-100">
                Bem-vindo à Born
            </h1>

            <p className="mb-4">
                A <strong>Born</strong> é uma empresa especializada no
                desenvolvimento, manutenção e soluções avançadas em
                <strong> placas inverter</strong>.
            </p>

            <p className="mb-4">
                Atuamos com tecnologia de ponta para garantir eficiência,
                qualidade e alto desempenho em sistemas residenciais e
                industriais.
            </p>

            <p className="mb-4">
                Nossas placas inverter oferecem controle inteligente,
                estabilidade e durabilidade para aplicações como
                ar-condicionado inverter, inversores solares e automação
                industrial.
            </p>

            <p className="text-center font-semibold mt-6">
                Born: potência, controle e tecnologia no mais alto nível.
            </p>

        </div>
    );
}
