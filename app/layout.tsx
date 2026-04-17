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
            <Link href="/renderpage/ssr">SSR</Link>
            <Link href="/renderpage/ssg">SSG</Link>
            <Link href="/renderpage/isr">ISR</Link>
            <Link href="/renderpage/csr">CSR</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}