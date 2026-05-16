export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "2px dashed blue", padding: "10px" }}>
      <h3>Template Wrapper</h3>
      {children}
    </div>
  );
}