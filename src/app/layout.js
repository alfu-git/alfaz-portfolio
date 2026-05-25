import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ParticlesWrapper from "@/components/particlesBg/ParticlesWrapper";
import ScrollProgressBar from "@/components/shared/ScrollProgressBar";
import Navbar from "@/components/navbar/Navbar";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "MD Alfaz | MERN Developer",
  description:
    "MD Alfaz — MERN developer. Expertise in React, Node.js, Express, MongoDB, REST APIs, responsive design, and deployment Vercel View projects and contact for collaboration.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050A12]">
        <ParticlesWrapper />
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
