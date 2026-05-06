"use client";
// export default function Time() {
//   return <p>{new Date().toISOString()}</p>;
// }

import { useState, useEffect } from "react";

export default function HydrationDemo() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, [time]);

  return (
    <div>
      <p>Server Render Time vs Client Time:</p>
      <p>{time || "Loading client time..."}</p>
    </div>
  );
}