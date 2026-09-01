import type { MetadataRoute } from "next";

const baseUrl = "https://portfolio-theta-ten-ez943ji5sr.vercel.app"; // production domain, assigned by Vercel at T26 deploy

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
