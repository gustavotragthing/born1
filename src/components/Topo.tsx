import Image from "next/image";
import Link from "next/link";

export default function Topo() {
    return (
        <header className="h-30 flex items-center justify-center bg-gray-100">
            <Image src="/born67.png" alt="Born" width={190} height={40} />

            <Link href="/" className="absolute right-6 ">
                <Image
                    src="/casa.sem.png"
                    alt="Logo "
                    width={80}
                    height={0}
                    className="object-contain"
                    rounded-xl

                />

            </Link>
        </header>
    );
}
