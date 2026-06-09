import Counter from '..componentsCounter';
import {getTranslations} from 'next-intlserver';

export default async function Home() {
  const t = await getTranslations('HomePage');

  return (
    div
      h1{t('title')}h1
      Counter pageName={t('counterPage')} 
    div
  );
}