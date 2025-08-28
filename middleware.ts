import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define routes that require authentication
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/api/protected(.*)",
  "/admin(.*)",
  "/locations(.*)",
  "/sensors(.*)",
  "/compliance(.*)",
  "/reports(.*)",
  "/settings(.*)"
]);

// Define admin routes
const isAdminRoute = createRouteMatcher([
  "/admin(.*)",
  "/api/admin(.*)"
]);

// Clerk auth routes should be public and bypass special logic
const isAuthRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/sso-callback(.*)",
  "/oauth(.*)"
]);

export default clerkMiddleware(async (auth, req) => {
  // Get authentication info
  const { userId, orgRole } = await auth();

  // Bypass for Clerk auth routes to avoid any chance of loops
  if (isAuthRoute(req)) {
    return;
  }

  // Protect authenticated routes
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  // Protect admin routes with role check
  if (isAdminRoute(req)) {
    await auth.protect((has) => {
      return has({ role: "org:admin" }) || has({ role: "org:super_admin" });
    });
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
