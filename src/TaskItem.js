import { useState } from "react";

export default function TaskItem({ task }) {
  const [isDone, setIsDone] = useState(false);

  function handleIsDone() {
    setIsDone(!isDone);
  }
  return (
    <div className="task-item">
      <form>
        <input type="checkbox" onChange={(e) => handleIsDone(e.target.value)} />
      </form>
      {task.taskDate ? (
        <li className={isDone ? "strike" : ""} key={task.taskName}>
          <h4>{task.taskName}</h4> Due {task.taskDate} at {task.taskTime}
        </li>
      ) : (
        <li className={isDone ? "strike" : ""}>
          <h3>{task.taskName}</h3>
        </li>
      )}
    </div>
  );
}
