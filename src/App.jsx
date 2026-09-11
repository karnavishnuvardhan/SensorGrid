import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [waterLevel, setWaterLevel] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaterLevel((oldLevel) => {
        let newLevel = oldLevel + Math.floor(Math.random() * 11) - 5;

        if (newLevel < 0) {
          newLevel = 0;
        }

        if (newLevel > 100) {
          newLevel = 100;
        }

        return newLevel;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let status;

  if (waterLevel < 30) {
    status = "LOW";
  } else if (waterLevel <= 80) {
    status = "NORMAL";
  } else {
    status = "HIGH";
  }

  return (
    <div className="dashboard">
      <h1>SensorGrid Water Level Monitor</h1>

      <div className="sensor-card">
        <h2>Water Level</h2>
        <h1>{waterLevel}%</h1>
        <h2>{status}</h2>
      </div>
    </div>
  );
}

export default App;