import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {Providers} from "@/app/providers";
import React from "react";

export const metadata: Metadata = {
    title: "Carter's Portfolio",
    description: "My personal website, explore it to learn about me and my experience.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Providers>
            <Navbar></Navbar>
            <div className="mt-40 w-1/2 justify-center flex m-auto min-h-screen">
                {children}
            </div>
            <Footer></Footer>
        </Providers>

        </body>
        </html>
    );
}
