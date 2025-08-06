import { db, Appointment } from 'astro:db';

export default async function() {
  await db.insert(Appointment).values([
    { user: 1, status: "valid" },
    { user: 2, status: "canceled" },
  ]);
}
