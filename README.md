# 📋 Task Management Dashboard

A modern and responsive **Task Management Dashboard** built with **React.js**, **React Router DOM**, **Context API**, **Bootstrap 5**, and **LocalStorage**. The application allows users to manage tasks efficiently with a clean Kanban-style interface.

---

## 🚀 Features

- 📊 Dashboard with task statistics
  - Total Tasks
  - Pending Tasks
  - In Progress Tasks
  - Completed Tasks

- 📌 Kanban Board
  - Pending
  - In Progress
  - Completed

- ➕ Add New Task (Bootstrap Modal)

- ✏️ Edit Existing Task

- 🗑️ Delete Task

- 🔍 Search Tasks
  - Search by title
  - Search by description

- 🎯 Filter Tasks
  - High Priority
  - Medium Priority
  - Low Priority

- 🔄 Change Task Status
  - Pending
  - In Progress
  - Completed

- 📄 Task Details Page

- 💾 LocalStorage Support
  - Tasks are automatically saved in the browser.
  - Data remains available after page refresh.

- 📱 Fully Responsive UI

---

## 🛠️ Tech Stack

- React.js
- React Router DOM
- Context API
- Bootstrap 5
- JavaScript (ES6+)
- HTML5
- CSS3
- LocalStorage

---

## 📁 Project Structure

```
task-management-dashboard/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── DashboardCard.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskColumn.jsx
│   │   └── TaskForm.jsx
│   │
│   ├── context/
│   │   └── TaskContext.jsx
│   │
│   ├── data/
│   │   └── dummyData.js
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Tasks.jsx
│   │   ├── TaskDetails.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/task-management-dashboard.git
```

Go to the project folder

```bash
cd task-management-dashboard
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open your browser

```
http://localhost:5173
```

---

## 📌 Application Pages

### Dashboard

- View task statistics
- Recent tasks
- Navigate to task management

### Task Management

- Add Task
- Edit Task
- Delete Task
- Search Tasks
- Filter by Priority
- Update Task Status

### Task Details

Displays complete task information:

- Title
- Description
- Priority
- Status
- Due Date
- Created Date

---

## 💾 LocalStorage

The application automatically stores tasks in **LocalStorage**.

This allows:

- Persistent task storage
- Data available after page refresh
- No backend required

---

## 🎯 Future Improvements

- Drag & Drop Kanban Board
- Dark Mode
- Due Date Notifications
- Task Categories
- Authentication
- Backend API Integration
- Pagination
- Sorting
- Toast Notifications

---

## 📸 Screenshots

_Add screenshots of your application here._

Example:

- Dashboard
- Task Board
- Add Task Modal
- Task Details

---

## 👨‍💻 Author

**Nikhil Gahane**

React.js Developer

---

## 📄 License

This project is created for learning and technical assessment purposes.