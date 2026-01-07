import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/auth/signin",
    },
});

export const config = {
    // Protect patient records, portal requests, and admin API
    // Exclude /portal root so patients can see the dashboard
    matcher: ["/patients/:path*", "/portal/requests/:path*", "/api/admin/:path*"],
};
