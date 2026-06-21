'use client';
import './../../style.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import { getLocale } from 'next-intl/server';

const LoginPage = () =>{
  // const locale = await getLocale();
  const [email, setEmail] = useState('admin@test.com');
  const [password, setPassword] = useState('123456');
  const [logStatus, setLogStatus] = useState(0)
  const router = useRouter();
  const obj = {email, password};
  const payload = JSON.stringify(obj);
  const bodyData  = {method: 'POST',body: payload, headers: {'Content-Type': 'application/json'}};

  const handleLogin = async () => {
    const res = await fetch('/api/auth/login', bodyData);

    if (res.ok) {
      setLogStatus(123)
      router.refresh();

      try {
        console.log('Dashboard')
        router.push('/dashboard');
      } catch (err) {
        console.error('Error')
        console.error(err);
      }


      router.replace('/en/dashboard');
      // router.push('/en/dashboard');
    }
  };

  return (
    <div className="container">
      <div className="login-card">
          <h2>Welcome Back</h2>
          <p>Sign in to continue</p>
    
        <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />                  
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password} />
            
        </div>

        <div className="options">
            <label>
                <input type="checkbox" />
                Remember me
            </label>
            <a href="#">Forgot Password?</a>
        </div>
        <div className="signup">
            <button onClick={handleLogin} style={{cursor:'pointer'}} className="btn">Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;