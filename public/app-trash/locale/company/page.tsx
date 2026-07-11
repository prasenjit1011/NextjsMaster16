async function getCompanies() {
  const res = await fetch("http://localhost:3000/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch companies");
  }

  return res.json();
}

export default async function CompanyPage() {
  const companies = await getCompanies();

  if (!companies || companies.length === 0) {
    return <div>No companies found</div>;
  }

  return (
    <div>
      <h1>Company List</h1>
      <ul>
        {companies.map((c: any, index: number) => (
          <li key={index}>
            <strong>{c.name}</strong> - ${c.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}