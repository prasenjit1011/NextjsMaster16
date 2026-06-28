'use client';

// import Link from 'next/link';
import { Link } from '@/i18n/navigation';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

const languages = [
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <>
      <a
        href="#"
        className="dropdown-toggle text-dark text-decoration-none"
        data-bs-toggle="dropdown"
      >
        <i className="fas fa-globe fa-2x"></i>
        <span className="ms-2">
          {currentLanguage.flag}
        </span>
      </a>    
    
    <ul className="dropdown-menu">
      {languages.map((lang) => (
        <li key={lang.code}>
          <Link
            className="dropdown-item text-dark"
            href={`/${pathname.replace(/^\/(en|hi|bn)/, '')}`}
            locale={lang.code}
          >
            {lang.flag} {lang.name}
          </Link>
        </li>
      ))}
    </ul>
    </>
  );
}