import NextHead from "next/head"

export const Head = () => {
  return (
    <NextHead>
      <title>Nextjs + Fidely UI</title>
      <meta key="title" content="Nextjs + Fidely UI" property="og:title" />
      <meta content="Build modern apps with speed and flexibility" property="og:description" />
      <meta content="Build modern apps with speed and flexibility" name="description" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};