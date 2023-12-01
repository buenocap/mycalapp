export default function TaskItem({ task }) {
  return (
    <div className="task-item">
      <form>
        <input type="checkbox" />
      </form>
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
