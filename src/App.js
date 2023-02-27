import "./styles.css";
import { useEffect, useRef, useState } from "react";
export default function App() {
  const timerStop = useRef(0);
  const [whatch, setWhatch] = useState(0);

  const startHandler = () => {
    timerStop.current = setInterval(
      () => setWhatch((whatch) => whatch + 1),
      1000
    );
  };

  const stopHandler = () => {
    clearInterval(timerStop.current);
    timerStop.current = 0;
  };

  return (
    <div className="App">
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
      <h1>{whatch}</h1>
    </div>
  );
}
