// app/api/user/route.ts

export async function GET(req: Request) {
  return Response.json({ name: 'Admin User' });
}