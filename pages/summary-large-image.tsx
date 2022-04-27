import Head from "next/head";

function SummaryLargeImage() {
  return (
    <>
      <Head>
        <title>Around | Summary with large image</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@around_app" />
        <meta name="twitter:creator" content="@ar_creator_1" />
        <meta
          name="twitter:image"
          content="office.gif"
        />
      </Head>
      <main>
        <h1>summary large image</h1>
      </main>
    </>
  );
}

export default SummaryLargeImage;
