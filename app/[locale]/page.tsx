import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const text = await getTranslations('HomePage');

  return (
    <>
      <section className="hero">
        <h1>{text('title')}</h1>

        <p>{text('description')}</p>

        <Link href="/category/item" className="btn">
          Get Started
        </Link>
      </section>

      <section className="features">
        <div className="card">
          <h3>Fast</h3>
          <p>Optimized performance for the best user experience.</p>
        </div>

        <div className="card">
          <h3>Secure</h3>
          <p>Built with security best practices from the start.</p>
        </div>

        <div className="card">
          <h3>Scalable</h3>
          <p>Designed to grow with your business requirements.</p>
        </div>
      </section>
    </>
  );
}