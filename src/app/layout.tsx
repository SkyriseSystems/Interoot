import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Responsive from "./components/Responsive";

const font = Roboto({
  weight:['100', '200', '300','400', '500','600','700','800','900'],
  subsets:['latin']
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interoot | Landing page",
  description: "Interoot landing page using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={` ${font.className} antialiased`}>
          <Responsive/>
        {children}
      </body>
    </html>
  );
}
