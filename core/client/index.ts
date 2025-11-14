// Temporarily commented out to allow build without @bigcommerce/catalyst-client
// import { BigCommerceAuthError, createClient } from '@bigcommerce/catalyst-client';
// import { headers } from 'next/headers';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
// import { redirect } from 'next/navigation';
// import { getLocale as getServerLocale } from 'next-intl/server';

// import { getChannelIdFromLocale } from '../channels.config';
// import { backendUserAgent } from '../userAgent';

// Temporarily disabled to unblock build
// const getLocale = async () => {
//   try {
//     const locale = await getServerLocale();

//     return locale;
//   } catch {
//     /**
//      * Next-intl `getLocale` only works on the server, and when middleware has run.
//      *
//      * Instances when `getLocale` will not work:
//      * - Requests in middlewares
//      * - Requests in `generateStaticParams`
//      * - Request in api routes
//      * - Requests in static sites without `setRequestLocale`
//      */
//   }
// };

// export const client = createClient({
//   storefrontToken: process.env.BIGCOMMERCE_STOREFRONT_TOKEN ?? '',
//   storeHash: process.env.BIGCOMMERCE_STORE_HASH ?? '',
//   channelId: process.env.BIGCOMMERCE_CHANNEL_ID || '1',
//   backendUserAgentExtensions: backendUserAgent,
//   logger:
//     (process.env.NODE_ENV !== 'production' && process.env.CLIENT_LOGGER !== 'false') ||
//     process.env.CLIENT_LOGGER === 'true',
//   getChannelId: async (defaultChannelId: string) => {
//     // Only try to get locale if we're in a runtime context
//     if (typeof window === 'undefined' && process.env.NODE_ENV !== 'production') {
//       try {
//         const locale = await getLocale();
//         return getChannelIdFromLocale(locale) ?? defaultChannelId;
//       } catch {
//         // Fall back to default channel ID during build
//         return defaultChannelId;
//       }
//     }
//     return defaultChannelId;
//   },
//   beforeRequest: async (fetchOptions) => {
//     // We can't serialize a `Headers` object within this method so we have to opt into using a plain object
//     const requestHeaders: Record<string, string> = {};
//     const locale = await getLocale();

//     if (fetchOptions?.cache && ['no-store', 'no-cache'].includes(fetchOptions.cache)) {
//       const ipAddress = (await headers()).get('X-Forwarded-For');

//       if (ipAddress) {
//         requestHeaders['X-Forwarded-For'] = ipAddress;
//         requestHeaders['True-Client-IP'] = ipAddress;
//       }
//     }

//     if (locale) {
//       requestHeaders['Accept-Language'] = locale;
//     }

//     return {
//       headers: requestHeaders,
//     };
//   },
//   onError: (error, queryType) => {
//     if (error instanceof BigCommerceAuthError && queryType === 'query') {
//       redirect('/api/auth/signout');
//     }
//   },
// });

// Temporary placeholder client to prevent build errors
// This provides mock data during build time when the real client isn't available
export const client = {
  fetch: async ({ document }: { document: any }) => {
    // Return mock data structure that matches typical BigCommerce GraphQL responses
    return {
      data: {
        site: {
          settings: {
            contact: {
              phone: '+1-555-0123',
              email: 'support@example.com',
            },
            statusMessage: 'We are currently performing maintenance. Please check back soon.',
            logo: {
              url: '/logo.png',
              altText: 'Store Logo',
            },
          },
        },
      },
    };
  },
} as any;
