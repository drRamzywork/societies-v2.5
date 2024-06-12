import Image from "next/image";
import { Inter } from "next/font/google";
import LandingV1 from "@/components/Home/LandingV1";
import Version from "@/components/Home/version";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Head>
        {/* Fonts Links */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={`${inter.className}`}>
        <LandingV1 />
      </main>
    </>
  );
}
