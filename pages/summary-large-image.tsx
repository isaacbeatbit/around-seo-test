import Head from "next/head";

function SummaryLargeImage() {
  return (
    <>
      <Head>
        {/* <title>Around | Summary with large image</title> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@around_app" />
        <meta name="twitter:creator" content="@ar_creator_1" />
        <meta
          name="twitter:title"
          content="Around | Summary with large image"
        />
        <meta
          name="twitter:description"
          content="Espacio de trabajo con términos y flexibles y soluciones híbridas si tu empresa necesita expandirse"
        />
        <meta name="twitter:image" content="https://epochs.live/office.gif" />
      </Head>
      <main>
        <h1>summary large image</h1>
      </main>
    </>
  );
}

export default SummaryLargeImage;
