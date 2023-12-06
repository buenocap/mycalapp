/** Tasklist: This component creates an unordered list made up of TaskItems
 */

import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  onTaskToggle,
  onTaskDelete,
  onNewNote,
}) {
  return (
    <div className="task">
      <ul>
        {tasks.map((task) => (
          <TaskItem
            task={task}
            onTaskToggle={onTaskToggle}
            onTaskDelete={onTaskDelete}
            onNewNote={onNewNote}
            key={task.id}
          />
        ))}
      </ul>
    </div>
  );
}
