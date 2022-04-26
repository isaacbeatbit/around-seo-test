import Head from "next/head";

function LogingPage() {
  return (
    <>
      <Head>
        <title>Around | Inicia sesión</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Around | Inicia sesión" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/office.avif" />
        <meta property="og:url" content="https://around.to/login" />
        <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        />
        <meta
          property="og:image"
          content="https://ia.media-imdb.com/images/rock.jpg"
        />
      </Head>
      <main
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1>LOGIN</h1>
      </main>
    </>
  );
}

export default LogingPage;
