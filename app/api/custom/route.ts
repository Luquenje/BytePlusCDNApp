export async function GET(req: Request) {
  const headersObj: any = {};
  // Convert Headers object to plain object
  req.headers.forEach((value, key) => {
    headersObj[key] = value;
  });

  return new Response(JSON.stringify(headersObj), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
