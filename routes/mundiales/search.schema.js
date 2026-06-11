import { z } from "zod";

const schema = z.object({
  text: z
    .string()
    .trim()
    .min(3, "La búsqueda debe tener al menos 3 caracteres")
    .max(50, "La búsqueda no puede tener más de 50 caracteres")
    .transform((v) => v.toLowerCase()),
});

export default schema;