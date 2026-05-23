import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Google verification */}
        <meta
          name="google-site-verification"
          content="CAw45MoczejdbLpUtGg17HdZfEXms8ZguMQfEgpuoD8"
        />

        {/* SEO básico */}
        <meta
          name="description"
          content="Born Eletrônica - Especialistas em manutenção e reparo eletrônico"
        />

        <meta
          name="keywords"
          content="eletrônica, conserto, manutenção, inversor, placas, ar-condicionado"
        />

        <meta name="author" content="Born Eletrônica" />

        {/* Favicon */}
        <link rel="icon" href="/favicon_64x64.png" />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
