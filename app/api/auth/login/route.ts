import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const backendRes = await fetch(
      `${process.env.BACKEND_API}/api/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    const data = await backendRes.json();

    if (!backendRes.ok) {
      return NextResponse.json(
        {
          message: data.message || 'Login failed',
        },
        {
          status: backendRes.status,
        }
      );
    }

    console.log('Backend response:', data);

    const isProd = process.env.NODE_ENV === 'production';

    const response = NextResponse.json(
      {
        message: 'Login success',
        username: data.username,
        role: data.role,
        token: data.access_token,
        access_token: data.access_token,
      },
      {
        status: 200,
      }
    );

    response.cookies.set({
      name: 'token',
      value: data.access_token,
      httpOnly: true,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });

    response.cookies.set({
      name: 'username',
      value: data.username,
      httpOnly: false,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24,
    });

    response.cookies.set({
      name: 'role',
      value: data.role,
      httpOnly: false,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24,
    });

    response.cookies.set({
      name: 'auth_state',
      value: 'logged-in',
      httpOnly: false,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        message: 'Server error',
      },
      {
        status: 500,
      }
    );
  }
}

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const backendRes = await fetch(process.env.BACKEND_API + '/api/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     });

//     const data = await backendRes.json();

//     if (!backendRes.ok) {
//       return Response.json(
//         { message: data.message || 'Login failed' },
//         { status: 401 }
//       );
//     }

//     console.log('Backend response:', data);

//     const isProd = process.env.NODE_ENV === 'production';
//     console.log('iProd : ',isProd);

//     const cookies = [
//       `token=${data.access_token}; Path=/; HttpOnly; ${
//         isProd ? 'Secure;' : ''
//       } SameSite=Lax; Max-Age=86400`,

//       `username=${encodeURIComponent(data.username)}; Path=/; ${
//         isProd ? 'Secure;' : ''
//       } SameSite=Lax; Max-Age=86400`,

//       `role=${encodeURIComponent(data.role)}; Path=/; ${
//         isProd ? 'Secure;' : ''
//       } SameSite=Lax; Max-Age=86400`,
//     ];

//     return new Response(
//       JSON.stringify({
//         message: 'Login success',
//         username: data.username,
//         role: data.role,
//       }),
//       {
//         status: 200,
//         headers: {
//           'Set-Cookie': cookies.join(', '),
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//   } catch (err) {
//     return Response.json(
//       { message: 'Server error' },
//       { status: 500 }
//     );  
//   }
// }

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

