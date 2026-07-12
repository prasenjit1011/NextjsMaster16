import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen overflow-x-hidden">
      <Image
        src="/property.png"
        alt="Property"
        width={1920}
        height={1080}
        priority
        className="w-full h-auto"
      />
    </main>
  );
}