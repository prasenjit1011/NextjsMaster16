import ReduxProvider from '../../lib/provider';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata = {
  title: "My App",
  description: "Next.js App",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
        <ReduxProvider>
          <div style={{ border: "2px solid #b70951", padding: 10, marginTop: 10 }}>
          <h4>Root Layout</h4>
          <NavBar />
          {children}
          </div>
        </ReduxProvider>
  );
}

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', gap: 10 }}>
      <Link href="/">Home</Link>
      <Link href="/demo">Template</Link>
      <Link href="/aboutus">Aboutus</Link>
      <Link href="/category">Category</Link>
      <Link href="/category/item">Item</Link>
      <Link href="/renderpage/ssr">SSR</Link>
      <Link href="/renderpage/ssg">SSG</Link>
      <Link href="/renderpage/isr">ISR</Link>
      <Link href="/renderpage/csr">CSR</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/company">Company</Link>
      <Link href="/hydration">Hydration</Link>
      <Link href="/error">Error</Link>
    </nav>
  );
}

export default RootLayout;