// app/login/page.tsx

'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('admin@test.com');
  const [password, setPassword] = useState('123456');

  const handleLogin = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      window.location.href = '/dashboard';
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input onChange={(e) => setEmail(e.target.value)} value={email} />
      <input onChange={(e) => setPassword(e.target.value)} value={password} />
      <button onClick={handleLogin} style={{cursor:'pointer'}}>Login</button>
    </div>
  );
}