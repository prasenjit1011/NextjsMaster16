import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container navbar">
        <Link href="/" className="logo">
          Lux<span>Estate</span>
        </Link>

        <nav>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#properties">Properties</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#agents">Agents</Link></li>
            <li><Link href="#blog">Blog</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
}