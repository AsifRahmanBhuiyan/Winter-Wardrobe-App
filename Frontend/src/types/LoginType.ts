import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});
export type TLogin = z.infer<typeof loginSchema>;
export type TRegister = z.infer<typeof registerSchema>;
