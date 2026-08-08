import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center py-5 my-5">
      <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-4 d-inline-flex mb-3">
        <i className="bi bi-exclamation-circle fs-1"></i>
      </div>
      <h1 className="fw-extrabold display-4 text-dark mb-2">404</h1>
      <h4 className="fw-bold text-secondary mb-3">Page Not Found</h4>
      <p className="text-muted max-w-md mx-auto mb-4">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/dashboard" className="btn btn-primary rounded-pill px-4 py-2.5">
        <i className="bi bi-house me-1.5"></i> Back to Dashboard
      </Link>
    </div>
  );
}

export default NotFound;