import { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  const { tasks } = useContext(TaskContext);

  const total = tasks.length;
  const pending = tasks.filter((task) => task.status === "Pending").length;
  const progress = tasks.filter((task) => task.status === "In Progress").length;
  const completed = tasks.filter((task) => task.status === "Completed").length;

  const recentTasks = [...tasks].reverse().slice(0, 5);

  const priorityBadge = (priority) => {
    switch (priority) {
      case "High":
        return "bg-danger text-white";
      case "Medium":
        return "bg-warning text-dark";
      default:
        return "bg-primary text-white";
    }
  };

  const statusBadge = (status) => {
    switch (status) {
      case "Completed":
        return "bg-success text-white";
      case "In Progress":
        return "bg-info text-dark";
      default:
        return "bg-warning text-dark";
    }
  };

  return (
    <div>
      {/* Hero Welcome Header */}
      <div className="card border-0 shadow-sm rounded-4 mb-4 text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #1e3a8a, #2563eb)" }}>
        <div className="card-body p-4 p-md-5">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <span className="badge bg-white bg-opacity-20 text-black mb-2 px-3 py-1 text-uppercase tracking-wider">
                <i className="bi bi-speedometer2 me-1"></i> Dashboard Overview
              </span>
              <h2 className="fw-extrabold mb-1 display-6">
                Task Dashboard
              </h2>
              <p className="mb-0 text-white-50 fs-6 max-w-lg">
                Welcome back! Here's your task activity and overview.
              </p>
            </div>

            <Link
              to="/tasks"
              className="btn btn-light rounded-pill px-4 py-2.5 shadow-sm font-semibold d-inline-flex align-items-center gap-2"
            >
              <i className="bi bi-list-task text-primary"></i>
              <span>Manage Tasks</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Dashboard Stat Cards */}
      <div className="row g-4">
        <DashboardCard
          title="Total Tasks"
          count={total}
          color="primary"
        />

        <DashboardCard
          title="Pending"
          count={pending}
          color="warning"
        />

        <DashboardCard
          title="In Progress"
          count={progress}
          color="info"
        />

        <DashboardCard
          title="Completed"
          count={completed}
          color="success"
        />
      </div>

      {/* Recent Tasks List */}
      <div className="card border-0 shadow-sm rounded-4 mt-4">
        <div className="card-header bg-white border-0 py-3 px-4 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <div className="bg-primary bg-opacity-10 text-primary p-2 rounded-3">
              <i className="bi bi-clock-history fs-5"></i>
            </div>
            <h5 className="fw-bold mb-0 text-dark">
              Recent Tasks
            </h5>
          </div>

          <Link
            to="/tasks"
            className="btn btn-outline-primary btn-sm rounded-pill px-3.5"
          >
            View All Tasks <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>

        <div className="card-body p-4 bg-light bg-opacity-40">
          {recentTasks.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-inbox display-3 text-secondary opacity-40"></i>
              <h5 className="mt-3 text-dark fw-semibold">No Tasks Available</h5>
              <p className="text-muted small mb-0">Create your first task to get started.</p>
            </div>
          ) : (
            recentTasks.map((task) => (
              <div className="card mb-3 shadow-xs border-1 rounded-4 overflow-hidden" key={task.id}>
                <div className="card-body p-3.5 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                  <div className="space-y-1">
                    <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
                      <h6 className="fw-bold mb-0 text-dark fs-6">
                        {task.title}
                      </h6>
                      <span className={`badge ${statusBadge(task.status)}`}>
                        {task.status}
                      </span>
                      <span className={`badge ${priorityBadge(task.priority)}`}>
                        {task.priority} Priority
                      </span>
                    </div>

                    <p className="text-muted small mb-0 text-truncate" style={{ maxWidth: "550px" }}>
                      {task.description}
                    </p>
                  </div>

                  <div className="d-flex align-items-center justify-content-between justify-content-md-end gap-3 shrink-0">
                    <span className="text-muted small">
                      <i className="bi bi-calendar3 me-1"></i> {task.dueDate || "N/A"}
                    </span>
                    <Link
                      to={`/tasks/${task.id}`}
                      className="btn btn-primary btn-sm px-3 rounded-3"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;