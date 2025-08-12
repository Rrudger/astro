import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

const db = await createRemoteDatabaseClient({
  dbType: "libsql",
  remoteUrl: "libsql://appointmentsdb-rudger.aws-eu-west-1.turso.io",
  appToken: process.env.ASTRO_DB_APP_TOKEN
});
const Appointment = asDrizzleTable("Appointment", { "columns": { "user": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "user", "collection": "Appointment", "primaryKey": false, "optional": false } }, "status": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "status", "collection": "Appointment", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

const GET = async () => {
  const data = await db.select().from(Appointment);
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
