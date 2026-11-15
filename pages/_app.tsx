import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const runtime = "experimental-edge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <Auth0Provider
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Welcome to my portfolio and blog. Take a look to learn more about my experience and ideas."
          />
          <title>Carter&#39;s Portfolio</title>
        </Head>

        <div
          className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen flex flex-col bg-canvas text-ink`}
        >
          <Navbar />
          <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 sm:py-16">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </Auth0Provider>
    </ThemeProvider>
  );
}
