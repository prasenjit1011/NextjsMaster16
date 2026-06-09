
import Counter from '../components/Counter';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <>
      <section className="hero">
        <h1>{t('title')}</h1>

        <p>{t('description')}</p>

        <Counter pageName={t('counterPage')} />
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