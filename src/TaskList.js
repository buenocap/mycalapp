import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
  return (
    <div className="task">
      {tasks.map((task) => (
        <TaskItem task={task} />
      ))}
    </div>
  );
}
