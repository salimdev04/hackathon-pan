import type { Metadata } from "next";
import { Inter, Righteous, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700", "900"], subsets: ["latin"] });
const righteous = Righteous({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GAMEFUN HACKATTON",
  description: "GAMEFUN Mega Hackathon Panafricain Orange",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
