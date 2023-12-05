/** TaskItem: Holds the structure of how a task item is displayed in the list of tasks.
 *  contains a checkbox that keeps track of the state of completion, the name of the task and if a time and date was specified the task will include
 *  a clickable indicator to show these details, with addtional functionality (edit (name, time, date), delete, add notes).
 */
import { FaChevronRight } from "react-icons/fa";

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
      <button>
        <FaChevronRight />
      </button>
    </div>
  );
}

//Due {task.taskDate} at {task.taskTime}
