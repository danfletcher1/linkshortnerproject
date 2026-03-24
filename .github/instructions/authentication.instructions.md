---
description: Read this before modifying authentication in the project.
---

# Authentication Rules

All authentication in this app is handled exclusively by **Clerk**. No other auth libraries, custom session logic, JWT handling, or next-auth patterns should ever be used.

## Core Rules

- **Clerk only**: Use `@clerk/nextjs` for all auth. Never introduce alternative auth methods.
- **Middleware**: Use `clerkMiddleware()` (from `@clerk/nextjs/server`) in the middleware file to protect routes. Do not write custom session checks outside of Clerk APIs.
- **Protected route — `/dashboard`**: This route must always require an authenticated user. Unauthenticated users must be redirected to sign-in.
- **Homepage redirect**: If a signed-in user visits `/` (the homepage), redirect them to `/dashboard`.
- **Modal sign-in/sign-up**: `<SignInButton>` and `<SignUpButton>` must always use `mode="modal"`. Never navigate to a separate sign-in or sign-up page.

## Middleware Pattern

Use `clerkMiddleware` with route protection and redirect logic:

```ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // Redirect signed-in users away from homepage
  if (userId && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Protect dashboard routes
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
```

## UI Pattern

Always pass `mode="modal"` to Clerk UI buttons:

```tsx
<SignInButton mode="modal" />
<SignUpButton mode="modal" />
```
