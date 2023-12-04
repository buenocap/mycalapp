export default function TaskInput(props) {
  function handleSubmit(e) {
    e.preventDefault();

    if (!props.task) return;

    const newTask = {
      taskName: props.task,
      taskDate: props.taskDueDate,
      taskTime: props.taskDueTime,
      taskComplete: false,
    };

    props.setTask("");
    props.setTaskDueDate("");
    props.setTaskDueTime("");

    props.onTaskObject(newTask);
  }

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <div>
        <label htmlFor="taskname">Task Name: </label>
        <input
          type="text"
          value={props.task}
          onChange={(e) => props.setTask(e.target.value)}
          id="taskaname"
        ></input>
      </div>

      <div>
        <label htmlFor="duedate">Due Date: </label>
        <input
          type="date"
          value={props.taskDueDate}
          onChange={(e) => props.setTaskDueDate(e.target.value)}
          id="duedate"
        ></input>
      </div>

      <div>
        <label htmlFor="timedue">Time Due: </label>
        <input
          type="time"
          value={props.taskDueTime}
          onChange={(e) => props.setTaskDueTime(e.target.value)}
          id="timedue"
        ></input>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
