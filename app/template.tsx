export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "2px solid blue", padding: 10, marginTop: 10 }}>
      {children}
    </div>
  );
}