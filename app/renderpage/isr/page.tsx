export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 1000 },
  });

  const data = (await res.json())[Math.floor(Math.random() * 100)];

  return (
    <div>
      <h1>ISR Page 1000</h1>
      <p>{data.title}</p>
    </div>
  );
}