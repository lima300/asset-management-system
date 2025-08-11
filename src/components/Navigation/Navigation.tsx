import { Link, useParams } from "react-router-dom";
import "./Navigation.css";
import logo from "../../assets/tractianLogo.png";
import { useCompanies } from "../../hooks/useCompanies";
import gold from "../../assets/gold.svg";

export const Navigation: React.FC = () => {
  const { companyId } = useParams();
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
              <li
                className={`nav-link-item ${
                  companyId === company.id ? "active" : ""
                }`}
                key={company.id}
              >
                <Link to={`/companies/${company.id}`}>
                  <img src={gold} alt="company icon" />
                  <span>{company.name} Unit</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};
