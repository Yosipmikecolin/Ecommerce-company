import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import "../app/globals.css";
import Header from "@/components/header/Header";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section className={poppins.className}>
      <Header />
      <Component {...pageProps} />
    </section>
  );
}
