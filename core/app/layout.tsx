import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BigCommerce Catalyst',
  description: 'BigCommerce Catalyst Storefront',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

