import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

import { EdgeStoreProvider } from "@/lib/edgestore";
import { cn } from "@/lib/utils";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Otion",
  description: "Otion, a Notion clone.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
    apple: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon/apple-touch-icon.png",
        href: "/favicon/apple-touch-icon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon_dark/apple-touch-icon.png",
        href: "/favicon_dark/apple-touch-icon.png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Otion",
    statusBarStyle: "black-translucent",
    startupImage: [
      {
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
        url: "/splashscreens/iphone5_splash.png",
      },
      {
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
        url: "/splashscreens/iphone6_splash.png",
      },
      {
        media:
          "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)",
        url: "/splashscreens/iphoneplus_splash.png",
      },
      {
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
        url: "/splashscreens/iphonex_splash.png",
      },
      {
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)",
        url: "/splashscreens/iphonexr_splash.png",
      },
      {
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)",
        url: "/splashscreens/iphonexsmax_splash.png",
      },
      {
        media:
          "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)",
        url: "/splashscreens/ipad_splash.png",
      },
      {
        media:
          "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)",
        url: "/splashscreens/ipadpro1_splash.png",
      },
      {
        media:
          "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)",
        url: "/splashscreens/ipadpro3_splash.png",
      },
      {
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
        url: "/splashscreens/ipadpro2_splash.png",
      },
    ],
  },
  applicationName: "Otion",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1f1f1f" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  manifest: "https://otion-phi.vercel.app/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="otion-theme"
            >
              {children}
              <Toaster position="bottom-right" />
              <ModalProvider />
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
