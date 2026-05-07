import { parse } from "path";

export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });

  const data = (await res.json())[Math.floor(Math.random() * 100)];

  return (
    <div>
      <h1>Server Side Rendering(SSR) Page : {Math.floor(Math.random() * 100)} : {new Date().toLocaleTimeString()}</h1>
      <h3><b>HTML is generated on every request</b></h3>
      <h3><b>{data?.title.toUpperCase()}</b></h3>
    </div>
  );
}