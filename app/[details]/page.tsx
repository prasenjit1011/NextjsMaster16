"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [pageName, setPageName] = useState('');
  useEffect(() => {
    const pathname = window.location.pathname;
    const pageName = pathname.split("/")[1];
    setPageName(pageName)
  }, []);

  return (
    <main className="w-screen overflow-x-hidden">
      <img
        src={"/"+pageName+".png"}
        alt="Property"
        className="block w-full h-auto"
      />
    </main>
  );
}