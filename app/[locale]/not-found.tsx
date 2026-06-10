import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="error-page">
      <div className="error-card">
        <span className="badge">404 Error</span>

        <h1>Oops!</h1>
        <h2>Locale Page Not Found locale</h2>

        <p>
          The page you're looking for may have been moved,
          deleted, or never existed.
        </p>

        <Link href="/en" className="btn">
          Back to Home
        </Link>
      </div>
    </section>
  );
}