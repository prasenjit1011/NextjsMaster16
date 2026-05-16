import Counter from '../../components/Counter';
import Link from 'next/link';

export default function Category() {
  return (
    <div>
      <h1>Category</h1>
      <Counter pageName='Category' />

      <h4>Go to product inside category:</h4>
      <Link href="/category/product">Product Page</Link>
    </div>
  );
}