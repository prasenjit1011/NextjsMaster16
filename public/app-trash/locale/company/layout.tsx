export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      <h2>Company Layout</h2>
      {children}
    </div>
  );
}