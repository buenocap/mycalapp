export default function Calendar() {
  const month = "December";
  return (
    <div class="calendar calendar-container">
      <div className="calendar-header">
        <h3 className="calendar-month">{month}</h3>
      </div>
      <div>
        <p>Calendar Object</p>
      </div>
    </div>
  );
}
