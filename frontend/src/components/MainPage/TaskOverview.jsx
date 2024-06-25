// Tasks.js
import React from "react";

const tasksData = [
  { label: "Active tasks", count: 700, total: 1000, color: "bg-red-500" },
  { label: "Completed tasks", count: 300, total: 1000, color: "bg-red-300" },
  { label: "Overdue tasks", count: 100, total: 1000, color: "bg-red-200" },
];

const TaskBar = ({ label, count, total, color }) => {
  const percentage = (count / total) * 100;
  return (
    <div className="flex items-center mb-4">
      <div className="w-1/4 text-gray-700 font-semibold">{label}</div>
      <div className="flex-1 bg-gray-200 h-3 rounded relative">
        <div
          className={`h-3 rounded ${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="w-1/6 text-right text-gray-700 font-semibold ml-2">
        {count}/{total}
      </div>
    </div>
  );
};

function TasksOverview() {
  return (
    <section id="tasks" className="p-4">
      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      <div>
        {tasksData.map((task, index) => (
          <TaskBar
            key={index}
            label={task.label}
            count={task.count}
            total={task.total}
            color={task.color}
          />
        ))}
      </div>
    </section>
  );
}

export default TasksOverview;
