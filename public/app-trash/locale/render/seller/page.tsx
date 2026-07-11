'use client';

import { useEffect, useState } from "react";

type Seller = {
    id: number;
    name: string;
};
export default function Page() {
    const [sellers, setSellers] = useState<Seller[]>([]);

    useEffect(() => {
        setSellers([
            { id: 1, name: "Seller One" },
            { id: 2, name: "Seller Two" },
            { id: 3, name: "Seller Three" },
        ]);
    }, []);

    if(sellers.length === 0) {
        return null;
    }
  return (
    <div>
      <h1>Seller Listing Page 123</h1>
    </div>
  );
}
