import { parse } from "path";

export const metadata = {
  title: "Server Side Render Page",
  description: "About Us",
};

export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });

  const data = (await res.json())[Math.floor(Math.random() * 100)];

  return (
    <>   
    <div className="!ml-[30px] !mt-[30px] text-black">
      <h4 className="text-2xl font-bold mb-8">
        🚀 Server Side Rendering (SSR)
      </h4>
      <div className="space-y-4 text-lg">
        <p className="font-semibold">🔄 Data fetched, updated in real time on every request..</p>
        <p>🔄 HTML is generated dynamically on every request.</p>
        <p>🔄 Refresh the page to see new values generated on the server.</p>
        <p>🎲 Random Number: {Math.floor(Math.random() * 100)}</p>
        <p>🕒 Generated At: {new Date().toLocaleTimeString()}</p>
        <p>📦 Data Fetched From Server: {data?.title?.toUpperCase()}</p>
      </div>
    </div>
    </>
  );
}