import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://manu-gupta-portfolio.vercel.app/sitemap.xml", // TODO: update domain when T26 assigns production URL
  };
}
