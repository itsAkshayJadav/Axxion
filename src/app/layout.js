import "./globals.css";

export const metadata = {
  title: "AXXION | AI + Human Software Studio",
  description:
    "AXXION builds websites, web apps, and mobile products for startups and SMEs using AI-accelerated delivery with senior engineering oversight.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
