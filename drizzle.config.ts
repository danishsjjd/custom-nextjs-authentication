import { dbEnv } from "@/data/env/db"
import { defineConfig } from "drizzle-kit"

export default defineConfig({
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schema.ts",
  dialect: "postgresql",
  strict: true,
  verbose: true,
  dbCredentials: {
    password: dbEnv.DB_PASSWORD!,
    user: dbEnv.DB_USER!,
    database: dbEnv.DB_NAME!,
    host: dbEnv.DB_HOST!,
    ssl: false,
  },
})
