// import { useEffect, useState } from 'react';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import NewTask from "./NewTask";
import TaskView from "./TaskView";
import UpdateTask from "./UpdateTask";
import StartPage from "./StartPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/newTask" element={<NewTask />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/task/:id" element={<TaskView />} />
        <Route path="/task/update/:id" element={<UpdateTask />} />
        <Route path="/" element={<StartPage />} />
      </Routes>
    </>
  );
}

export default App;
