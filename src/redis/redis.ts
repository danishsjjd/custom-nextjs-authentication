import { redisEnv } from "@/data/env/redis"
import { Redis } from "@upstash/redis"

export const redisClient = new Redis({
  url: redisEnv.REDIS_URL,
  token: redisEnv.REDIS_TOKEN,
})
