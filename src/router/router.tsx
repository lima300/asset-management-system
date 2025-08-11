import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { routes } from "./routes";

// Create nested routes with layout
const nestedRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: routes,
  },
];

export const router = createBrowserRouter(nestedRoutes);
