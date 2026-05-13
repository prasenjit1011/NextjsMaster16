// app/page.tsx (Server Component)
import Counter from "./Counter";

export default function Page() {
  console.log("SERVER RENDER");

  return (
    <div>
      <h1>Next.js Hydration Example</h1>
      <Counter />
    </div>
  );
}


















// // "use client";
// // export default function Time() {
// //   return <p>{new Date().toISOString()}</p>;
// // }

// import { useState, useEffect } from "react";

// export default function HydrationDemo() {
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     setTime(new Date().toLocaleTimeString());
//   }, [time]);

//   return (
//     <div>
//       <p>Server Render Time vs Client Time:</p>
//       <p>{time || "Loading client time..."}</p>
//     </div>
//   );
// }