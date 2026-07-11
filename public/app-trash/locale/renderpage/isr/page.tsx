export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 10 }, // 10 seconds after the page is generated, Next.js will regenerate the page in the background when a request comes in. This allows you to keep your content fresh without having to rebuild your entire site.
  });

  const data = (await res.json())[Math.floor(Math.random() * 100)];

  return (
    <>
      <div className="!ml-[30px] !mt-[30px] text-black">
        <h4 className="text-2xl font-bold mb-8">
          🚀 Incremental Static Regeneration(ISR)
        </h4>
        <div className="space-y-4 text-lg">
          <p className="font-semibold">
            🔄 Page : {Math.floor(Math.random() * 100)} : {new Date().toLocaleTimeString()}
          </p>
          <h2>Static page + automatic regeneration after some time*****</h2>
          <h3><b>ISR allows you to update static content after you've built your application. It combines the benefits of static site generation with the ability to refresh content without a full rebuild.</b></h3>
          <h3>next:  revalidate : 10 , // 10 seconds after the page is generated, Next.js will regenerate the page in the background when a request comes in. This allows you to keep your content fresh without having to rebuild your entire site.</h3>
          <p><b>{data?.title.toUpperCase()}</b></p>
        </div>
      </div>
    </>
  );
}