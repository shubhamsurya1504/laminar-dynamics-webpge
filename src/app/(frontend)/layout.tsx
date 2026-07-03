import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laminar Dynamics — Let's Build Something Extraordinary",
  description:
    "UAV prototyping, deep technical consulting, service and repairs. Original designs — real aircraft — fast.",
  keywords: [
    "UAV prototyping",
    "drone consulting",
    "eVTOL",
    "composite airframe",
    "autonomous flight",
    "Laminar Dynamics",
  ],
  openGraph: {
    title: "Laminar Dynamics — Engineering the Future of Autonomous Flight",
    description:
      "UAV prototyping & technical consulting specialists. Build-to-spec composite airframes, flight-ready in weeks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
