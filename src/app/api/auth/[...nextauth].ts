import NextAuth from "next-auth";
import Google from "next-auth/providers/google";


export default NextAuth({
    providers: [
        Google({
            clientId: "",
            clientSecret: ""
        }),
    ],
    callbacks: {
        async session({session, token}) {
            if (token?.sub) {
                session.user = session.user || {}
                session.user.name = token.name || "Default name";
                
            } 
            return session;
        },
        async jwt({token, user}) {
            if (user) {
                token.name = user.name ?? user.email ?? "Default Name";
            }
            return token;
        }
    },
    pages: {
        signIn: "/auth/signin",
    },
    secret: "",
});