import db from "@/db/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient, Role } from "@prisma/client";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const prisma = new PrismaClient

export default NextAuth({
    adapter: PrismaAdapter(prisma) ,
    providers: [
        Google({
            clientId: "",
            clientSecret: ""
        }),
    ],
    callbacks: {
        async session({session, user, token}) {
                session.user = user || {}
                session.user.name = token.name || "Default name";
                
                
            return session;
        },
        async jwt({token, user}) {
            if (user) {
                token.sub = user.id;
                token.name = user.name ?? user.email ?? "Default Name";
            }
            return token;
        },
        async signIn({ user, account }) {
            // const role = account?.role || "SEEKER";
            const existingUser = await db.user.findUnique({
                where: { email: user.email || "" },
            });

            if (!existingUser) {
                const newUser = await db.user.create({
                    data: {
                        email: user.email!,
                        name: user.name!,
                        image: user.image,
                        role: account?.role === "SEEKER" ? Role.SEEKER : Role.EMPLOYER ,
                        password: "",
                    },
                });

                await db.account.create({
                    data: {
                        userId: newUser.id,
                        provider: account?.provider || "" ,
                        providerAccountId: account?.providerAccountId || "",
                        access_token: account?.access_token,
                        type: account?.type || ""
                    }
                })
            }
            return true;
        }
    },
    pages: {
        signIn: "/auth/signin",
    },
    secret: "",
});