import type { Metadata } from "next";
import { Inter, Major_Mono_Display, Rubik_Mono_One, Titillium_Web } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const Titillium  = Titillium_Web({ subsets:['latin'], weight: ['400', '600'] });
const roboto  = Titillium_Web({ subsets:['latin'], weight: ['400', '600'] });
const rubik  = Rubik_Mono_One({ subsets:['latin'],weight: ['400']});
const major  = Major_Mono_Display({ subsets:['latin'],weight: ['400']});

export const metadata: Metadata = {
  title: "AbdulHadi Solimano",
  description: "Portfolio",
  icons:"icon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
