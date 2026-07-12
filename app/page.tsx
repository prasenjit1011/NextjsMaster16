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
      <Image
        src="https://drive.google.com/uc?export=view&id=1D67boLOfITOsQfbU0r6qbfdPCCO_7zMh"
        alt="Property"
        width={1920}
        height={1080}
        priority
        unoptimized
        className="block w-full h-auto"
      />

      <hr className="my-8 border-gray-300" />

      {/* Local Image */}
      <Image
        src="/property.png"
        alt="Property"
        width={1920}
        height={1080}
        priority
        className="block w-full h-auto"
      />
    </main>
  );
}