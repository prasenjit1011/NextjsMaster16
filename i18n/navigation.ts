// src/i18n/navigation.ts
import {createNavigation} from 'next-intl/navigation';

export const {Link, redirect, usePathname, useRouter} =
  createNavigation({
    locales: ['ar','en', 'hi', 'bn'],
    localePrefix: 'always'
  });
