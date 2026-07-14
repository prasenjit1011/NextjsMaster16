'use client';

import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import styles from './products.module.css';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API + '/api/items';

interface Product {
  id: number;
  name: string;
  description: string;
  sku: string;
  price: number;
}

export default function ProductPage() {
  const locale = useLocale();

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const loadProducts = async (keyword = '') => {
    try {
      setLoading(true);

      const url = `${API_URL}?search=${encodeURIComponent(
        keyword
      )}&page=1&limit=10`;

      const res = await fetch(url, {
        next: {
          revalidate: 60 * 60 * 24 * 5,
          tags: ["products"],
        },
        credentials: 'include',
        headers: {
          Accept: 'application/json',
        },
      });

      const json = await res.json();
      setProducts(json.data ?? []);
    } catch (error) {
      console.error(error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    loadProducts();
  }, []);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      loadProducts(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this product?')) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        loadProducts(search);
      } else {
        console.error(await response.text());
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.topBar}>
          <div>
            <h2>📦 Product Management</h2>
            <p>Manage all products from one place.</p>
          </div>

          <Link
            href={`/${locale}/admin/products/create`}
            className={styles.addBtn}
          >
            + Add Product
          </Link>
        </div>

        <div className={styles.searchBar}>
          <input
            className={styles.input}
            placeholder="Search by Name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>SKU</th>
              <th>Price</th>
              <th style={{ width: 180 }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className={styles.loading}>
                  Loading...
                </td>
              </tr>
            ) : products.length === 0 ? (
              <tr>
                <td colSpan={6} className={styles.loading}>
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>

                  <td>
                    <strong>{item.name}</strong>
                  </td>

                  <td>{item.description}</td>

                  <td>
                    <span className={styles.badge}>{item.sku}</span>
                  </td>

                  <td>₹ {item.price.toLocaleString()}</td>

                  <td>
                    <div className={styles.actionCell}>
                      <Link
                        href={`/${locale}/admin/products/edit/${item.id}`}
                        className={`${styles.actionBtn} ${styles.editBtn}`}
                      >
                        ✏️ Edit
                      </Link>

                      <button
                        className={`${styles.actionBtn} ${styles.deleteBtn}`}
                        onClick={() => handleDelete(item.id)}
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}