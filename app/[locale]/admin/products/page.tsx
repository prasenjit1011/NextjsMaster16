'use client';

import { useEffect, useState } from 'react';
import styles from './products.module.css';
import Link from 'next/link';

const API_URL = 'http://localhost:3001/api/items';

export default function ProductPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const loadProducts = async (keyword = '') => {
    try {
      setLoading(true);

      const res = await fetch(
        `${API_URL}?search=${encodeURIComponent(keyword)}&page=1&limit=10`,
        {
          cache: 'no-store',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const json = await res.json();
      setProducts(json.data || []);
    } catch (error) {
      console.error(error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    loadProducts(value);
  };

  const handleEdit = (item: any) => {
    alert(`Edit Product : ${item.name}`);
  };

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
            href="/admin/products/create"
            className={styles.addBtn}>
            + Add Product
          </Link>
        </div>

        <div className={styles.searchBar}>
          <input
            className={styles.input}
            placeholder="Search by Name..."
            value={search}
            onChange={handleSearch}
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
              <th width="180">Action</th>
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
                    <span className={styles.badge}>
                      {item.sku}
                    </span>
                  </td>

                  <td>₹ {item.price.toLocaleString()}</td>

                  <td>
                    <div className={styles.actionCell}>
                      <Link
                        href={`/admin/products/edit/${item.id}`}
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