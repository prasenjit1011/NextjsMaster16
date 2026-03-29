"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {
    // Set fake token cookie
    document.cookie = "token=12345; path=/";
    alert("Logged in! Token set in cookies.");
    router.push("/admin");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}