import { Company } from "../pages/Company";
import { NotFound } from "../pages/NotFound";

export const routes = [
  {
    index: true,
    element: <Company />,
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
