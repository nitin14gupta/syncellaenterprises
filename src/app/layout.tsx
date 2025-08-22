
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syncella Enterprise Pvt. Ltd. | Building Innovative Products in India",
  description:
    "Syncella Enterprise is a product-based company from India, creating innovative solutions like Jilzo and Safarsaathi. Discover our vision and future products.",
  keywords: [
    "Syncella Enterprise",
    "Syncella Enterprise Pvt Ltd",
    "Syncella India",
    "Jilzo by Syncella",
    "Safarsaathi by Syncella",
    "Tech startup in India",
    "Product based company in India",
    "Innovative startups India",
    "House party app India",
    "Travel safety app India",
    "Syncella products",
    "Syncella company website",
    "Syncella technologies",
    "Digital product company India",
    "New startups in Mumbai",
  ],
  openGraph: {
    title: "Syncella Enterprise Pvt. Ltd. | Building Innovative Products in India",
    description:
      "Syncella Enterprise is a product-based company from India, creating innovative solutions like Jilzo and Safarsaathi. Discover our vision and future products.",
    url: "https://syncella.com/",
    siteName: "Syncella Enterprise",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syncella Enterprise Pvt. Ltd. | Building Innovative Products in India",
    description:
      "Syncella Enterprise is a product-based company from India, creating innovative solutions like Jilzo and Safarsaathi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {/* Page-level transitions */}
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
