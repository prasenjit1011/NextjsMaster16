// "use client";

// import { useState } from "react";

import ReduxProvider from '../../lib/provider';
import Link from 'next/link';
import { ReactNode } from 'react';
import { getLocale, getTranslations } from "next-intl/server";

import './navbar.css'
import { useTranslations } from 'next-intl';

export const metadata = {
  title: "My App",
  description: "Next.js App",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
        <ReduxProvider>
          <div style={{ border: "0px solid #b70951", padding: 0, marginTop: 0 }}>
          <NavBar />
          {children}
          </div>
        </ReduxProvider>
  );
}


const languages = [
  { code: "en", name: "English", flag: "🇬🇧", href: "/en" },
  { code: "bn", name: "বাংলা", flag: "🇧🇩", href: "/bn" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳", href: "/hi" },
];

const NavBar = async () => { 
  const locale = await getLocale();
  const selectedLanguage = languages.find((lang) => lang.code === locale) || languages[0];
  const text = await getTranslations('HomePage');
   


  return (
    <header>
      <div className="logo">MyWebsite-{locale}</div>

      <nav className="navbar">
        <Link href="/">{text('Home')}</Link>
        <Link href="/aboutus">{text('About Us')}</Link>
        <Link href="/category">{text('Category')}</Link>

        {/* Render Dropdown */}
        <div className="dropdown">
          <span className="dropdown-btn">{text('Render')} ▼</span>

          <div className="dropdown-content">
            <Link href="/category/item">{text('Item')}</Link>
            <Link href="/renderpage/ssr">{text('SSR')}</Link>
            <Link href="/renderpage/ssg">{text('SSG')}</Link>
            <Link href="/renderpage/isr">{text('ISR')}</Link>
            <Link href="/renderpage/csr">{text('CSR')}</Link>
          </div>
        </div>

        <Link href="/dashboard">{text('Dashboard')}</Link>
        <Link href="/company">{text('Company')}</Link>
        <Link href="/hydration">{text('Hydration')}</Link>
        <Link href="/error">{text('Error')}</Link>

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