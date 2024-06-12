import React from 'react';
import axios from 'axios';

const Task = ({ task, fetchTasks }) => {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/tasks/${task._id}`);
    fetchTasks();
  };

  const handleToggleComplete = async () => {
    await axios.put(`http://localhost:5000/tasks/${task._id}`, {
      ...task,
      completed: !task.completed,
    });
    fetchTasks();
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{task.description}</p>
      <p className={`text-sm ${task.completed ? 'text-green-600' : 'text-red-600'}`}>
        {task.completed ? 'Completed' : 'Not Completed'}
      </p>
      <div className="mt-4 space-x-2">
        <button
          onClick={handleToggleComplete}
          className={`px-4 py-2 rounded ${task.completed ? 'bg-yellow-500' : 'bg-green-500'} text-white`}
        >
          {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 rounded bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
