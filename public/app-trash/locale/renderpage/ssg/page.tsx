export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache',
  });

  const data = (await res.json())[Math.floor(Math.random() * 100)];

  return (
    <>
      <div className="!ml-[30px] !mt-[30px] text-black">
        <h4 className="text-2xl font-bold mb-8">
          🚀 Static Site Generation(SSG)
        </h4>
        <div className="space-y-4 text-lg">
          <p className="font-semibold">
            🔄 HTML is generated at build time
          </p>
          <p>🎲 Random Number: {Math.floor(Math.random() * 100)}</p>
          <p>🕒 Generated At: {new Date().toLocaleTimeString()}</p>
          <p>📦 <b>{data?.title.toUpperCase()}</b></p>
        </div>
      </div>
    </>
  );
}