import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch("/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((tasksData) => {
        setTasks(tasksData);
      });
  }, []);

  function createNewTask() {
    window.location.href = "newTask";
  }
  return (
    <>
      <div>
        <h1>AYUDA</h1>
      </div>
      <div>
        {" "}
        {tasks ? (
          tasks.map((task) => (
            <div>
              {" "}
              <Link to={`/todos/${task.id}`}> Task ID : {task.id}</Link>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <div>
        <button onClick={() => createNewTask()}>Create New Task</button>
      </div>
    </>
  );
};

export default Homepage;
