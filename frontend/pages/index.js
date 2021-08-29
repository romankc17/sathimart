import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>New Sathi Mart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="mx-auto">
        {/* Banner */}
        <Banner />
      </main>
    </div>
  );
}
