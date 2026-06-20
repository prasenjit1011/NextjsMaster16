import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-card">
        <div className="error-code">404</div>

        <h1>Oops! Page Not Found</h1>

        <p>
          The page you are looking for doesn't exist, may have been moved,
          or is temporarily unavailable.
        </p>

        <Link href="/" className="home-btn">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}