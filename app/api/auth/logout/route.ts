// app/api/auth/logout/route.ts

export async function POST() {
  return new Response(JSON.stringify({ message: 'Logged out' }), {
    status: 200,
    headers: {
      'Set-Cookie': [
        'token=; Path=/; HttpOnly; Max-Age=0; Secure; SameSite=Strict',
        'auth_state=; Path=/; Max-Age=0; Secure; SameSite=Strict',
      ].join(','),
    },
  });
}