import React from "react";
import TaskList from "../src/Components/Tasklist";
import ThemeToggle from "../src/Components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 ">
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Task Manager</h1>
          <ThemeToggle />
        </div>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
