'use client';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const handleLogout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
    });

    router.replace('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout} className="btn">Logout</button>
    </div>
  );
}