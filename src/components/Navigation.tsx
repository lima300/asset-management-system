import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from "../assets/tractianLogo.png";
import { useCompanies } from "../hooks/useCompanies";

function Navigation() {
  // const location = useLocation();
  const { data: companies, isLoading: companiesLoading } = useCompanies();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">
            <img src={logo} alt="Tractian Challenge" />
          </Link>
        </div>
        <ul className="nav-links">
          {companiesLoading ? (
            <li>Loading...</li>
          ) : (
            companies?.map((company) => (
              <li key={company.id}>
                <Link to={`/companies/${company.id}`}>{company.name}</Link>
              </li>
            ))
          )}
          {/* <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/companies" ? "active" : ""}>
            <Link to="/companies">Companies</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
