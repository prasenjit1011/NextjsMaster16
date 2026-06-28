import '../public/eshop/css/bootstrap.min.css';
import '../public/eshop/css/style.css';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Fruitables',
    template: '%s | Fruitables',
  },
  description: 'Fresh products delivered to your doorstep',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}