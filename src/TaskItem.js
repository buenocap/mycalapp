/** TaskItem: Holds the structure of how a task item is displayed in the list of tasks.
 *  contains a checkbox that keeps track of the state of completion, the name of the task and if a time and date was specified the task will include
 *  a clickable indicator to show these details, with addtional functionality (edit (name, time, date), delete, add notes).
 */
import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

export default function TaskItem({
  task,
  onTaskToggle,
  onTaskDelete,
  onNewNote,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [editInterface, setEditInterface] = useState(false);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  function handleEditInterface() {
    setEditInterface(!editInterface);
  }

  function handleNoteSubmit(e) {
    e.preventDefault();
    setEditInterface(false);
  }

  return (
    <div className="task-item">
      <div className="task-content">
        <div className="quick-view">
          <input
            type="checkbox"
            value={task.taskComplete}
            onChange={() => onTaskToggle(task.id)}
          />
          <li className={task.taskComplete ? "strike" : ""} key={task.id}>
            <h3>{task.taskName}</h3>
          </li>
          <button
            onClick={handleIsOpen}
            title={isOpen ? "Close" : "Open"}
            className="task-button"
          >
            {isOpen ? <FaChevronDown /> : <FaChevronRight />}
          </button>
        </div>

        {isOpen && (
          <div className="detailed-view">
            <div className="detailedview-contents">
              <div className="detailedview-date">
                <h4>Due Date:</h4>
                <p>{task.taskDate ? task.taskTime : "N/A"}</p>
              </div>
              <div className="detailedview-time">
                <h4>Time Due:</h4>
                <p>{task.taskTime ? task.taskTime : "N/A"}</p>
              </div>
            </div>
            <div className="detailedview-note">
              {task.taskNote && (
                <div>
                  <h4>Notes:</h4>
                  <p className="note-text">{task.taskNote}</p>
                  {editInterface && (
                    <form onSubmit={handleNoteSubmit} className="new-note">
                      <label>
                        Edit Note:
                        <textarea
                          value={task.taskNote}
                          onChange={(e) => onNewNote(task.id, e.target.value)}
                          cols={25}
                          rows={5}
                        />
                      </label>
                      <hr />
                      <button type="submit">Save Note</button>
                    </form>
                  )}
                </div>
              )}
            </div>
            <div className="task-actions">
              <button title="Edit" onClick={handleEditInterface}>
                <FaRegEdit />
              </button>
              <button title="Delete" onClick={() => onTaskDelete(task.id)}>
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

//Due {task.taskDate} at {task.taskTime}
