import type { APIRoute } from 'astro';
import { db, Appointment } from 'astro:db';

export const GET: APIRoute = async () => {
  const data = await db.select().from(Appointment);
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
  });
};
