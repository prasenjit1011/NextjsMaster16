import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const messages  = await getMessages();
  const locale    = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          Langaage : {locale}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}