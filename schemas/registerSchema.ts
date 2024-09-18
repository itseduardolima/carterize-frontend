import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Nome deve ter pelo menos 2 caracteres")
      .regex(/^[A-Za-zÀ-ÿ\s]+$/, "O nome não pode conter caracteres especiais ou números"),
    
    email: z
      .string()
      .email("Email inválido")
      .refine((value) => value === value.toLowerCase(), {
        message: "O email não pode conter letras maiúsculas",
      }),

    password: z
      .string()
      .min(8, "A senha deve ter pelo menos 5 caracteres")
      .refine((value) => !/\s/.test(value), {
        message: "A senha não deve possuir espaços",
      }),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });
