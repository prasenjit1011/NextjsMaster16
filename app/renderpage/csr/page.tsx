'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => setData(json[Math.floor(Math.random() * 100)]));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>CSR Page</h1>
      <p>{data.title}</p>
    </div>
  );
}