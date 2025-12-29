import React, { useState, useRef, useEffect } from "react";

const Todolist = () => {
  const [task, setTask] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [editIndex, setEditIndex] = useState(null);

  const inputRef = useRef(null);

  // ADD TASK
  function addTask() {
    const value = inputRef.current.value;
    if (value.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: value,
    };

    setTask([newTask, ...task]);
    inputRef.current.value = "";
  }

  // DELETE TASK
  function deleteTask(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }

  // EDIT BUTTON CLICK
  function updateTask(index) {
    setEditIndex(index);
  }

  // SAVE UPDATED TASK
  function saveTask(index, newText) {
    const updatedTasks = task.map((item, i) =>
      i === index ? { ...item, text: newText } : item
    );
    setTask(updatedTasks);
    setEditIndex(null);
  }

  // LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  return (
    <div className="container mt-3">
      <div className="input-group mb-3">
        <input type="text" ref={inputRef} className="form-control" />
        <button className="btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Task</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {task.map((item, index) => (
            <tr key={index}>
              <td>
                {editIndex === index ? (
                  <input
                    defaultValue={item.text}
                    onBlur={(e) => saveTask(index, e.target.value)}
                    autoFocus
                  />
                ) : (
                  item.text
                )}
              </td>

              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => updateTask(index)}
                >
                  Edit
                </button>
              </td>

              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todolist;
