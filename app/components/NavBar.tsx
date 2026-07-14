import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

const languages = [
  { code: "ar", name: "العربية", flag: "🇦🇪", href: "/ar" },
  { code: "en", name: "English", flag: "🇬🇧", href: "/en" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳", href: "/hi" },
  { code: "bn", name: "বাংলা", flag: "🇧🇩", href: "/bn" },  
];

export const NavBar = async () => {
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
        <Link href={`/${locale}/aboutus`}>{text("AboutUs")}</Link>
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