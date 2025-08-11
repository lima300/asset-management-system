import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";

export const Layout: React.FC = () => {
  return (
    <>
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};
