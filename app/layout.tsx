import '../public/eshop/css/bootstrap.min.css';
import '../public/eshop/css/style.css';

import type { Metadata } from 'next';
import Script from 'next/script';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: {
    default: 'Fruitables',
    template: '%s | Fruitables',
  },
  description: 'Fresh products delivered to your doorstep',
  keywords: ['Fruitables', 'Vegetables', 'Fruits', 'Ecommerce'],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@600;800&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />

        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        />

        {/* External CSS Libraries */}
        <link
          rel="stylesheet"
          href="/eshop/lib/lightbox/css/lightbox.min.css"
        />

        <link
          rel="stylesheet"
          href="/eshop/lib/owlcarousel/assets/owl.carousel.min.css"
        />

        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>

        {/* JavaScript Libraries */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"
          strategy="beforeInteractive"
        />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/eshop/lib/easing/easing.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/eshop/lib/waypoints/waypoints.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/eshop/lib/lightbox/js/lightbox.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/eshop/lib/owlcarousel/owl.carousel.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/eshop/js/main.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}