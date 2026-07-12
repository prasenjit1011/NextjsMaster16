"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="w-screen overflow-x-hidden">
      
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {
          [2,1].map((val)=>{
            return (
              <div className="rounded bg-blue-200 p-6 cursor-pointer" onClick={()=>{ router.push('/property'+val)}} key={val}>
                <img
                  src={"/property"+val+"_small.png"}
                  alt="Property"
                  className="block w-full h-auto"
                />
              </div>
            );
          })
        }
        <div className="rounded bg-red-200 p-6">

        </div>
      </div>
    </main>
  );
}