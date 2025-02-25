import db from "@/db/db";


export async function GET(req: Request) {
    try {
        const companies = await db.company.findMany();
        return new Response(JSON.stringify(companies), { status: 200 })
        console.log(req)
    } catch (error) {
        return new Response(JSON.stringify({error: `Error fetching categories: ${error}`}), {status: 500})
    }
}