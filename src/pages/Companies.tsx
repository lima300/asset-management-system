import { useCompanies } from "../hooks/useCompanies";

function Companies() {
  const { data: companies, isLoading, error } = useCompanies();

  if (isLoading) {
    return <div>Loading companies...</div>;
  }

  if (error) {
    return <div>Error loading companies: {error.message}</div>;
  }

  return (
    <div>
      <h1>Companies</h1>
      <div>
        {companies?.map((company) => (
          <div
            key={company.id}
            style={{
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <h3>{company.name}</h3>
            <p>ID: {company.id}</p>
            <p>ID: {company.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
