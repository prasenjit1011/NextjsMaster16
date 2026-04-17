export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache',
  });

  const data = (await res.json())[Math.floor(Math.random() * 100)];

  return (
    <div>
      <h1>SSG Page</h1>
      <p>{data.title}</p>
    </div>
  );
}