import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://safetyof.ai';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/compliance`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/regulatory`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/scanner`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/checklist`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/eu-ai-act`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/eu-ai-act/article-50`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/eu-ai-act/penalty-calculator`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/vs-drata`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/vs-vanta`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/medai-health`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/talentflow`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/clearpath-lending`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/docs`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/docs/api`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/docs/sdk`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/partners`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/referral`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/support`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/press`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/status`, lastModified, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${baseUrl}/blog/eu-ai-act-complete-guide`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/article-50-watermarking`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/ai-risk-classification`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/eu-ai-act-penalties`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/mcp-compliance-automation`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.7 },
  ];
}
