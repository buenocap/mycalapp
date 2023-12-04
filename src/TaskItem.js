export default function TaskItem({ task, onTaskToggle }) {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        value={task.taskComplete}
        onChange={() => onTaskToggle(task.id)}
      />
      {task.taskDate ? (
        <li className={task.taskComplete ? "strike" : ""} key={task.id}>
          <h4>{task.taskName}</h4>
        </li>
      ) : (
        <li className={task.taskComplete ? "strike" : ""} key={task.id}>
          <h3>{task.taskName}</h3>
        </li>
      )}
    </div>
  );
}

//Due {task.taskDate} at {task.taskTime}
