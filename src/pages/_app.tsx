import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import "./globals.css";
import styles from "./header.module.css";
import Link from "next/link";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          Agasalha<span>App</span>
        </Link>
      </header>
      <Component {...pageProps} />;
    </main>
  );
}
