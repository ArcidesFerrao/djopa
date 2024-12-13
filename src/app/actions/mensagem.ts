'use server'


export async function sendMessage(prevState: unknown, formData: FormData) {
  
    const result = Object.fromEntries(formData.entries())

    console.log(result)

}
