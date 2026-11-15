import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          key="description"
          name="description"
          content="Carter Speerschneider — Computer Science student at USF seeking Full-Stack Software Engineering internships. Experience with TypeScript, React, TanStack, Hono, Go, Python, and PostgreSQL."
        />
        <title key="title">Carter Speerschneider — Portfolio</title>
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
    </ThemeProvider>
  );
}
