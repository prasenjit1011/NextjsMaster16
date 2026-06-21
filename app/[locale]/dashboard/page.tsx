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
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>Welcome Back 👋</h1>
            <p style={styles.subtitle}>
              Manage your application from the dashboard.
            </p>
          </div>
        </div>

        <div style={styles.grid}>
          <div style={styles.statCard}>
            <h3 style={styles.cardTitle}>Users</h3>
            <h2 style={styles.cardValue}>1,248</h2>
            <p style={styles.cardInfo}>+12% this month</p>
          </div>

          <div style={styles.statCard}>
            <h3 style={styles.cardTitle}>Orders</h3>
            <h2 style={styles.cardValue}>856</h2>
            <p style={styles.cardInfo}>+8% this month</p>
          </div>

          <div style={styles.statCard}>
            <h3 style={styles.cardTitle}>Revenue</h3>
            <h2 style={styles.cardValue}>$18,430</h2>
            <p style={styles.cardInfo}>+22% this month</p>
          </div>

          <div style={styles.statCard}>
            <h3 style={styles.cardTitle}>Products</h3>
            <h2 style={styles.cardValue}>142</h2>
            <p style={styles.cardInfo}>Active products</p>
          </div>
        </div>

        <div style={styles.header}>
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background:
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '100%',
    maxWidth: '1200px',
    background: '#fff',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
    gap: '20px',
  },

  title: {
    margin: 0,
    fontSize: '2.5rem',
    color: '#1f2937',
  },

  subtitle: {
    marginTop: '10px',
    color: '#6b7280',
    fontSize: '1rem',
  },

  logoutBtn: {
    padding: '12px 28px',
    border: 'none',
    borderRadius: '12px',
    background: '#ef4444',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '25px',
    marginBottom: '20px',
  },

  statCard: {
    background: '#f8fafc',
    padding: '30px',
    borderRadius: '18px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  },

  cardTitle: {
    margin: 0,
    color: '#6b7280',
    fontSize: '1rem',
  },

  cardValue: {
    margin: '15px 0',
    fontSize: '2rem',
    color: '#111827',
  },

  cardInfo: {
    color: '#10b981',
    margin: 0,
  },
};