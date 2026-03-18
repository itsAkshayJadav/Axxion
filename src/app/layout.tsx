import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import { BackgroundEffects } from "@/components/site/home/background-effects";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axxion | AI-Native Engineering for Startups and SMEs",
  description:
    "Axxion helps startups and SMEs launch websites, products, internal tools, and AI automations faster with AI-native engineers and human-reviewed quality.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="relative isolate overflow-x-clip">
        <BackgroundEffects />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
