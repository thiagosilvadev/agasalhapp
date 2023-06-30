import Link from "next/link";
import "./globals.css";

import styles from "./header.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "AgasalhApp",
  description: "Rede de Solidariedade para doação de agasalhos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header className={styles.header}>
          <Link className={styles.logo} href="/">
            Agasalha<span>App</span>
          </Link>
          {/* <div className={styles.avatar}>
            <span className={styles.avatar__fallback} />
          </div> */}
        </header>
        {children}
      </body>
    </html>
  );
}
