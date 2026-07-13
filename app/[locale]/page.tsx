import { BannerCategory, OurService, ProductCategory, ProductRegular, Testimonial, TotalSale } from '../components/EshopComponents';

export default function Home() {
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


