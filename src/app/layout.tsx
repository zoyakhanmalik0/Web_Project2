import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "techgaur",
  description: "Acciobyte offers expert web and mobile app development, creative graphic design, and professional penetration testing services. Build secure, stunning, and high-performing digital solutions with our skilled team.",
  keywords: "web development services,mobile app development,graphic design agency,penetration testing company,Next.js developers,TypeScript development,UI/UX design,cybersecurity services,Acciobyte,tailored software solutions",
  authors: [{ name: "Acciobyte" }],
  robots: "index, follow",
  openGraph: {
    title: "Acciobyte – Web, App, Design & Pen Testing Experts",
    description: "Build stunning websites and apps, get custom graphics, and ensure cybersecurity with Acciobyte's full-service digital solutions.",
    url: "https://www.acciobyte.com",
    siteName: "Acciobyte",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Acciobyte – Web, App, Design & Pen Testing Experts",
    description: "Build stunning websites and apps, get custom graphics, and ensure cybersecurity with Acciobyte's full-service digital solutions.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <body
        className={"antialiased bg-black text-white font-sans"}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
