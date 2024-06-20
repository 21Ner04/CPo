import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pizzapalace.ru",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://pizzapalace.ru/contacts",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

  ]
}
