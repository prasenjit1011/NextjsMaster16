import { parse } from "path";

export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });

  const data = (await res.json())[Math.floor(Math.random() * 100)];

  return (
    <div>
      <h1>SSR Page</h1>
      <h3>{data.title}</h3>
    </div>
  );
}