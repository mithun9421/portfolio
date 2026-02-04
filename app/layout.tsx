import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mithun Muraleedharan — Senior Software Engineer",
    template: "%s — Mithun Muraleedharan",
  },
  description:
    "Senior Software Engineer at PayPal specializing in Privacy platforms, Microfrontends, and scalable web applications. 7+ years building frontend systems at scale.",
  keywords: [
    "Mithun Muraleedharan",
    "Senior Software Engineer",
    "PayPal",
    "Privacy Engineering",
    "Microfrontends",
    "React",
    "TypeScript",
    "Frontend Architecture",
  ],
  authors: [{ name: "Mithun Muraleedharan" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mithun Muraleedharan — Senior Software Engineer",
    description:
      "Senior Software Engineer at PayPal. Building privacy platforms and scalable frontend systems.",
    siteName: "Mithun Muraleedharan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithun Muraleedharan — Senior Software Engineer",
    description:
      "Senior Software Engineer at PayPal. Building privacy platforms and scalable frontend systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
