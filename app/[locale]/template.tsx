export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "2px solid blue", padding: 10, marginTop: 10 }}>
      <h4>Root Template</h4>
      {children}
    </div>
  );
}