// "use client";

// import { useState } from "react";
    

import ReduxProvider from '../../lib/provider';
import Link from 'next/link';
import { ReactNode } from 'react';
import { getLocale, getTranslations } from "next-intl/server";

// import './navbar.css'
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const metadata = {
  title: "My App",
  description: "Next.js App",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
        <ReduxProvider>
          <div style={{ border: "0px solid #b70951", padding: 0, marginTop: 0 }}>
          <NewNavBar />
          <Banner />
          {children}
          <Footer />
          </div>
        </ReduxProvider>
  );
}

// const RootLayout = ({ children }: { children: ReactNode }) => {
//   return (
//         <ReduxProvider>
//           <div style={{ border: "0px solid #b70951", padding: 0, marginTop: 0 }}>
//           <NavBar />
//           {children}
//           </div>
//         </ReduxProvider>
//   );
// }


const languages = [
  { code: "en", name: "English", flag: "🇬🇧", href: "/en" },
  { code: "bn", name: "বাংলা", flag: "🇧🇩", href: "/bn" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳", href: "/hi" },
];


const Banner = () => {
  return (
    <div className="container-fluid page-header py-5">
  <h1 className="text-center text-white display-6">
    Login
  </h1>

  <ol className="breadcrumb justify-content-center mb-0">
    <li className="breadcrumb-item">
      <a href="/">Home</a>
    </li>

    <li
      className="breadcrumb-item active text-white"
      aria-current="page"
    >
      Login
    </li>
  </ol>
</div>
  );
}

const Footer = () => {
    return (
        <div className="container-fluid copyright bg-dark py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <span className="text-light"><a href="#"><i className="fas fa-copyright text-light me-2"></i>TuliOutlet</a>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 my-auto text-center text-md-end text-white">
                    </div>
                </div>
            </div>
        </div>
    );
}

const NewNavBar = async () => {
  return (

<div className="container-fluid fixed-top">
  <div className="container topbar bg-primary d-none d-lg-block">
    <div className="d-flex justify-content-between">
      <div className="top-info ps-2">
        <small className="me-3">
          <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
          <Link href="#" className="text-white">
            123 Street, New York
          </Link>
        </small>

        <small className="me-3">
          <i className="fas fa-envelope me-2 text-secondary"></i>
          <Link href="mailto:Email@example.com" className="text-white">
            Email@example.com
          </Link>
        </small>
      </div>

      <div className="top-link pe-2">
        <Link href="/privacy-policy" className="text-white">
          <small className="text-white mx-2">
            Privacy Policy
          </small>
        </Link>
        {' / '}

        <Link href="/terms" className="text-white">
          <small className="text-white mx-2">
            Terms of Use
          </small>
        </Link>
        {' / '}

        <Link href="/refunds" className="text-white">
          <small className="text-white ms-2">
            Sales & Refunds
          </small>
        </Link>
      </div>
    </div>
  </div>

  <div className="container px-0">
    <nav className="navbar navbar-light bg-white navbar-expand-xl">
      <Link href="/" className="navbar-brand">
        <h1 className="text-primary display-6">
          Fruitables
        </h1>
      </Link>

      <button
        className="navbar-toggler py-2 px-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars text-primary"></span>
      </button>

      <div
        className="collapse navbar-collapse bg-white"
        id="navbarCollapse"
      >
        <div className="navbar-nav mx-auto">
          <Link href="/" className="nav-item nav-link">
            Home
          </Link>

          <Link href="/shop" className="nav-item nav-link">
            Shop
          </Link>

          <Link href="/shop-detail" className="nav-item nav-link">
            Shop Detail
          </Link>

          <Link href="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>

        <div className="d-flex m-3 me-0">
          <button
            className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fas fa-search text-primary"></i>
          </button>

          <Link
            href="/cart"
            className="position-relative me-4 my-auto"
          >
            <i className="fa fa-shopping-bag fa-2x"></i>

            <span
              className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
              style={{
                top: '-5px',
                left: '15px',
                height: '20px',
                minWidth: '20px',
              }}
            >
              0
            </span>
          </Link>

          <Link href="/login" className="my-auto">
            <i className="fas fa-user fa-2x text-primary"></i>
          </Link>
        </div>
      </div>
    </nav>
  </div>
</div>
  );
}

const NavBar = async () => { 
  const locale = await getLocale();
  const selectedLanguage = languages.find((lang) => lang.code === locale) || languages[0];
  const text = await getTranslations('HomePage');
   


  return (
    <header>
      <div className="logo">
        <Image
          src="/logo.svg"
          alt={`MyWebsite ${locale}`}
          width='200'
          height='70'
        />
        
      </div>

      <nav className="navbar">
        <Link href="/">{text('Home')}</Link>
        <Link href="/aboutus">{text('About Us')}</Link>
        <Link href="/category">{text('Category')}</Link>

        {/* Render Dropdown */}
        <div className="dropdown">
          <span className="dropdown-btn">{text('Render')} ▼</span>

          <div className="dropdown-content">
            <Link href="/renderpage/ssr">{text('SSR')}</Link>
            <Link href="/renderpage/ssg">{text('SSG')}</Link>
            <Link href="/renderpage/isr">{text('ISR')}</Link>
            <Link href="/renderpage/csr">{text('CSR')}</Link>
          </div>
        </div>

        
        <div className="dropdown">
          <span className="dropdown-btn">{text('More')} ▼</span>
          <div className="dropdown-content">            
            <Link href="/company">{text('Company')}</Link>
            <Link href="/category/item">{text('Item')}</Link>
            <Link href="/hydration">{text('Hydration')}</Link>
            <Link href="/error">{text('Error')}</Link>
          </div>
        </div>




        <Link href="/dashboard">{text('Dashboard')}</Link>
        {/* Language Dropdown */}
        <div className="language-dropdown">
          <button className="language-btn">
            {selectedLanguage.flag} {selectedLanguage.name} ▼
          </button>

          <div className="language-menu">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={lang.href}                
              >
                {lang.flag} {lang.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
























export default RootLayout;