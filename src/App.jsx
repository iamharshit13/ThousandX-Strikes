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
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="w-full max-w-md text-center p-6 bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-wide mb-6 text-blue-400">
          ThousandX Strikes 🚀
        </h1>
        <button
          onClick={addTask}
          className="mb-5 px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg shadow-lg text-lg font-semibold"
        >
          ➕ Add Task
        </button>

        <div className="w-full">
          {tasks.length === 0 ? (
            <p className="text-gray-400 text-center">No tasks added yet.</p>
          ) : (
            <div className="space-y-4">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-700 p-4 rounded-lg shadow-md transition transform hover:scale-105"
                >
                  <span className="text-lg font-medium">{task.name}</span>
                  <span className="text-blue-300 text-xl font-bold">
                    {task.count} reps
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => decrementCount(index)}
                      className="px-3 py-2 bg-red-600 hover:bg-red-500 transition rounded-lg shadow-md"
                    >
                      ➖
                    </button>
                    <button
                      onClick={() => incrementCount(index)}
                      className="px-3 py-2 bg-green-600 hover:bg-green-500 transition rounded-lg shadow-md"
                    >
                      ➕
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      className="px-3 py-2 bg-gray-600 hover:bg-gray-500 transition rounded-lg shadow-md"
                    >
                      🗑
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
