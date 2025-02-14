import {z} from 'zod'

const envSchema = z.object({
    VITE_URL_API: z.string().url()
})

export const env = envSchema.parse(import.meta.env);