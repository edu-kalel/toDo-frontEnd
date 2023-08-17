// import { useEffect, useState } from 'react';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import NewTask from "./NewTask";
import TaskView from "./TaskView";

function App() {
  // const [jwt, setJwt] useState("");

  // useEffect(() => {
  //   console.log("ayuda krnal")
  //   const reqBody = {
  //     "text": "Yes, it is working",
  //     "dueDate": "2024-08-20T12:00:00",
  //     "done": false,
  //     "doneDate": null,
  //     "priority": 3
  // }

  //   fetch("todos", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "post",
  //     body: JSON.stringify(reqBody)
  //   })
  //   .then((response) =>
  //   response.json())
  //   .then((data) => console.log(data));
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/newTask" element={<NewTask />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/todos/:id" element={<TaskView />} />
      </Routes>
    </>
  );
}

export default App;
