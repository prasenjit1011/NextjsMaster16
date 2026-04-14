import ReduxProvider from '../lib/provider';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <ReduxProvider>
          <nav style={{ display: 'flex', gap: 10 }}>
            <Link href="/">Home</Link>
            <Link href="/aboutus">Aboutus</Link>
            <Link href="/category">Category</Link>
            <Link href="/category/product">Product</Link>
          </nav>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}