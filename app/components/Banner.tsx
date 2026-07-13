"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import BannerHome from "./BannerHome";

export default function Banner() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  let pageTitle = "Home";

  // /en/contact
  // /hi/login
  // /bn/products

  if (segments.length >= 2) {
    pageTitle = segments[1];
  }

  pageTitle =
    pageTitle.charAt(0).toUpperCase() +
    pageTitle.slice(1).replace(/-/g, " ");

  if (pageTitle === "Home") {
    return <BannerHome />;
  }

  return (
    <div className="container-fluid page-header py-5">
      <div className="container py-5">
        <h1 className="text-center text-white display-6">
          {pageTitle}
        </h1>

        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>

          <li
            className="breadcrumb-item active text-white"
            aria-current="page"
          >
            {pageTitle}
          </li>
        </ol>
      </div>
    </div>
  );
}