/** Tasklist: This component creates an unordered list made up of TaskItems
 */

import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onTaskToggle }) {
  return (
    <div className="task">
      <ul>
        {tasks.map((task) => (
          <TaskItem task={task} onTaskToggle={onTaskToggle} key={task.id} />
        ))}
      </ul>
    </div>
  );
}
