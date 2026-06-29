import type { Metadata } from "next";
import { Newsreader, Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";



const editorsNote = localFont({
  src: [
    { path: "./fonts/EditorsNote-Hairline.otf", weight: "100", style: "normal" },
    { path: "./fonts/EditorsNote-HairlineItalic.otf", weight: "100", style: "italic" },
    { path: "./fonts/EditorsNote-Thin.otf", weight: "200", style: "normal" },
    { path: "./fonts/EditorsNote-ThinItalic.otf", weight: "200", style: "italic" },
    { path: "./fonts/EditorsNote-Extralight.otf", weight: "250", style: "normal" },
    { path: "./fonts/EditorsNote-ExtralightItalic.otf", weight: "250", style: "italic" },
    { path: "./fonts/EditorsNote-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/EditorsNote-LightItalic.otf", weight: "300", style: "italic" },
    { path: "./fonts/EditorsNote-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/EditorsNote-Italic.otf", weight: "400", style: "italic" },
    { path: "./fonts/EditorsNote-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/EditorsNote-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "./fonts/EditorsNote-Semibold.otf", weight: "600", style: "normal" },
    { path: "./fonts/EditorsNote-SemiboldItalic.otf", weight: "600", style: "italic" },
    { path: "./fonts/EditorsNote-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/EditorsNote-BoldItalic.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-editors-note",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hephzibah-Luxe",
  description: "Event planning and design studio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${editorsNote.variable} ${newsreader.variable} ${lato.variable}`}>
      <body className="font-body bg-background text-primary antialiased">
          {children}
      </body>
    </html>
  );
}