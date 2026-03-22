---
description: Read this before creating or modifying server actions in the project.
applyTo: "**/actions.ts"
---

# Server Actions

## File Conventions
- Server action files **must** be named `actions.ts`
- Each `actions.ts` must be **colocated** in the same directory as the client component that calls it

## Calling Server Actions
- Server actions must **only** be called from **client components**

## TypeScript Types
- All data passed to server actions must have **explicit TypeScript types**
- **Do not** use the `FormData` TypeScript type — define typed objects instead

## Validation
- All input data **must** be validated using **Zod** before any processing

## Return Values
- Server actions must **never throw errors**
- Always return an object with either:
	- `{ success: true, ... }` on success
	- `{ error: string }` on failure (validation errors, auth failures, DB errors, etc.)

## Authentication
- Every server action must **check for a logged-in user first**, before performing any database operations
- Return `{ error: "Unauthorized" }` if no authenticated user is found

## Database Access
- Server actions **must not** use Drizzle queries directly
- All database operations must go through **helper functions** located in the `/data` directory
- These helper functions wrap Drizzle queries and are the only place raw queries should appear
