import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./component/Footer";
import Headerr from "./component/Headerr";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luna Creative Studio",
  description: "Luna Creative Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <meta name="google-site-verification" content="iFlmk5BIUtKfwX0184nKEpPfRhGTR63EBxU1hq0H1hw" />
        <meta name="google-site-verification" content="iFlmk5BIUtKfwX0184nKEpPfRhGTR63EBxU1hq0H1hw" />
        <meta name="msvalidate.01" content="16D60D394CE146C4B19F0AB4ECEE6B0A" />
      </head>
      <body className={inter.className}>
        <Headerr />
        {children}
        <Footer />
      </body>
    </html>
  );
}
