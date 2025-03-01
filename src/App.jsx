import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const taskName = prompt("Enter task name:");
    if (taskName) {
      setTasks([...tasks, { name: taskName, count: 0 }]);
    }
  };

  const incrementCount = (index) => {
    const newTasks = [...tasks];
    newTasks[index].count += 1;
    setTasks(newTasks);
  };

  const decrementCount = (index) => {
    const newTasks = [...tasks];
    if (newTasks[index].count > 0) {
      newTasks[index].count -= 1;
      setTasks(newTasks);
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-5">ThousandX Strikes</h1>
      <button
        onClick={addTask}
        className="mb-5 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded"
      >
        Add Task
      </button>
      <div className="w-full max-w-md">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-800 p-4 mb-2 rounded"
          >
            <span>{task.name} - {task.count} reps</span>
            <div>
              <button
                onClick={() => decrementCount(index)}
                className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded mx-1"
              >
                ➖
              </button>
              <button
                onClick={() => incrementCount(index)}
                className="px-3 py-1 bg-green-500 hover:bg-green-600 rounded mx-1"
              >
                ➕
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded mx-1"
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
