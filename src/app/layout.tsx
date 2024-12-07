"use client";

import localFont from "next/font/local";
import "./globals.css";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true);
      console.log(loading);
    }, 2000);
    return () => clearTimeout(timeout);
  });

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://i.icomoon.io/public/temp/4bae7f1763/UntitledProject/style.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col justify-center gap-5 lg:flex-row w-full lg:h-[861px] h-full overflow-hidden">
            {!loading ? (
              <>
                <div className="max-w-[800px] lg:w-[55%] mt-[135px] p-4 w-full h-full">
                  <div className="flex flex-col items-center h-full">
                    <div className="w-[514px] h-full">
                      <div className="w-[114px] h-[63px] shimmer"></div>
                      <div className="w-[476px] h-[30px] mt-10 rounded-lg mb-2 shimmer"></div>
                      <div className="w-[476px] h-[10px] rounded-lg mt-4 mb-2 shimmer"></div>
                      <div className="w-[476px] h-[56px] rounded-lg mt-10 mb-28 shimmer"></div>
                      <div className="w-[476px] h-[56px] rounded-lg mt-10 shimmer"></div>
                      <div className="w-[476px] h-[56px] rounded-lg mt-4 shimmer"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full max-w-[800px] lg:w-[55%] mt-[135px] p-4">
                  <div className="w-[514px]"></div>
                </div>
              </>
            ) : (
              <>
                {children}
                <Hero />
              </>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
