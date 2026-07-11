'use client';

import { useEffect, useState } from 'react';


type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Page() {
  const [data, setData] = useState<Post | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => setData(json[Math.floor(Math.random() * 100)]));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <div className="!ml-[30px] !mt-[30px] text-black">
        <h4 className="text-2xl font-bold mb-8">
          🚀 Client Side Rendering(CSR)
        </h4>
        <div className="space-y-4 text-lg">
          <p className="font-semibold">🔄 User-specific</p>
          <p className="font-semibold">🔄 Highly interactive</p>
          <p className="font-semibold">🔄 Not dependent on SEO</p>
          <p className="font-semibold">🔄 Updated frequently on the client</p>
          <p> Page : {Math.floor(Math.random() * 100)} : {new Date().toLocaleTimeString()}</p>
          <p><b>Browser loads page first, After that JavaScript fetches data in client side.</b></p>
          <p><b>{data?.title.toUpperCase()}</b></p>
        </div>
      </div>
    </>
  );
}