export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "0px solid blue", padding: 0, marginTop: 0 }}>
      {children}
    </div>
  );
}