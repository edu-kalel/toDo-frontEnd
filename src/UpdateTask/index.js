import React, { useEffect, useState } from "react";

const UpdateTask = () => {
  const taskId = window.location.href.split("/task/update/")[1];
  const [task, setTask] = useState({
    text: "",
    dueDate: "",
    priority: "",
  });

  function updateTask(prop, value) {
    const updatedTask = { ...task };
    updatedTask[prop] = value;
    setTask(updatedTask);
  }

  function sendUpdateTaskRequest() {
    fetch(`/todos/${taskId}/update`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "put",
      body: JSON.stringify(task),
    })
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((taskData) => {
        setTask(taskData);
      })
      .then((data) => {
        console.log(data);
        window.location.href = "/homepage";
      });
  }

  useEffect(() => {
    fetch(`/todos/${taskId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((taskData) => {
        setTask(taskData);
      });
  }, []);

  return (
    <>
      <div>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          value={task.text}
          onChange={(event) => {
            updateTask("text", event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="dueDate">Due date</label>
        <input
          type="datetime-local"
          id="dueDate"
          value={task.dueDate}
          onChange={(event) => {
            updateTask("dueDate", event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <input
          type="number"
          id="priority"
          value={task.priority}
          onChange={(event) => {
            updateTask("priority", event.target.value);
          }}
        />
      </div>
      <div>
        <button
          id="submit"
          type="button"
          onClick={() => sendUpdateTaskRequest()}
        >
          Update Task
        </button>
      </div>
    </>
  );
};

export default UpdateTask;
