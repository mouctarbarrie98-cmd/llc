import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "admin" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Simple hardcoded auth for demo purposes
                // In production, this should verify against a secure database with hashed passwords
                if (credentials?.username === "admin" && credentials?.password === "password123") {
                    return { id: "1", name: "Admin User", email: "admin@example.com" };
                }
                return null; // Login failed
            }
        })
    ],
    pages: {
        signIn: '/auth/signin', // Custom sign-in page (we'll create this)
    },
    secret: process.env.NEXTAUTH_SECRET || "fallback_secret_for_dev_only",
    debug: true,
});

export { handler as GET, handler as POST };
