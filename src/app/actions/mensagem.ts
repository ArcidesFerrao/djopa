'use server'

import { z } from "zod"



const messageSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 letras") ,
    apelido:  z.string().min(2, "Apelido deve ter pelo menos 2 letras") ,
    email: z.string().email({ message: "Email Invalido"}),
    assunto: z.string().min(2, "Assunto deve ter pelo menos 3 letras"),
    mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 letras") ,
})

export async function sendMessage(prevState: unknown, formData: FormData) {
  
    const result = messageSchema.safeParse(Object.fromEntries(formData.entries())) 

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        }
    }


    console.log(result.data)
    const data = result.data;

  
}
