export const dynamic = "force-dynamic";

export default async function ProductPage({ params }) {
  return <div>Product: {params.slug}</div>;
}
