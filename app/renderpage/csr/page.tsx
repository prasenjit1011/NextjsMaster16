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
    <div>
      <h1>Client Side Rendering(CSR) Page : {Math.floor(Math.random() * 100)} : {new Date().toLocaleTimeString()}</h1>
      <h3><b>Browser loads page first, After that JavaScript fetches data in client side.</b></h3>
      <p><b>{data?.title.toUpperCase()}</b></p>
    </div>
  );
}