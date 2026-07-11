'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import './dashboard.css';

export default function DashboardPage() {
  const router = useRouter();
  const locale = useLocale();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
    });

    router.replace(`/${locale}/login`);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div>
            <h1 className="title">Welcome Back 👋</h1>
            <p className="subtitle">
              Manage your application from the dashboard.
            </p>
          </div>
        </div>

        <div className="grid">
          <div className="statCard">
            <h3 className="cardTitle">Users</h3>
            <h2 className="cardValue">1,248</h2>
            <p className="cardInfo">+12% this month</p>
          </div>

          <div className="statCard">
            <h3 className="cardTitle">Orders</h3>
            <h2 className="cardValue">856</h2>
            <p className="cardInfo">
              <Link
                href={`/${locale}/admin/orders`}
                style={{ color: '#10b981', textDecoration: 'underline' }}
              >
                View Orders
              </Link>
            </p>
          </div>

          <div className="statCard">
            <h3 className="cardTitle">Revenue</h3>
            <h2 className="cardValue">$18,430</h2>
            <p className="cardInfo">+22% this month</p>
          </div>

          <div className="statCard">
            <h3 className="cardTitle">Products</h3>
            <h2 className="cardValue">142</h2>
            <p className="cardInfo">
              <Link
                href={`/${locale}/admin/products`}
                style={{ color: '#10b981', textDecoration: 'underline' }}
              >
                View Products
              </Link>
            </p>
          </div>
        </div>

        <div className="header">
          <button onClick={handleLogout} className="logoutBtn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}