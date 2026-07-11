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
          <h3>{text('title1')}</h3>
          <p>{text('msg1')}</p>
        </div>

        <div className="card">
          <h3>{text('title2')}</h3>
          <p>{text('msg2')}</p>
        </div>

        <div className="card">
          <h3>{text('title3')}</h3>
          <p>{text('msg3')}</p>
        </div>
      </section>
    </>
  );
}