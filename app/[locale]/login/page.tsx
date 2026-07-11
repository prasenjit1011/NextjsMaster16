'use client';

import './../../style.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

const LoginPage = () => {
  const locale = useLocale();

  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [logStatus, setLogStatus] = useState(0);

  const router = useRouter();

  const obj = {
    username: email,
    password
  };

  const payload = JSON.stringify(obj);

  const bodyData = {
    method: 'POST',
    body: payload,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const handleLogin = async () => {
    const res = await fetch('/api/auth/login', bodyData);

    if (res.ok) {
      router.refresh();
      console.log('Dashboard', await res.json());

      // Redirect using the current locale
      router.replace(`/${locale}/dashboard`);
    }
  };

  return (
    <div className="container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Sign in to continue</p>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <div className="signup">
          <button
            onClick={handleLogin}
            className="btn"
            style={{ cursor: 'pointer' }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;