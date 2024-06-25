import React, { useState } from "react";
import Sidebar from "../Sidebar/SideBar";
import Header from "../Header./Header";

const tasksData = [
  { label: "Active tasks", count: 700, total: 1000, color: "bg-red-500" },
  { label: "Completed tasks", count: 300, total: 1000, color: "bg-red-300" },
  { label: "Overdue tasks", count: 100, total: 1000, color: "bg-red-200" },
];

const initialTaskList = [
  { id: 1, title: "Task 1", description: "Description for Task 1" },
  { id: 2, title: "Task 2", description: "Description for Task 2" },
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

function Tasks() {
  const [tasks, setTasks] = useState(initialTaskList);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddTask = () => {
    if (newTaskTitle && newTaskDescription) {
      const newTask = {
        id: tasks.length + 1,
        title: newTaskTitle,
        description: newTaskDescription,
      };

      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
      setNewTaskDescription("");
      setShowAddForm(false); // After adding, hide the add form
    } else {
      alert("Please provide both a title and a description for the new task.");
    }
  };

  return (
    <div>
      <Header />
      <section id="tasks" className="flex bg-gray-100 h-screen">
        <Sidebar />
        <div className="w-3/4 my-16">
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
          <div className="absolute -right-4 mb-6 mr-6 -my-44">
            {!showAddForm && (
              <button
                className="bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-2xl"
                onClick={() => setShowAddForm(true)}
              >
                Add New Task
              </button>
            )}
            {showAddForm && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-xl shadow-lg w-1/3">
                  <h2 className="text-xl font-bold mb-4">Add New Task</h2>
                  <input
                    type="text"
                    placeholder="Enter Task Title"
                    className="border border-gray-300 p-2 mb-4 w-full rounded-xl"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                  />
                  <textarea
                    placeholder="Enter Task Description"
                    className="border border-gray-300 p-2 mb-4 w-full rounded-xl"
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                  ></textarea>
                  <div className="flex justify-end">
                    <button
                      className="bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-2xl mr-2"
                      onClick={handleAddTask}
                    >
                      Add Task
                    </button>
                    <button
                      className="bg-gray-300 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-2xl"
                      onClick={() => setShowAddForm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-8 w-1/2">
            <h3 className="text-lg font-bold mb-2">Task List</h3>
            <div className="grid grid-cols-1 gap-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-customColor p-4 rounded-xl shadow-md"
                >
                  <h4 className="text-md font-semibold">{task.title}</h4>
                  <p className="text-sm text-gray-700">{task.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tasks;
