import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

// Obrigatório com `output: "export"` (Render Static Site) — vira sitemap.xml estático.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacidade`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
