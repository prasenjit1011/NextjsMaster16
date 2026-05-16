export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 10 }, // 10 seconds after the page is generated, Next.js will regenerate the page in the background when a request comes in. This allows you to keep your content fresh without having to rebuild your entire site.
  });

  const data = (await res.json())[Math.floor(Math.random() * 100)];

  return (
    <div>
      <h1>Incremental Static Regeneration(ISR) Page : {Math.floor(Math.random() * 100)} : {new Date().toLocaleTimeString()}</h1>
      <h2>Static page + automatic regeneration after some time*****</h2>
      <h3><b>ISR allows you to update static content after you've built your application. It combines the benefits of static site generation with the ability to refresh content without a full rebuild.</b></h3>
      <h3>next:  revalidate : 10 , // 10 seconds after the page is generated, Next.js will regenerate the page in the background when a request comes in. This allows you to keep your content fresh without having to rebuild your entire site.</h3>
      <p><b>{data?.title.toUpperCase()}</b></p>
    </div>
  );
}