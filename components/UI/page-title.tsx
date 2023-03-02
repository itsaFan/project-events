import Head from "next/head";

interface titleProps {
  pageTitle: string;
}

export default function PageHead({ pageTitle }: titleProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Find events that might interest you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
