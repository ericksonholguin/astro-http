import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = false;

export const GET: APIRoute = async ({ request, params }) => {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  console.log(url);

  const posts = await getCollection("blog", ({ id }) => slug === id);

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
