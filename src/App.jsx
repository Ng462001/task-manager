import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Main Content */}
      <div className="container py-4 flex-grow-1">
        <Routes>
          {/* Redirect to Dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Task Management */}
          <Route path="/tasks" element={<Tasks />} />

          {/* Task Details */}
          <Route path="/tasks/:id" element={<TaskDetails />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Toaster position="top-right" />
    </div>
  );
}

export default App;