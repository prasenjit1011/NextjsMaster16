import "./category.css";
import Counter from "../../components/Counter";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "📱 Electronics",
    description: "Mobile phones, laptops, accessories and gadgets.",
    slug: "electronics",
  },
  {
    id: 2,
    name: "👕 Fashion",
    description: "Men's, women's and kids clothing.",
    slug: "fashion",
  },
  {
    id: 3,
    name: "🏠 Home & Living",
    description: "Furniture, decor and household essentials.",
    slug: "home-living",
  },
  {
    id: 4,
    name: "📚 Books",
    description: "Educational, fiction and non-fiction books.",
    slug: "books",
  },
  {
    id: 5,
    name: "⚽ Sports",
    description: "Fitness and sports equipment.",
    slug: "sports",
  },
  {
    id: 6,
    name: "💄 Beauty",
    description: "Skincare, cosmetics and personal care.",
    slug: "beauty",
  },
];

export default function Category() {
  return (
    <main className="category-container">
      <div className="page-header">
        <h1>📂 Categories</h1>
        <p>
          Explore our collection of categories and discover products tailored
          to your needs.
        </p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <Link
            key={category.id}
            href="/category/item"
            className="category-card"
          >
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </Link>
        ))}
      </div>

      <Counter pageName="Category" />
    </main>
  );
}