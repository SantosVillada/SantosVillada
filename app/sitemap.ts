import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://santosvillada.com/", lastModified: new Date("2026-10-05"), changeFrequency: "monthly", priority: 1 }];
}
