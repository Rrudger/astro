import { defineDb, defineTable, column } from 'astro:db';

const Appointment = defineTable({
  columns: {
    user: column.number(),
    status: column.text(),
  }
});

export default defineDb({
  tables: { Appointment }
});
