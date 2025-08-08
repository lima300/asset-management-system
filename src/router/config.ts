// Route path constants
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  COMPANIES: "/companies",
} as const;

// Route metadata for navigation, breadcrumbs, etc.
export const ROUTE_METADATA = {
  [ROUTES.HOME]: {
    title: "Home",
    description: "Tractian Challenge Home Page",
  },
  [ROUTES.ABOUT]: {
    title: "About",
    description: "About the Tractian Challenge",
  },
  [ROUTES.COMPANIES]: {
    title: "Companies",
    description: "View all companies",
  },
} as const;
