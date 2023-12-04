export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const projects = await res.json();

  return Response.json({ projects });
}
