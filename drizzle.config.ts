import { Config } from 'drizzle-kit'
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export default {
  schema: "./lib/db/schema/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  }
} satisfies Config;