import type { Metadata, Viewport } from "next";
import {
  Crimson_Text,
  Montserrat,
  Lato,
  Noto_Sans_Symbols_2,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const crimsonText = Crimson_Text({
  weight: "400",
  variable: "--font-crimson-text",
});

const montserrat = Montserrat({ weight: "900", variable: "--font-montserrat" });

const jetBrainsMono = JetBrains_Mono({
  weight: "700",
  variable: "--font-jetbrains-mono",
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const notoSymbol = Noto_Sans_Symbols_2({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-noto-symbol",
});

export const metadata: Metadata = {
  title: "Francis Radford",
  description: "My personal website showcasing some of projects and skills.",
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonText.variable} ${montserrat.variable} ${lato.variable} ${notoSymbol.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <div className="flex flex-col justify-between w-full h-full min-h-screen">
          <Header />
          <main className="flex flex-col items-center justify-center max-w-(--max-content-width) mt-16 mx-auto px-4 md:px-0 w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
