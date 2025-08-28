/* eslint-disable check-file/folder-naming-convention */
/*
 * Static sitemap.xml route
 *
 * This route provides a basic sitemap without requiring BigCommerce API calls.
 * You can customize this content or restore the BigCommerce integration later.
 */

function parseUrl(url?: string): string {
  let incomingUrl = '';
  const defaultUrl = 'http://localhost:3000';

  if (url && !url.startsWith('http')) {
    incomingUrl = `https://${url}`;
  }

  return incomingUrl || defaultUrl;
}

const baseUrl = parseUrl(
  process.env.NEXTAUTH_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || '',
);

export const GET = async () => {
  // Static sitemap.xml content - customize as needed
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-pages.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-products.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-categories.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
