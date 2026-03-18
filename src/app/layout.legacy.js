import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const themeInitializer = `
  (() => {
    try {
      const savedTheme = window.localStorage.getItem("axxion-theme");
      const nextTheme = savedTheme === "light" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
    } catch {
      document.documentElement.dataset.theme = "dark";
    }
  })();
`;

export const metadata = {
  title: "AXXION | AI + Human Software Studio",
  description:
    "AXXION builds websites, web apps, and mobile products for startups and SMEs using AI-accelerated delivery with senior engineering oversight.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
