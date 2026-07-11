'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import styles from './products.module.css';

export interface Product {
  id?: number;
  name: string;
  description: string;
  sku: string;
  price: number;
}

interface ProductFormProps {
  initialData?: Product | null;
  loading?: boolean;
  submitText?: string;
  onSubmit: (data: Product) => Promise<void>;
}

const emptyProduct: Product = {
  name: '',
  description: '',
  sku: '',
  price: 0,
};

export default function ProductForm({
  initialData,
  loading = false,
  submitText = 'Save Product',
  onSubmit,
}: ProductFormProps) {
  const router = useRouter();
  const locale = useLocale();

  const [form, setForm] = useState<Product>(emptyProduct);
  const [saving, setSaving] = useState(false);

  const [errors, setErrors] = useState({
    name: '',
    description: '',
    sku: '',
    price: '',
  });

  // Populate form when editing
  useEffect(() => {
    if (initialData) {
      setForm({
        id: initialData.id,
        name: initialData.name ?? '',
        description: initialData.description ?? '',
        sku: initialData.sku ?? '',
        price: Number(initialData.price ?? 0),
      });
    } else {
      setForm(emptyProduct);
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === 'price' ? Number(value) : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validate = () => {
    const newErrors = {
      name: '',
      description: '',
      sku: '',
      price: '',
    };

    let valid = true;

    if (!form.name.trim()) {
      newErrors.name = 'Product name is required';
      valid = false;
    }

    if (!form.description.trim()) {
      newErrors.description = 'Description is required';
      valid = false;
    }

    if (!form.sku.trim()) {
      newErrors.sku = 'SKU is required';
      valid = false;
    }

    if (form.price <= 0) {
      newErrors.price = 'Price must be greater than zero';
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setSaving(true);
      await onSubmit(form);
    } catch (err) {
      console.error(err);
      alert('Unable to save product.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.card}>
        <h2>Loading product...</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <form onSubmit={submit}>
          <div className={styles.topBar}>
            <div>
              <h2>
                {initialData ? '✏ Edit Product' : '➕ Add Product'}
              </h2>

              <p>
                {initialData
                  ? 'Update existing product information.'
                  : 'Create a new product.'}
              </p>
            </div>
          </div>

          {/* Product Name */}
          <div className={styles.searchBar}>
            <label>
              <strong>Product Name</strong>
            </label>

            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Samsung Galaxy S25"
              value={form.name}
              onChange={handleChange}
            />

            {errors.name && (
              <p className={styles.errorText}>
                {errors.name}
              </p>
            )}
          </div>

          {/* Description */}
          <div className={styles.searchBar}>
            <label>
              <strong>Description</strong>
            </label>

            <textarea
              className={styles.input}
              rows={5}
              name="description"
              placeholder="Product description..."
              value={form.description}
              onChange={handleChange}
            />

            {errors.description && (
              <p className={styles.errorText}>
                {errors.description}
              </p>
            )}
          </div>

          {/* SKU */}
          <div className={styles.searchBar}>
            <label>
              <strong>SKU</strong>
            </label>

            <input
              className={styles.input}
              type="text"
              name="sku"
              placeholder="SAM-S25-001"
              value={form.sku}
              onChange={handleChange}
            />

            {errors.sku && (
              <p className={styles.errorText}>
                {errors.sku}
              </p>
            )}
          </div>

          {/* Price */}
          <div className={styles.searchBar}>
            <label>
              <strong>Price</strong>
            </label>

            <input
              className={styles.input}
              type="number"
              min={1}
              step="0.01"
              name="price"
              placeholder="799"
              value={form.price}
              onChange={handleChange}
            />

            {errors.price && (
              <p className={styles.errorText}>
                {errors.price}
              </p>
            )}
          </div>

          <div className={styles.formActions}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={() => router.push(`/${locale}/admin/products`)}
            >
              ← Back
            </button>

            <button
              type="submit"
              className={styles.addBtn}
              disabled={saving}
            >
              {saving ? 'Saving...' : submitText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}