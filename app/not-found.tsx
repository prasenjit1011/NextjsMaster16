import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="error-page">
      <div className="error-card">
        <span className="error-code">404</span>

        <h1>Oops! Root Page Not Found.</h1>

        <p>
          The page you are looking for doesn't exist, has been moved,
          or is temporarily unavailable.
        </p>

        <Link href="/en" className="btn">
          Back to Home
        </Link>
      </div>
    </section>
  );
}