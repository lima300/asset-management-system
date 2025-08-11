import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: "#3498db", textDecoration: "none" }}>
        Go back to Home
      </Link>
    </div>
  );
};
