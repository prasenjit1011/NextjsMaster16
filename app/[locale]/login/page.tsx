'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState('admin@test.com');
  const [password, setPassword] = useState('123456');
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          rememberMe,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || 'Login failed');
      }

      // Refresh server components/cookies
      router.refresh();

      // Redirect to dashboard
      router.replace('/en/dashboard');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5">
            <div className="bg-light rounded p-5 shadow">

              <div className="text-center mb-5">
                <i className="fas fa-user-circle fa-5x text-primary mb-3"></i>

                <h2 className="text-primary">
                  Welcome Back
                </h2>

                <p className="text-muted">
                  Login to continue shopping.
                </p>
              </div>

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin}>

                {/* Email */}
                <div className="mb-4">
                  <label className="form-label">
                    Email Address
                  </label>

                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <i className="fas fa-envelope text-primary"></i>
                    </span>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label className="form-label">
                    Password
                  </label>

                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <i className="fas fa-lock text-primary"></i>
                    </span>

                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                {/* Remember Me */}
                <div className="d-flex justify-content-between mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) =>
                        setRememberMe(e.target.checked)
                      }
                    />

                    <label
                      className="form-check-label"
                      htmlFor="rememberMe"
                    >
                      Remember Me
                    </label>
                  </div>

                  <Link
                    href="/forgot-password"
                    className="text-primary"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill py-3 w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      ></span>
                      Logging in...
                    </>
                  ) : (
                    'Login'
                  )}
                </button>

              </form>

              {/* Register */}
              <div className="text-center mt-4">
                <p className="mb-0">
                  Don't have an account?{' '}
                  <Link
                    href="/register"
                    className="text-primary fw-bold"
                  >
                    Register Now
                  </Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;