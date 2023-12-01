import { useState } from "react";
import "./App.css";
import Calendar from "./Calendar";
import CompletionProgress from "./CompletionProgress";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

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
