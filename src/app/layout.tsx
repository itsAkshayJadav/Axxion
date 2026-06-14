import type { Metadata } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackgroundEffects } from "@/components/site/home/background-effects";
import "./globals.css";

const themeInitializer = `
  (() => {
    const getSystemTheme = () => window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";

    try {
      const savedTheme = window.localStorage.getItem("axxion-theme");
      const nextTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : getSystemTheme();
      document.documentElement.dataset.theme = nextTheme;
    } catch {
      document.documentElement.dataset.theme = getSystemTheme();
    }
  })();
`;

export const metadata: Metadata = {
  title: "Axxion | AI-Native Engineering for Startups and MSMEs",
  description:
    "Axxion helps startups and MSMEs launch websites, products, internal tools, and AI automations faster with AI-native engineers and human-reviewed quality.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-theme="dark" lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
      </head>
      <body className="relative isolate overflow-x-clip">
        <ThemeProvider>
          <BackgroundEffects />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
