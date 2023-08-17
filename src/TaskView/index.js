import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const TaskView = () => {
  const taskId = window.location.href.split("/task/")[1];
  const [task, setTask] = useState(null);

  function modifyScreen() {
    // <Navigate to={`/task/update/${taskId}`} />;
    window.location.href = `/task/update/${taskId}`;
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
      <div>
        <button id="submit" type="button" onClick={() => modifyScreen()}>
          Modify
        </button>
      </div>
    </>
  );
};

export default TaskView;
