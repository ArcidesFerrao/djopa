import db from "@/db/db";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const userId =searchParams.get("userId");
    if (!userId) {
        return NextResponse.json({ error: "User ID is required"}, { status: 400 });
    }
    try {
        if (userId) {

            const companies = await db.company.findMany({
                where: { userId },
                include: {
                    jobs: true
                }
            });

            const companiesWithCount = companies.map(company => ({
                ...company,
                jobCount: company.jobs.length,
            }))

            return new Response(JSON.stringify(companiesWithCount), { status: 200 })
        } else {

            const companies = await db.company.findMany();
            return new Response(JSON.stringify(companies), { status: 200 })
        }
            // console.log(req)
    } catch (error) {
        return new Response(JSON.stringify({error: `Error fetching companies: ${error}`}), {status: 500})
    }
}