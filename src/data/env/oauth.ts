import { z } from "zod"

const discordOAuthEnvSchema = z.object({
  DISCORD_CLIENT_ID: z.string().min(1),
  DISCORD_CLIENT_SECRET: z.string().min(1),
})

const githubOAuthEnvSchema = z.object({
  GITHUB_CLIENT_ID: z.string().min(1),
  GITHUB_CLIENT_SECRET: z.string().min(1),
})

export function getDiscordOAuthEnv() {
  return discordOAuthEnvSchema.parse(process.env)
}

export function getGithubOAuthEnv() {
  return githubOAuthEnvSchema.parse(process.env)
}
