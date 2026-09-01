import type { MetadataRoute } from "next";

const baseUrl = "https://manu-gupta-portfolio.vercel.app"; // TODO: replace with production domain when T26 assigns one

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
