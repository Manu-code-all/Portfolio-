import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://portfolio-theta-ten-ez943ji5sr.vercel.app/sitemap.xml", // production domain, assigned by Vercel at T26 deploy
  };
}
