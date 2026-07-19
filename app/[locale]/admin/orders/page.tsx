'use client';

import { useEffect, useState } from 'react';
import styles from './order.module.css';

import {
  getOrders,
  deleteOrder,
} from '../../../../services/orderService';

export default function Orders() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

  const loadOrders = async () => {
    try {
      const result = await getOrders();

      setOrders(result || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const remove = async (id: number) => {
    if (!confirm('Delete this order?')) {
      return;
    }

    try {
      await deleteOrder(id);

      loadOrders();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          Loading orders...
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.topBar}>
          <h1 className={styles.title}>
            Order Management
          </h1>

          <button className={styles.addBtn}>
            + Create Order
          </button>
        </div>

        <div className={styles.searchBar}>
          <input
            className={styles.input}
            placeholder="Search by User ID or Status..."
          />
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Status</th>
              <th>Total</th>
              <th>Items</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className={styles.empty}
                >
                  No orders found.
                </td>
              </tr>
            )}

            {orders.map((order: any) => (
              <tr key={order.id}>
                <td>{order.id}</td>

                <td>{order.userId}</td>

                <td>
                  <span
                    className={`${styles.badge} ${
                      styles[
                        order.status.toLowerCase()
                      ]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className={styles.total}>
                  ₹
                  {Number(order.total).toFixed(2)}
                </td>

                <td>
                  <span
                    className={styles.itemCount}
                  >
                    {order.items?.length ?? 0} Items
                  </span>
                </td>

                <td>
                  {order.createdAt
                    ? new Date(
                        order.createdAt,
                      ).toLocaleDateString()
                    : '-'}
                </td>

                <td
                  className={styles.actionCell}
                >
                  <button
                    className={`${styles.actionBtn} ${styles.viewBtn}`}
                    onClick={() =>
                      alert(
                        JSON.stringify(
                          order,
                          null,
                          2,
                        ),
                      )
                    }
                  >
                    View
                  </button>

                  <button
                    className={`${styles.actionBtn} ${styles.editBtn}`}
                  >
                    Edit
                  </button>

                  <button
                    className={`${styles.actionBtn} ${styles.deleteBtn}`}
                    onClick={() =>
                      remove(order.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

    <div className={styles.paginationWrapper}>
        <button
            className={styles.pageBtn}
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
        >
            ← Prev
        </button>

            <div className={styles.pageNumbers}>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setPage(i + 1)}
                        className={`${styles.pageNumber} ${
                            page === i + 1 ? styles.activePage : ""
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            <button
                className={styles.pageBtn}
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
            >
                Next →
            </button>
        </div>


      </div>
    </div>
  );
}