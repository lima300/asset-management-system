# Router Structure

This directory contains the routing configuration for the Tractian Challenge application.

## Files

- `router.tsx` - Main router configuration using `createBrowserRouter`
- `routes.tsx` - Route definitions and page components
- `config.ts` - Route constants and metadata
- `index.ts` - Exports all router-related modules

## Structure

The router uses a nested structure with a Layout component that includes:

- Navigation bar
- Main content area with `<Outlet />`

## Routes

- `/` - Home page (index route)
- `/about` - About page
- `/companies` - Companies listing page
- `*` - 404 Not Found page

## Adding New Routes

1. Add the page component to `src/pages/`
2. Import it in `routes.tsx`
3. Add the route object to the `routes` array
4. Optionally add route metadata to `config.ts`

## Example

```typescript
// In routes.tsx
import NewPage from "../pages/NewPage";

export const routes = [
  // ... existing routes
  {
    path: "new-page",
    element: <NewPage />,
  },
];

// In config.ts
export const ROUTES = {
  // ... existing routes
  NEW_PAGE: "/new-page",
} as const;
```
