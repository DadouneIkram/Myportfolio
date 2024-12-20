import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Image from "next/image";

const inter = Poppins({ weight: '400', subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden bg-contain bg-center ${inter.className}`} style={{ backgroundImage: 'url(/images/image2.png)' }}>

        <div className="relative w-full">
          <div className="absolute -z-10 w-full">
            <Image
              src="/images/image2.png"
            alt="backgroundimage"
             className="w-full" 
             width={1000} 
             height={1000} />
          </div>
        </div>

        <Navbar />
        <div className="text-white">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
