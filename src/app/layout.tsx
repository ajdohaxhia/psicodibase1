import type { Metadata } from "next";
import { Inter, Crimson_Pro, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Inter - Clean, professional sans-serif for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  featureSettings: ["rlig", "calt"],
});

// Crimson Pro - Elegant, warm serif for headlines
const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Geist Mono - For technical/legal text only
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psicologodibase.it"),
  title: {
    default: "Psicologo Di Base | Supporto Psicologico Professionale",
    template: "%s | Psicologo Di Base",
  },
  description:
    "Psicologo Di Base offre supporto psicologico professionale con un approccio umano e attento. Colloqui individuali, sostegno psicologico e percorsi di ascolto con un team di psicologhe qualificate.",
  keywords: [
    "psicologo",
    "supporto psicologico",
    "psicoterapia",
    "colloqui psicologici",
    "aiuto psicologico",
    "ansia",
    "stress",
    "benessere mentale",
    "psicologo Roma",
  ],
  authors: [{ name: "Psicologo Di Base" }],
  creator: "Psicologo Di Base",
  publisher: "Psicologo Di Base",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://psicologodibase.it",
    siteName: "Psicologo Di Base",
    title: "Psicologo Di Base | Supporto Psicologico Professionale",
    description:
      "Supporto psicologico professionale con un approccio umano e attento. Colloqui individuali, sostegno psicologico e percorsi di ascolto.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Psicologo Di Base - Supporto Psicologico Professionale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicologo Di Base | Supporto Psicologico Professionale",
    description:
      "Supporto psicologico professionale con un approccio umano e attento.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://psicologodibase.it",
  },
  category: "Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${crimsonPro.variable} ${geistMono.variable} antialiased font-sans bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
