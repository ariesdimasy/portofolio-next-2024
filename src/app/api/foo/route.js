export const dynamic = "force-dynamic"; // defaults to force-static

export function GET() {
  return Response.json({
    foo: "bar",
  });
}
