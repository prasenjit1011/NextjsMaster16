
import { useTranslations } from 'next-intl';
import { BannerCategory, OurService, ProductCategory, ProductRegular, Testimonial, TotalSale } from '../components/EshopComponents';

export default function Home() {
  const text = useTranslations('HomePage');

  return (
    <>
      <ProductCategory />
      <BannerCategory />
      <ProductRegular />
      <TotalSale />
      <Testimonial />
      <OurService />
    </>
  );
}


