import Home from "../pages/Home";
import Companies from "../pages/Companies";
import NotFound from "../pages/NotFound";

export const routes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "companies/:companyId",
    element: <Companies />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
