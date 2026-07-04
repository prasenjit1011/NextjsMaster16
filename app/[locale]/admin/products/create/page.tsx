'use client';

import { useRouter } from 'next/navigation';
import ProductForm, { Product } from '../ProductForm';

const API_URL = 'http://localhost:3001/api/items';

export default function CreateProductPage() {
  const router = useRouter();

  const createProduct = async (data: Product) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: '*/*',
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
        alert(json.message || 'Unable to create product.');
        return;
      }

      alert('Product created successfully.');

      router.push('/admin/products');

      router.refresh();
    } catch (error) {
      console.error(error);
      alert('Server error while creating product.');
    }
  };

  return (
    <ProductForm
      submitText="Create Product"
      onSubmit={createProduct}
    />
  );
}