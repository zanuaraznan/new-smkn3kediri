import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMKN 3 KEDIRI",
  description: "Sekolah Menengah Kejuruan Kediri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} text-zinc-800 bg-zinc-100 antialiased`}>
        <NextTopLoader
          color="#5b2cc9"
          initialPosition={0.1}
          crawlSpeed={50}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={100}
          shadow="0 0 10px #5b2cc9,0 0 5px #5b2cc9"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
