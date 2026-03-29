import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Home</h1>
      <Link href="/admin">Go to Admin</Link>
    </div>
  );
}