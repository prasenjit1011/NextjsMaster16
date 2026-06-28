
import Counter from '../components/Counter';
import { useTranslations } from 'next-intl';

export default function Home() {
  const text = useTranslations('HomePage');

  return (
    <>
      <section className="hero">
        <h1>{text('title')}</h1>
      </section>
    </>
  );
}