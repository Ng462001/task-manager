import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks, onEdit }) {
  const getHeaderBg = () => {
    switch (title) {
      case "Pending":
        return "bg-warning text-dark";
      case "In Progress":
        return "bg-info text-white";
      case "Completed":
        return "bg-success text-white";
      default:
        return "bg-primary text-white";
    }
  };

  return (
    <div className="col-lg-4 mb-4">
      <div className="card shadow-sm h-100 border-0 rounded-4 overflow-hidden">
        {/* Column Header */}
        <div className={`card-header py-3 border-0 d-flex justify-content-between align-items-center ${getHeaderBg()}`}>
          <h6 className="fw-bold mb-0 text-uppercase tracking-wider">
            {title}
          </h6>
          <span className="badge bg-white text-dark rounded-pill px-2.5 py-1 font-bold">
            {tasks.length}
          </span>
        </div>

        {/* Column Body */}
        <div
          className="card-body bg-light bg-opacity-50 p-3"
          style={{
            minHeight: "450px",
            maxHeight: "650px",
            overflowY: "auto",
          }}
        >
          {tasks.length === 0 ? (
            <div className="text-center text-muted py-5 my-4">
              <i className="bi bi-inbox fs-1 text-secondary opacity-50"></i>
              <p className="mt-2 mb-0 fw-medium small">No tasks in {title}</p>
            </div>
          ) : (
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={onEdit}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskColumn;