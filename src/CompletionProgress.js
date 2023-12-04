export default function CompletionProgress({ taskList, onTaskObject }) {
  return (
    <div className="progressBar">
      <p>{`You have currently completed X out of X tasks 🤩`}</p>
    </div>
  );
}
