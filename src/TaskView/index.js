import React, { useEffect, useState } from "react";

const TaskView = () => {
  const taskId = window.location.href.split("/todos/")[1];
  const [task, setTask] = useState(null);
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
    <div>
      <h1>Task {taskId}</h1>
      {task ? (
        <>
          <h2>Is it done? : {task.done}</h2>
          <h3>Due Date: {task.dueDate}</h3>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TaskView;
