/* eslint-disable check-file/folder-naming-convention */
/*
 * Static robots.txt route
 *
 * This route provides a basic robots.txt without requiring BigCommerce API calls.
 * You can customize this content or restore the BigCommerce integration later.
 *
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 *
 */

function parseUrl(url?: string): URL {
  let incomingUrl = '';
  const defaultUrl = new URL('http://localhost:3000/');

  if (url && !url.startsWith('http')) {
    incomingUrl = `https://${url}`;
  }

  return new URL(incomingUrl || defaultUrl);
}

const baseUrl = parseUrl(
  process.env.NEXTAUTH_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || '',
);

export const GET = async () => {
  // Static robots.txt content - customize as needed
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl.origin}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=UTF-8',
    },
  });
};

export const dynamic = 'force-static';
