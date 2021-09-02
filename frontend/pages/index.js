import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Categories from "../components/categories/Categories";
import Header from "../components/Header/Header";
import Poster from "../components/Poster/Poster";
import TodaysDeal from "../components/TodaysDeal/TodaysDeal";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>New Sathi Mart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Banner */}
      <div></div>

      <main className="max-w-7xl mx-auto pl-2 pr-2 md:pr-0 md:pl-0 mb-6 p-2">
        <Banner />
        <Categories />

        <TodaysDeal />
        <Poster image="/Posters/sathimartPoster.jpeg" />
      </main>
    </div>
  );
}
