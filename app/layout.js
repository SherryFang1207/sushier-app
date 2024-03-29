import Header from "@/components/headerSection/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import StateContext from "@/context/StateContext";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sushier",
  description: "Designed and Created by Ziqi Fang. All rights reserved.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/favicon/favicon-32x32.ico" sizes="any" />
      </Head> */}
      <link rel="icon" href="/favicon/favicon-32x32.ico" sizes="any" />
      <body className={inter.className}>
        <main>
          <StateContext>
            <AuthProvider>{children}</AuthProvider>
          </StateContext>

          {/* <p>This is a testing p tag</p> */}

          {/* {children} */}
        </main>
      </body>
    </html>
  );
}
