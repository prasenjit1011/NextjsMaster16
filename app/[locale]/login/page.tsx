'use client';

import './../../style.css';
import { useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

const LoginPage = () => {
  const locale = useLocale();

  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [isLoading, setIsLoading] = useState(false);
  const [errmsg, setErrormsg] = useState('');

  const router = useRouter();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setErrormsg('');

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setTimeout(()=>setErrormsg(data.message), 2000);
        setTimeout(()=>setIsLoading(false), 1500);
        return;
      }

      // const dashboardPath = `/${locale}/admin/products`;
      const dashboardPath = `/${locale}/dashboard`;
      router.replace(dashboardPath);
      // router.push(dashboardPath);
      // redirect(dashboardPath);

    } 
    catch (err) {
      setIsLoading(false);
      // setErrormsg('Something went wrong.');
    } 
    finally {
      
    }
  };

  return (
    <div className="container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Sign in to continue</p>
        {
          errmsg ? (
            <p style={{color:"red"}}>{errmsg}</p>
          ):(
            isLoading ? <p>Signing in...</p>:<p>&nbsp;</p>
          )
        }

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            disabled={isLoading}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            disabled={isLoading}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="options">
          <label>
            <input type="checkbox" disabled={isLoading} />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <div className="signup">
          <button
            onClick={handleLogin}
            className="btn"
            disabled={isLoading}
            style={{
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.7 : 1,
            }}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;