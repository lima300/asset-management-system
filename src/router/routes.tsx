import { Company } from "../pages/Company";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const routes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "companies/:companyId",
    element: <Company />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
