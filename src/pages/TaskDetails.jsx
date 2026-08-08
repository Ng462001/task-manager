import { useContext, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import toast from "react-hot-toast";

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, deleteTask } = useContext(TaskContext);

  const [showModal, setShowModal] = useState(false);

  const task = tasks.find((t) => t.id.toString() === id);

  if (!task) {
    return (
      <div className="container py-5 text-center">
        <div className="bg-danger bg-opacity-10 text-danger rounded-circle p-4 d-inline-flex mb-3">
          <i className="bi bi-exclamation-triangle fs-1"></i>
        </div>
        <h3 className="fw-bold text-dark">Task Not Found</h3>
        <p className="text-muted small max-w-sm mx-auto">
          The requested task may have been removed or does not exist.
        </p>

        <Link to="/tasks" className="btn btn-primary rounded-pill px-4 mt-2">
          <i className="bi bi-arrow-left me-1"></i> Back to Tasks Board
        </Link>
      </div>
    );
  }

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

  const deleteCurrentTask = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(task.id);
      toast.success("Task Deleted Successfully!");
      navigate("/tasks");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-2">
      {/* Top Back Nav */}
      <div className="mb-3">
        <Link to="/tasks" className="btn btn-light btn-sm rounded-pill px-3 shadow-xs">
          <i className="bi bi-arrow-left me-1"></i> Back to Tasks
        </Link>
      </div>

      {/* Main Task Detail Card */}
      <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
        <div className="card-header bg-primary text-white p-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div>
            <span className="badge bg-white bg-opacity-20 text-black mb-2 px-3 py-1 uppercase">
              <i className="bi bi-card-checklist me-1"></i> Task #{task.id}
            </span>
            <h3 className="fw-bold mb-0 display-7">
              {task.title}
            </h3>
          </div>

          <div className="d-flex gap-2">
            <span className={`badge fs-6 ${statusBadge[task.status]}`}>
              {task.status}
            </span>
            <span className={`badge fs-6 ${priorityBadge[task.priority]}`}>
              {task.priority} Priority
            </span>
          </div>
        </div>

        <div className="card-body p-4">
          <div className="mb-4">
            <h6 className="text-uppercase text-muted fw-bold small mb-2">
              <i className="bi bi-text-paragraph me-1"></i> Description
            </h6>
            <div className="p-3 bg-light rounded-3 text-dark leading-relaxed" style={{ fontSize: "0.95rem" }}>
              {task.description || "No description provided."}
            </div>
          </div>

          <div className="row g-3 pt-2">
            <div className="col-md-6">
              <div className="p-3 border rounded-3 bg-white">
                <span className="text-muted small uppercase d-block font-medium mb-1">
                  <i className="bi bi-calendar-event me-1"></i> Due Date
                </span>
                <span className="fw-bold text-dark fs-6">{task.dueDate || "N/A"}</span>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-3 border rounded-3 bg-white">
                <span className="text-muted small uppercase d-block font-medium mb-1">
                  <i className="bi bi-clock me-1"></i> Created Date
                </span>
                <span className="fw-bold text-dark fs-6">{task.createdDate || "N/A"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card-footer bg-white border-top-0 p-4 pt-0">
          <div className="d-flex flex-wrap gap-2 pt-3 border-top">
            <button
              className="btn btn-warning px-4 rounded-3 text-white"
              onClick={() => setShowModal(true)}
            >
              <i className="bi bi-pencil-square me-1.5"></i> Edit Task
            </button>

            <button
              className="btn btn-danger px-4 rounded-3"
              onClick={deleteCurrentTask}
            >
              <i className="bi bi-trash me-1.5"></i> Delete Task
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <TaskForm
        show={showModal}
        handleClose={() => setShowModal(false)}
        editingTask={task}
      />
    </div>
  );
}

export default TaskDetails;