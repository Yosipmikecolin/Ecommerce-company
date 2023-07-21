import type { AppProps } from "next/app";
import { Inter } from 'next/font/google'
import '../app/globals.css'
import Header from "@/components/header/Header";
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section className={inter.className}>
      <Header/>
      <Component {...pageProps} />
    </section>
  );
}
