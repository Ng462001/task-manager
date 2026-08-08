import { useState, useContext, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { TaskContext } from "../context/TaskContext";
import toast from "react-hot-toast";

function TaskForm({ show, handleClose, editingTask }) {
  const { addTask, updateTask } = useContext(TaskContext);

  const initialState = {
    title: "",
    description: "",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
  };

  const [task, setTask] = useState(initialState);

  useEffect(() => {
    if (show) {
      if (editingTask) {
        setTask(editingTask);
      } else {
        setTask(initialState);
      }
    }
  }, [show, editingTask]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    if (
      !task.title.trim() ||
      !task.description.trim() ||
      !task.dueDate
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    if (editingTask) {
      updateTask(task);
      toast.success("Task Updated Successfully!");
    } else {
      addTask({
        ...task,
        id: Date.now(),
        createdDate: new Date().toISOString().split("T")[0],
      });

      toast.success("Task Added Successfully!");
    }

    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      className="rounded-4"
    >
      <Modal.Header closeButton className="bg-primary text-white border-0 py-3">
        <Modal.Title className="fw-bold fs-5 d-flex align-items-center gap-2">
          <i className={editingTask ? "bi bi-pencil-square" : "bi bi-plus-circle"}></i>
          {editingTask ? "Edit Task" : "Add New Task"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label fw-semibold text-dark small">
              Task Title <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter task title"
              value={task.title}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold text-dark small">
              Due Date <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              name="dueDate"
              className="form-control"
              value={task.dueDate}
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <label className="form-label fw-semibold text-dark small">
              Description <span className="text-danger">*</span>
            </label>
            <textarea
              rows="3"
              name="description"
              className="form-control"
              placeholder="Enter task description details"
              value={task.description}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold text-dark small">
              Priority
            </label>
            <select
              name="priority"
              className="form-select"
              value={task.priority}
              onChange={handleChange}
            >
              <option value="High">🔴 High Priority</option>
              <option value="Medium">🟡 Medium Priority</option>
              <option value="Low">🔵 Low Priority</option>
            </select>
          </div>

          {editingTask && (
            <div className="col-md-6">
              <label className="form-label fw-semibold text-dark small">
                Status
              </label>
              <select
                name="status"
                className="form-select"
                value={task.status}
                onChange={handleChange}
              >
                <option value="Pending">⏳ Pending</option>
                <option value="In Progress">🔄 In Progress</option>
                <option value="Completed">✅ Completed</option>
              </select>
            </div>
          )}
        </div>
      </Modal.Body>

      <Modal.Footer className="border-0 pt-0 pb-4 px-4">
        <Button
          variant="light"
          onClick={handleClose}
          className="rounded-3 px-4"
        >
          Cancel
        </Button>

        <Button
          variant="primary"
          onClick={submit}
          className="rounded-3 px-4 shadow-sm"
        >
          {editingTask ? "Update Task" : "Save Task"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TaskForm;