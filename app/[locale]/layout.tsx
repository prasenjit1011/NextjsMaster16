import ReduxProvider from '../../lib/provider';
import Link from 'next/link';
import { ReactNode } from 'react';
import { getLocale, getTranslations } from "next-intl/server";

import './navbar.css'
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
            <NavBar />
            <main className="mainContent">
            {children}
            </main>
            <footer className="footer">
              <p className="footerText">
                © {new Date().getFullYear()} My Next Application. All Rights Reserved.
              </p>
            </footer>
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
  const selectedLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  const text = await getTranslations("HomePage");

  return (
    <header>
      <div className="logo">
        <Image
          src="/logo.svg"
          alt={`MyWebsite ${locale}`}
          width={200}
          height={70}
        />
      </div>

      <nav className="navbar">
        <Link href={`/${locale}`}>{text("Home")}</Link>
        <Link href={`/${locale}/aboutus`}>{text("About Us")}</Link>
        <Link href={`/${locale}/category/item`}>{text("Catalog")}</Link>
        <Link href={`/${locale}/cart`}>{text("Cart")}</Link>
        <Link href={`/${locale}/dashboard`}>{text("Dashboard")}</Link>

        {/* Language Dropdown */}
        <div className="language-dropdown">
          <button className="language-btn">
            {selectedLanguage.flag} {selectedLanguage.name} ▼
          </button>

          <div className="language-menu">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={`/${lang.code}`}
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