import db from "@/db/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient, Role } from "@prisma/client";
import { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

const prisma = new PrismaClient

export const authOptions = {
    adapter: PrismaAdapter(prisma) ,
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
    ],
    callbacks: {
        async session({session, user, token}) {
            if (user) {
                session.user = {
                    ...session.user,
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }
            } else if (token) {
                session.user = {
                    ...session.user,
                    id: token.sub as string,
                    name: token.name,
                    email: token.email,
                }
            }
            console.log(session.user.name)
                
                
            return session;
        },
        async jwt({token, user}) {
            if (user) {
                token = {
                    ...token,
                    sub: user.id,
                    name: user.name ?? user.email ?? "Default Name",
                    email: user.email,
                }
            }
            console.log(token.name)
            return token;
        },
        async signIn({ user, account }) {
            // const role = account?.role || "SEEKER";
            const existingAccount = await db.account.findUnique({
                where: { 
                    provider_providerAccountId: {
                        provider: account?.provider || "",
                        providerAccountId: account?.providerAccountId || "",
                    }
                 },
            });

            if (!existingAccount) {
                const existingUser = await db.user.findUnique({
                    where: {
                        email: user.email || ""
                    }
                })

                if (existingUser) {
                    await db.account.create({
                        data: {
                            userId: existingUser.id,
                            provider: account?.provider || "",
                            providerAccountId: account?.providerAccountId || "",
                            access_token: account?.access_token,
                            type: account?.type || "oauth",
                        }
                    })
                } else {
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
                            type: account?.type || "oauth"
                        }
                    })

                }

            }
            return true;
        }
    },
    pages: {
        signIn: "/api/auth/signin",
        error: "/api/auth/error",
    },
    secret: process.env.NEXTAUTH_SECRET ,
    debug: true
} satisfies AuthOptions;