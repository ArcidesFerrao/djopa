import { z } from "zod";

export const companySchema = z.object({
    userId: z.string(),
    companyName: z
      .string()
      .min(3, "Nome da empresa deve ter 3 carateres ou mais...")
      .max(32, "Nome da empresa nao deve ter mais de 32 carateres"),
    companyDesc: z.string().min(10, "A descricao da empresa deve ter mais de 10 carateres"),
    companyAddress: z.string().min(5, "Endereco invalido"),
    companyUrl: z.string().url("Formato URL invalido (Exemplo: https://www.website.com)"),
    companyEmail: z.string().email("Formato de Endereco electronico invalido")
});

