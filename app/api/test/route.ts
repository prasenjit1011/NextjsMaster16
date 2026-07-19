// app/api/test/route.ts

export async function GET() {
  console.log(process.env.BACKEND_API);
  console.log(process.env.NEXT_PUBLIC_BACKEND_API);

  return Response.json({
    BACKEND_API: process.env.BACKEND_API,
    NEXT_PUBLIC_BACKEND_API: process.env.NEXT_PUBLIC_BACKEND_API,
    BACKEND_API_LOCAL: process.env.BACKEND_API_LOCAL,
    NEXT_PUBLIC_BACKEND_API_LOCAL: process.env.NEXT_PUBLIC_BACKEND_API_LOCAL,

    NODE_ENV: process.env.NODE_ENV,
  });
}