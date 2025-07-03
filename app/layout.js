import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AXIMO Group - Spolehlivé pohony a elektroinstalace na klíč",
  description: "Specialisté na průmyslové elektroinstalace, servis pohonů a dodávky značky PRO-MOTOR. Kompletní řešení včetně stavebních úprav, revizí a technické podpory.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
