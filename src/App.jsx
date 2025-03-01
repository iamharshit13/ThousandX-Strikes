
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const taskName = prompt("Enter task name:");
    if (taskName) setTasks([...tasks, { name: taskName, count: 0 }]);
  };

  const incrementCount = (index) => {
    const newTasks = [...tasks];
    newTasks[index].count += 1;
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>ThousandX Strikes</h1>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} - {task.count} reps
            <button onClick={() => incrementCount(index)}>+1</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
