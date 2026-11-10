import type { MetadataRoute } from "next";
import { getProjectsData } from "@/data/projectsData";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://diba-portfolio-2026.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const projects = getProjectsData("en");

  const staticRoutes: MetadataRoute.Sitemap = routing.locales.flatMap(
    (locale) => [
      {
        url: `${BASE_URL}/${locale}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 1.0,
        alternates: {
          languages: {
            en: `${BASE_URL}/en`,
            id: `${BASE_URL}/id`,
          },
        },
      },
      {
        url: `${BASE_URL}/${locale}/about`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: {
            en: `${BASE_URL}/en/about`,
            id: `${BASE_URL}/id/about`,
          },
        },
      },
    ],
  );

  const projectRoutes: MetadataRoute.Sitemap = routing.locales.flatMap(
    (locale) =>
      projects.map((project) => ({
        url: `${BASE_URL}/${locale}/projects/${project.slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.9,
        alternates: {
          languages: {
            en: `${BASE_URL}/en/projects/${project.slug}`,
            id: `${BASE_URL}/id/projects/${project.slug}`,
          },
        },
      })),
  );

  return [...staticRoutes, ...projectRoutes];
}
