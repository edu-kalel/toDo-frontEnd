import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NewTask from "../NewTask";

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
  function modifyScreen(taskId) {
    // <Navigate to={`/task/update/${taskId}`} />;
    window.location.href = `/task/update/${taskId}`;
  }
  function updateDone(id, value) {}
  return (
    <>
      <Container>
        <div>
          <h1>DASHBOARD</h1>
        </div>
        <div>
          <Button onClick={() => createNewTask()}>Create New Task</Button>
        </div>
        <Row>
          <Col>Is it done?</Col>
          <Col>ID</Col>
          <Col xs={5}>Text</Col>
          <Col>Due Date</Col>
          <Col>Priority</Col>
          <Col>Options</Col>
        </Row>
        <Row>
          {" "}
          {tasks ? (
            tasks.map((task) => (
              <div>
                {" "}
                <Row>
                  <Col>
                    <Form.Check
                      aria-label="option 1"
                      value={task.done}
                      // onChange={(e) => {
                      //     updateDone(task.id, e.target.value)
                      // }}
                    />
                    {task.done ? "true" : "false"}
                  </Col>
                  <Col>
                    <Link to={`/task/${task.id}`}>{task.id}</Link>
                  </Col>
                  <Col xs={5}>{task.text}</Col>
                  <Col>{task.dueDate}</Col>
                  <Col>{task.priority}</Col>
                  <Col>
                    {/* Edit */}
                    <div>
                      <Button
                        id="submit"
                        type="button"
                        onClick={() => modifyScreen(task.id)}
                      >
                        Edit
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            ))
          ) : (
            <></>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
