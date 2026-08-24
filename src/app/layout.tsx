import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pedromendeslima.vercel.app"),
  title: {
    default: "Pedro Mendes Lima | Desenvolvedor Fullstack",
    template: "%s | Pedro Mendes Lima",
  },
  description:
    "Portfólio de Pedro Mendes Lima, desenvolvedor fullstack. Interfaces com React, Next.js e TypeScript; APIs com Node.js, Express, Java e Spring Boot.",
  keywords: [
    "Pedro Mendes Lima",
    "desenvolvedor fullstack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Java",
    "Spring Boot",
  ],
  authors: [{ name: "Pedro Mendes Lima", url: "https://github.com/uPedroLima11" }],
  creator: "Pedro Mendes Lima",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Pedro Mendes Lima | Desenvolvedor Fullstack",
    description:
      "Interfaces com React, Next.js e TypeScript; APIs com Node.js, Express, Java e Spring Boot.",
    siteName: "Pedro Mendes Lima",
    images: [{ url: "/eu2.jpg", width: 1931, height: 1787, alt: "Pedro Mendes Lima" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Mendes Lima | Desenvolvedor Fullstack",
    description:
      "Interfaces com React, Next.js e TypeScript; APIs com Node.js, Express, Java e Spring Boot.",
    images: ["/eu2.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
