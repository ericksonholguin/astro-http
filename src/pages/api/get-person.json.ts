import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const person = {
    name: "Erickson Manuel Holguín",
    age: 26,
    email: "ericksonmanuel.holguin@gmail.com",
  };

  return new Response(JSON.stringify(person), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
