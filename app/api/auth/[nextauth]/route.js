import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    debug: true,
    callbacks: {
        async redirect({ url, baseUrl }) {
            console.log("Redirecting to:", baseUrl); // Debugging line
            return baseUrl;
        },
    },
});

export { handler as GET, handler as POST };