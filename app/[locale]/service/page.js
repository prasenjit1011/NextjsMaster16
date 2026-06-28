import { Footer, Header, BannerHome, HeaderSearch, ProductList, ProductCategory, BannerCategory, ProductRegular, TotalSale, OurService, FooterMenu, Testimonial, BannerStatic } from "@/components/common";


export default function ProductPage() {
  return (
    <>
      <BannerStatic pagename="Services" />
      <OurService />
      <TotalSale />
      <Testimonial />
    </>
  );
}
