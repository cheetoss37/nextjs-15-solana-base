import type { Metadata } from "next";

import { Inria_Sans } from "next/font/google";
import { METADATA } from "@/constants/app.const";
import { NextIntlClientProvider } from "next-intl";

import AuthProvider from "@/providers/AuthProvider";
import SolanaProvider from "@/providers/SolanaProvider";
import MainLayout from "@/components/layout/main-layout";
import SplashScreen from "@/components/layout/splash-screen";

import "../globals.css";

const inriaSans = Inria_Sans({
  weight: ["300", "400", "700"],
  variable: "--font-inria-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inriaSans.variable} `}>
        <NextIntlClientProvider>
          <SplashScreen />
          <SolanaProvider>
            <AuthProvider>
              <MainLayout>{children}</MainLayout>
            </AuthProvider>
          </SolanaProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
  openGraph: {
    title: METADATA.title,
    description: METADATA.description,
    images: [
      {
        url: METADATA.imgSrc,
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.title,
    description: METADATA.description,
    images: [METADATA.imgSrc],
    site: "site",
    creator: "@creator",
  },
};
