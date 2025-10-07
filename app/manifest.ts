import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Telegram Mini App Builder",
    short_name: "MiniApp Builder",
    description:
      "Create Telegram Mini Apps without coding — drag & drop builder for small businesses, content creators, and Shopify sellers.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0B1221",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}