import { dbEnv } from "@/data/env/db"
import { drizzle } from "drizzle-orm/node-postgres"
import * as schema from "./schema"

export const db = drizzle({
  schema,
  connection: {
    password: dbEnv.DB_PASSWORD,
    user: dbEnv.DB_USER,
    database: dbEnv.DB_NAME,
    host: dbEnv.DB_HOST,
  },
})
