import { createContext, useEffect, useState } from "react";
import dummyTasks from "../data/dummyData";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

  const [tasks, setTasks] = useState(() => {

    const saved = localStorage.getItem("tasks");

    return saved ? JSON.parse(saved) : dummyTasks;

  });

  useEffect(() => {

    localStorage.setItem("tasks", JSON.stringify(tasks));

  }, [tasks]);

  // Add Task
  const addTask = (task) => {

    setTasks([...tasks, task]);

  };

  // Delete Task
  const deleteTask = (id) => {

    setTasks(tasks.filter((task) => task.id !== id));

  };

  // Update Task
  const updateTask = (updatedTask) => {

    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );

  };

  return (

    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask
      }}
    >
      {children}
    </TaskContext.Provider>

  );

};