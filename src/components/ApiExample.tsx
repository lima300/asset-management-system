import { useState } from "react";
import { useCompanies } from "../hooks/useCompanies";
import { useCompanyData } from "../hooks/useCompanyData";

const ApiExample: React.FC = () => {
  const {
    data: companies,
    isLoading: companiesLoading,
    error: companiesError,
  } = useCompanies();

  const [selectedCompanyId, setSelectedCompanyId] = useState<string>("");

  const {
    locations,
    assets,
    isLoading: companyDataLoading,
    error: companyDataError,
  } = useCompanyData(selectedCompanyId!);

  if (companiesLoading) {
    return <div>Loading companies...</div>;
  }

  if (companiesError) {
    return <div>Error loading companies: {companiesError.message}</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tractian API Example</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Companies:</h3>
        <select
          value={selectedCompanyId || ""}
          onChange={(e) => setSelectedCompanyId(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        >
          <option value="">Select a company</option>
          {companies?.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCompanyId && (
        <div>
          <h3>Company Data:</h3>
          {companyDataLoading && <div>Loading company data...</div>}
          {companyDataError && (
            <div>Error loading company data: {companyDataError.message}</div>
          )}
          {locations && assets && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <div>
                <h4>Locations ({locations.length})</h4>
                <ul>
                  {locations.map((location) => (
                    <li key={location.id}>{location.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Assets ({assets.length})</h4>
                <ul>
                  {assets.map((asset) => (
                    <li key={asset.id}>{asset.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ApiExample;
