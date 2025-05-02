import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "url shortener",
  description: "Generate Url with short link",
  icons: {
    icon: "/favicon.png",
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
  style: ["normal", "italic"],
  display: "swap", 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
