import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen overflow-x-hidden">
      {/* Google Drive Image */}
      <img
        src="/property.png"
        alt="Property"
        className="block w-full h-auto"
      />      
    </main>
  );
}