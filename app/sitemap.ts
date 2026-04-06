import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://thefleshrobot.com';
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/dr-wallach`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/protocols`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/shop`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/health-eval`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
