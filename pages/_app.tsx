import "tailwindcss/tailwind.css";
import type {AppProps} from "next/app";
import Head from "next/head";
import {Auth0Provider} from "@auth0/auth0-react";
import {ThemeProvider} from "next-themes";
import Footer from "@/components/Footer";
import React from "react";
import Navbar from "@/components/Navbar";

export const runtime = "experimental-edge"

export default function MyApp({Component, pageProps}: AppProps) {
    return (

        <ThemeProvider attribute="class" defaultTheme="system">
            <Auth0Provider
                clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
                domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
            >
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta
                        name="description"
                        content="Welcome to my portfolio and blog. Take a look to learn more about my experience and ideas."
                    />
                    <title>Carter&#39;s Portfolio</title>
                </Head>

                <Navbar></Navbar>
                <div className="mt-20 mb-20 w-2/3 justify-center flex m-auto min-h-screen">
                    <Component {...pageProps} />
                </div>
                <Footer></Footer>
            </Auth0Provider>
        </ThemeProvider>
    );
}
