import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/restaurant(.*)',
  '/bar(.*)',
  '/pricing(.*)',
  '/product(.*)',
  '/company(.*)',
  '/solutions(.*)',
  '/resources(.*)',
  '/demo(.*)',
  '/ui-sink(.*)',
  '/design-lab(.*)',
  '/testpage(.*)',
  '/api/webhooks/(.*)',
  '/api/public/(.*)'
]);

export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
