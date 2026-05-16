export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache',
  });

  const data = (await res.json())[Math.floor(Math.random() * 100)];

  return (
    <div>
      <h1>Static Site Generation(SSG) Page : {Math.floor(Math.random() * 100)} : {new Date().toLocaleTimeString()}</h1>
      <h3>HTML is generated at build time</h3>
      <p><b>{data?.title.toUpperCase()}</b></p>
    </div>
  );
}