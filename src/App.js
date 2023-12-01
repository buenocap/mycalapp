import { useState } from "react";
import "./App.css";
import Calendar from "./Calendar";

export default function App() {
  const [task, setTask] = useState("");
  const [taskDueDate, setTaskDueDate] = useState(null);
  const [taskDueTime, setTaskDueTime] = useState(null);
  const [taskObject, setTaskObject] = useState([]);

  function handleTaskObject(newItem) {
    setTaskObject((currentTaskList) => [...currentTaskList, newItem]);
  }

  return (
    <div className="container">
      <header>
        <p>Header</p>
      </header>
      <TaskInput
        task={task}
        setTask={setTask}
        taskDueDate={taskDueDate}
        setTaskDueDate={setTaskDueDate}
        taskDueTime={taskDueTime}
        setTaskDueTime={setTaskDueTime}
        onTaskObject={handleTaskObject}
      />
      <TaskList tasks={taskObject} />
      <Calendar />
      <CompletionProgress />
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

function TaskInput(props) {
  function handleSubmit(e) {
    e.preventDefault();

    if (!props.task) return;

    const newTask = {
      taskName: props.task,
      taskDate: props.taskDueDate,
      taskTime: props.taskDueTime,
    };

    props.setTask("");
    props.setTaskDueDate("");
    props.setTaskDueTime("");

    props.onTaskObject(newTask);
  }

  return (
    <div className="task-input">
      <form onSubmit={handleSubmit}>
        <label>Task Name: </label>
        <input
          type="text"
          value={props.task}
          onChange={(e) => props.setTask(e.target.value)}
        ></input>
        <label>Due Date: </label>
        <input
          type="date"
          value={props.taskDueDate}
          onChange={(e) => props.setTaskDueDate(e.target.value)}
        ></input>
        <label>Time Due: </label>
        <input
          type="time"
          value={props.taskDueTime}
          onChange={(e) => props.setTaskDueTime(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function TaskList({ tasks }) {
  return (
    <div className="task">
      {tasks.map((task) => (
        <TaskItem task={task} />
      ))}
    </div>
  );
}

function TaskItem({ task }) {
  return (
    <div className="task-item">
      {task.taskDate ? (
        <li>
          <h3>{task.taskName}</h3> Due {task.taskDate} at {task.taskTime}
        </li>
      ) : (
        <li>
          <h3>{task.taskName}</h3>
        </li>
      )}
    </div>
  );
}

function CompletionProgress() {
  return (
    <div className="progressBar">
      <p>Hello this is the completetion progress view</p>
    </div>
  );
}
