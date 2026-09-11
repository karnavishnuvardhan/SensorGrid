function SensorCard({ name, value, unit, status }) {
  return (
    <div className="sensor-card">
      <h2>{name}</h2>
      <h1>{value} {unit}</h1>
      <p>Status: {status}</p>
    </div>
  );
}

export default SensorCard;