// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";


import db from "@astrojs/db";


import awsAmplify from 'astro-aws-amplify';


// https://astro.build/config
export default defineConfig({
   output: 'server',
  vite: {
    plugins: [tailwindcss()],
    define: {
     'import.meta.env.ASTRO_DB_REMOTE_URL_DB_URL': JSON.stringify(process.env.ASTRO_DB_REMOTE_URL),
     'import.meta.env.ASTRO_DB_APP_TOKEN': JSON.stringify(process.env.ASTRO_DB_APP_TOKEN),
   }
   },
  integrations: [db()],
  adapter: awsAmplify(),
});
