'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProductForm, { Product } from '../../ProductForm';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API + '/api/items';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditProductPage({ params }: PageProps) {
  const router = useRouter();

  const { id } = use(params);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // Load existing product
  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${API_URL}/${id}`, {
          cache: 'no-store',
          credentials: 'include',
          headers: {
            Accept: 'application/json',
          },
        });

        const json = await response.json();

        if (!response.ok || !json.success) {
          alert(json.message || 'Unable to load product.');
          return;
        }

        // IMPORTANT
        setProduct(json.data);
      } catch (error) {
        console.error(error);
        alert('Server error while loading product.');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  // Update Product
  const updateProduct = async (data: Product) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          description: data.description,
          sku: data.sku,
          price: data.price,
        }),
      });

      const json = await response.json();

      if (!response.ok) {
        alert(json.message || 'Unable to update product.');
        return;
      }

      alert('Product updated successfully.');

      router.push('/admin/products');

      router.refresh();
    } catch (error) {
      console.error(error);
      alert('Server error while updating product.');
    }
  };

  if (loading) {
    return (
      <div
        style={{
          padding: 40,
          textAlign: 'center',
        }}
      >
        <h2>Loading Product...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div
        style={{
          padding: 40,
          textAlign: 'center',
        }}
      >
        <h2>Product not found.</h2>
      </div>
    );
  }

  return (
    <ProductForm
      initialData={product}
      loading={false}
      submitText="Update Product"
      onSubmit={updateProduct}
    />
  );
}