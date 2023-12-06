/** Completion Progress: Keeps track of how many tasks a user has checked off as completed and relays that information
 * to the user with the addition of some whimsical comments based on the users current progress with their current list of tasks.
 */

export default function CompletionProgress({ taskList }) {
  if (!taskList.length) {
    return (
      <div className="progressBar">
        <p>{`Add some new tasks! Let's get them done 😎 `}</p>
      </div>
    );
  }

  const numTasks = taskList.length;
  const numCompleted = taskList.filter((task) => task.taskComplete).length;
  const percentage = Math.round((numCompleted / numTasks) * 100);

  return (
    <div className="progressBar">
      {percentage === 100 ? (
        <p>You've completed all your tasks! 😎 Time for a break 😴</p>
      ) : (
        <p>{`You have currently completed ${numCompleted} out of ${numTasks} tasks 🤓`}</p>
      )}
    </div>
  );
}
