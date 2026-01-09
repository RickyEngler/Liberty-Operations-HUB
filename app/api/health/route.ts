// app/api/health/route.ts
// Health check endpoint

export async function GET(request: Request) {
  return Response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
}
