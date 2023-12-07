import { useState } from "react";
import "./App.css";
import CompletionProgress from "./CompletionProgress";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

export default function App() {
  const [task, setTask] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskDueTime, setTaskDueTime] = useState("");
  const [taskObject, setTaskObject] = useState([]);

  function handleTaskObject(newItem) {
    setTaskObject((currentTaskList) => [...currentTaskList, newItem]);
  }

  function handleTaskToggle(id) {
    setTaskObject((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, taskComplete: !task.taskComplete } : task
      )
    );
  }

  function handleTaskDelete(id) {
    setTaskObject((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleNewNote(id, newNote) {
    if (newNote.length === 0) {
      newNote = " ";
    }
    setTaskObject((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, taskNote: newNote } : task
      )
    );
  }

  return (
    <div className="container">
      <TaskInput
        task={task}
        setTask={setTask}
        taskDueDate={taskDueDate}
        setTaskDueDate={setTaskDueDate}
        taskDueTime={taskDueTime}
        setTaskDueTime={setTaskDueTime}
        onTaskObject={handleTaskObject}
      />
      <TaskList
        tasks={taskObject}
        onTaskToggle={handleTaskToggle}
        onTaskDelete={handleTaskDelete}
        onNewNote={handleNewNote}
      />
      {/* <OpenTask /> */}
      <CompletionProgress
        taskList={taskObject}
        onTaskObject={handleTaskObject}
      />
    </div>
  );
}
