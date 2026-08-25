import type { MetadataRoute } from "next";

const siteUrl = "https://megyesituzifa.hu";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-08-25"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
