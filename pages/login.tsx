import Head from "next/head";

function LogingPage() {
  return (
    <>
      <Head>
        <title>Around | Inicia sesión</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Around | Inicia sesión" />
        <meta
          property="og:description"
          content="Espacio de trabajo con términos y flexibles y soluciones híbridas si tu empresa necesita expandirse globalmente o necesita espacio de oficina cerca de ti. Para todo tus formas de trabajo, estamos aqui."
        />
        <meta property="og:image" content="/office.webp" />
        <meta property="og:url" content="https://around.to" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Around" />
      </Head>
      <main
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>LOGIN</h1>
      </main>
    </>
  );
}

export default LogingPage;
