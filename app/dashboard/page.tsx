'use client';

export default function DashboardPage() {
  const handleLogout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
    });

    window.location.href = '/login';
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}