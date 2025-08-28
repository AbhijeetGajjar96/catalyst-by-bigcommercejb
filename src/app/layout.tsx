import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BigCommerce Storefront',
  description: 'Custom BigCommerce storefront built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
