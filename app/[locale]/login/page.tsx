// app/login/page.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('admin@test.com');
  const [password, setPassword] = useState('123456');
  const router = useRouter();
  const obj = {email, password};
  const payload = JSON.stringify(obj);
  const bodyData  = {method: 'POST',body: payload, headers: {'Content-Type': 'application/json'}};

  const handleLogin = async () => {
    const res = await fetch('/api/auth/login', bodyData);

    if (res.ok) {
      router.replace('/dashboard');
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