export default function TaskInput(props) {
  function handleSubmit(e) {
    e.preventDefault();

    if (!props.task) return;

    const newTask = {
      taskName: props.task,
      taskDate: props.taskDueDate,
      taskTime: props.taskDueTime,
    };

    props.setTask("");
    props.setTaskDueDate("");
    props.setTaskDueTime("");

    props.onTaskObject(newTask);
  }

  return (
    <div className="task-input">
      <form onSubmit={handleSubmit}>
        <label>Task Name: </label>
        <input
          type="text"
          value={props.task}
          onChange={(e) => props.setTask(e.target.value)}
        ></input>
        <label>Due Date: </label>
        <input
          type="date"
          value={props.taskDueDate}
          onChange={(e) => props.setTaskDueDate(e.target.value)}
        ></input>
        <label>Time Due: </label>
        <input
          type="time"
          value={props.taskDueTime}
          onChange={(e) => props.setTaskDueTime(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
