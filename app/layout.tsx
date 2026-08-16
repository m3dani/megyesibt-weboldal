import "./globals.css";
import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host") ?? "localhost";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;
  const title = "Tűzifa házhozszállítás Nemeskolta környékén | Megyesi Bt.";
  const description = "Tűzifa házhozszállítás Nemeskoltáról kb. 30 km-es körzetben. Telefonos rendelés, minimum 3 m³, maximum 6 m³ fuvaronként.";

  return {
    title,
    description,
    keywords: ["tűzifa házhozszállítás", "Nemeskolta", "Szombathely tűzifa", "Körmend tűzifa", "Vasvár tűzifa", "Sárvár tűzifa", "Vép tűzifa", "kályhakész tűzifa"],
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title: "Tűzifa házhozszállítással | Megyesi Bt.", description, locale: "hu_HU", type: "website", images: [{ url: socialImage, width: 1662, height: 946, alt: "Megyesi Bt. – Tűzifa házhozszállítással" }] },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}

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
