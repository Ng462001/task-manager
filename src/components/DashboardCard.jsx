import {
  FaTasks,
  FaClock,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

function DashboardCard({ title, count, color }) {
  const getIcon = () => {
    switch (title) {
      case "Total Tasks":
        return <FaTasks size={24} />;
      case "Pending":
        return <FaClock size={24} />;
      case "In Progress":
        return <FaSpinner size={24} />;
      case "Completed":
        return <FaCheckCircle size={24} />;
      default:
        return <FaTasks size={24} />;
    }
  };

  const getGradient = () => {
    switch (color) {
      case "primary":
        return "linear-gradient(135deg, #2563eb, #3b82f6)";
      case "warning":
        return "linear-gradient(135deg, #f59e0b, #fbbf24)";
      case "info":
        return "linear-gradient(135deg, #06b6d4, #38bdf8)";
      case "success":
        return "linear-gradient(135deg, #10b981, #34d399)";
      default:
        return "linear-gradient(135deg, #2563eb, #3b82f6)";
    }
  };

  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div
        className="card dashboard-card border-0 text-white shadow-sm rounded-4 h-100 overflow-hidden"
        style={{
          background: getGradient(),
          cursor: "pointer",
        }}
      >
        <div className="card-body p-4 d-flex justify-content-between align-items-center">
          <div>
            <span className="text-white-50 text-uppercase fw-bold text-xs tracking-wider d-block mb-1">
              {title}
            </span>
            <h2 className="fw-extrabold display-6 mb-0">
              {count}
            </h2>
          </div>

          <div
            className="rounded-circle d-flex justify-content-center align-items-center shadow-xs"
            style={{
              width: "56px",
              height: "56px",
              background: "rgba(255, 255, 255, 0.22)",
              backdropFilter: "blur(4px)",
            }}
          >
            {getIcon()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;