import { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import toast from "react-hot-toast";

function TaskCard({ task, onEdit }) {
  const { deleteTask } = useContext(TaskContext);

  const priorityBadge = {
    High: "bg-danger text-white",
    Medium: "bg-warning text-dark",
    Low: "bg-primary text-white",
  };

  const statusBadge = {
    Pending: "bg-warning text-dark",
    "In Progress": "bg-info text-dark",
    Completed: "bg-success text-white",
  };

  return (
    <div className="card mb-3 border-0 shadow-sm rounded-4 overflow-hidden transition-all hover-lift">
      <div className="card-body p-3.5">
        {/* Top Badges Bar */}
        <div className="d-flex justify-content-between align-items-center mb-2.5">
          <span className={`badge ${statusBadge[task.status] || 'bg-secondary'} shadow-xs`}>
            {task.status}
          </span>
          <span className={`badge ${priorityBadge[task.priority] || 'bg-secondary'} shadow-xs`}>
            {task.priority} Priority
          </span>
        </div>

        {/* Title */}
        <h5 className="fw-bold mb-1 text-dark fs-6">
          {task.title}
        </h5>

        {/* Description */}
        <p className="text-muted small mb-3 text-truncate-2" style={{ minHeight: "2.4rem", fontSize: "0.875rem" }}>
          {task.description || "No description provided."}
        </p>

        {/* Info */}
        <div className="d-flex justify-content-between align-items-center text-muted mb-3 pt-2 border-top" style={{ fontSize: "0.8rem" }}>
          <span className="fw-medium">Due Date:</span>
          <span className="fw-bold text-dark">{task.dueDate || "N/A"}</span>
        </div>

        {/* Modern Solid Buttons (No Outlines) */}
        <div className="d-flex gap-2 justify-content-end pt-1">
          <Link
            to={`/tasks/${task.id}`}
            className="btn btn-primary btn-sm px-3 rounded-pill shadow-xs d-inline-flex align-items-center gap-1 font-semibold"
            title="View Details"
          >
            <i className="bi bi-eye"></i> View
          </Link>

          <button
            className="btn btn-warning text-white btn-sm px-3 rounded-pill shadow-xs d-inline-flex align-items-center gap-1 font-semibold"
            onClick={() => onEdit(task)}
            title="Edit Task"
          >
            <i className="bi bi-pencil-square"></i> Edit
          </button>

          <button
            className="btn btn-danger btn-sm px-3 rounded-pill shadow-xs d-inline-flex align-items-center gap-1 font-semibold"
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this task?")) {
                deleteTask(task.id);
                toast.success("Task Deleted Successfully!");
              }
            }}
            title="Delete Task"
          >
            <i className="bi bi-trash"></i> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;