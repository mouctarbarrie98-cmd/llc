import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/auth/signin",
    },
});

export const config = {
    // Protect patient records, portal, and admin API
    matcher: ["/patients/:path*", "/portal/:path*", "/api/admin/:path*"],
};
