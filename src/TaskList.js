import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onTaskToggle }) {
  return (
    <div className="task">
      {tasks.map((task) => (
        <TaskItem task={task} onTaskToggle={onTaskToggle} key={task.id} />
      ))}
    </div>
  );
}
