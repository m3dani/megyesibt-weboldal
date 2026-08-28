import "./globals.css";
import type { Metadata, Viewport } from "next";

const siteUrl = "https://megyesituzifa.hu";
const title = "Megyesi Bt. | Tűzifa házhozszállítás Szombathely környékén";
const description = "Tűzifa házhozszállítás Nemeskoltáról kb. 30 km-es körzetben. Telefonos rendelés, minimum 3 m³, maximum 6 m³ fuvaronként.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/brand-tree.png", type: "image/png", sizes: "132x132" }],
    shortcut: "/brand-tree.png",
    apple: "/brand-tree.png",
  },
  openGraph: {
    title: "Tűzifa házhozszállítással | Megyesi Bt.",
    description,
    url: "/",
    siteName: "Megyesi Bt.",
    locale: "hu_HU",
    type: "website",
    images: [{ url: "/og.png", width: 1662, height: 946, alt: "Megyesi Bt. – Tűzifa házhozszállítással" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3c29",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
