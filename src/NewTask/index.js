import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const NewTask = () => {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");

  function sendCreateTaskRequest() {
    console.log("Jaja wei si jala nais");

    const reqBody = {
      text: text,
      dueDate: dueDate,
      priority: priority,
    };

    fetch("/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        if (response.status === 201)
          return response.json(); // return Promise.all([response.json(), response.headers]);
        else return Promise.reject("ERROOOOOOOR");
      })
      .then((data) => {
        console.log(data);
        window.location.href = "homepage";
        // <Navigate to={"/homepage"} />;
      })
      .catch((message) => {
        alert(message);
      });
  }

  return (
    <>
      <div>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="dueDate">Due date</label>
        <input
          type="datetime-local"
          id="dueDate"
          value={dueDate}
          onChange={(event) => {
            setDueDate(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <input
          type="number"
          id="priority"
          value={priority}
          onChange={(event) => {
            setPriority(event.target.value);
          }}
        />
      </div>
      <div>
        <button
          id="submit"
          type="button"
          onClick={() => sendCreateTaskRequest()}
        >
          Add New Task
        </button>
      </div>
    </>
  );
};

export default NewTask;
