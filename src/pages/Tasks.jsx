import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskColumn from "../components/TaskColumn";
import TaskForm from "../components/TaskForm";
import { useNavigate } from "react-router-dom";

function Tasks() {
  const { tasks } = useContext(TaskContext);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    const searchMatch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const priorityMatch = priority === "All" || task.priority === priority;

    return searchMatch && priorityMatch;
  });

  const openAddModal = () => {
    setEditingTask(null);
    setShowModal(true);
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  return (
    <div>
      {/* Header Banner */}
      <div className="card shadow-sm border-0 rounded-4 mb-4 text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #1d4ed8, #3b82f6)" }}>
        <div className="card-body p-4 p-md-5">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <span className="badge bg-white bg-opacity-20 text-black mb-2 px-3 py-1 text-uppercase tracking-wider">
                <i className="bi bi-kanban me-1"></i> Task Workspace
              </span>
              <h2 className="fw-extrabold mb-1 display-6">
                Task Management
              </h2>
              <p className="mb-0 text-white-50 fs-6">
                Organize, track, and manage your daily workflow efficiently.
              </p>
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn btn-light rounded-pill px-4 font-semibold shadow-xs"
                onClick={() => navigate("/dashboard")}
              >
                <i className="bi bi-speedometer2 me-1.5"></i> Dashboard
              </button>

              <button
                className="btn btn-warning text-white rounded-pill px-4 font-semibold shadow-sm"
                onClick={openAddModal}
              >
                <i className="bi bi-plus-circle me-1.5"></i> Add Task
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Stats Bar */}
      <div className="row g-3 mb-4">
        <div className="col-lg-3 col-md-6">
          <div className="card border-0 shadow-xs rounded-4 bg-white">
            <div className="card-body p-3.5 d-flex align-items-center gap-3">
              <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-3">
                <i className="bi bi-list-task fs-4"></i>
              </div>
              <div>
                <span className="text-muted small uppercase font-semibold">Total Tasks</span>
                <h4 className="fw-extrabold text-dark mb-0">{tasks.length}</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card border-0 shadow-xs rounded-4 bg-white">
            <div className="card-body p-3.5 d-flex align-items-center gap-3">
              <div className="bg-warning bg-opacity-10 text-warning p-3 rounded-3">
                <i className="bi bi-hourglass-split fs-4"></i>
              </div>
              <div>
                <span className="text-muted small uppercase font-semibold">Pending</span>
                <h4 className="fw-extrabold text-dark mb-0">
                  {tasks.filter((t) => t.status === "Pending").length}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card border-0 shadow-xs rounded-4 bg-white">
            <div className="card-body p-3.5 d-flex align-items-center gap-3">
              <div className="bg-info bg-opacity-10 text-info p-3 rounded-3">
                <i className="bi bi-arrow-repeat fs-4"></i>
              </div>
              <div>
                <span className="text-muted small uppercase font-semibold">In Progress</span>
                <h4 className="fw-extrabold text-dark mb-0">
                  {tasks.filter((t) => t.status === "In Progress").length}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card border-0 shadow-xs rounded-4 bg-white">
            <div className="card-body p-3.5 d-flex align-items-center gap-3">
              <div className="bg-success bg-opacity-10 text-success p-3 rounded-3">
                <i className="bi bi-check-circle-fill fs-4"></i>
              </div>
              <div>
                <span className="text-muted small uppercase font-semibold">Completed</span>
                <h4 className="fw-extrabold text-dark mb-0">
                  {tasks.filter((t) => t.status === "Completed").length}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Priority Filter Bar */}
      <div className="card shadow-xs border-0 rounded-4 mb-4">
        <div className="card-body p-3.5">
          <div className="row g-3">
            <div className="col-md-8">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0 text-muted">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  className="form-control border-start-0 ps-0"
                  placeholder="Search tasks by title or description..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text bg-white text-muted">
                  <i className="bi bi-funnel"></i>
                </span>
                <select
                  className="form-select"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="All">All Priorities</option>
                  <option value="High">🔴 High Priority</option>
                  <option value="Medium">🟡 Medium Priority</option>
                  <option value="Low">🔵 Low Priority</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kanban Board Columns */}
      <div className="row">
        <TaskColumn
          title="Pending"
          tasks={filteredTasks.filter((task) => task.status === "Pending")}
          onEdit={openEditModal}
        />

        <TaskColumn
          title="In Progress"
          tasks={filteredTasks.filter((task) => task.status === "In Progress")}
          onEdit={openEditModal}
        />

        <TaskColumn
          title="Completed"
          tasks={filteredTasks.filter((task) => task.status === "Completed")}
          onEdit={openEditModal}
        />
      </div>

      {/* Task Add / Edit Modal */}
      <TaskForm
        show={showModal}
        handleClose={() => {
          setShowModal(false);
          setEditingTask(null);
        }}
        editingTask={editingTask}
      />
    </div>
  );
}

export default Tasks;