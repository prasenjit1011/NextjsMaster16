// app/api/auth/login/route.ts
// app/api/auth/login/route.ts

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 👉 Call external API
    const backendRes = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await backendRes.json();

    if (!backendRes.ok) {
      return Response.json(
        { message: data.message || 'Login failed' },
        { status: 401 }
      );
    }

    console.log('Backend response 456:', data.access_token);

    // ✅ Set cookie from backend token
    const isProd = false;//process.env.NODE_ENV === 'production';
    return new Response(JSON.stringify({ message: 'Login success' }), {
      status: 200,
      headers: {
        'Set-Cookie': `token=${data.access_token}; Path=/; HttpOnly; ${
          isProd ? 'Secure;' : ''
        } SameSite=Lax; Max-Age=86400`,
      },
    });



  } catch (err) {
    return Response.json({ message: 'Server error' }, { status: 500 });
  }
}


// export async function POST(req: Request) {
//   const body = await req.json();
//   const { email, password } = body;

//   // Fake validation
//   if ((email === 'admin@test.com' && password === '123456') || (email === 'admin' && password === 'admin')) {
//     return new Response(
//       JSON.stringify({ message: 'Login success' }),
//       {
//         status: 200,
//         headers: {
//           'Set-Cookie': `token=abc123; Path=/; HttpOnly`,
//         },
//       }
//     );
//   }

//   return Response.json({ message: 'Invalid credentials' }, { status: 401 });
// }

