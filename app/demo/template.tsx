import { ReactNode } from 'react';

export default function Home({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Template</h1>
      {children}
    </div>
  );
}