import { useEffect, useState } from "react";

export default function ValheimClock() {
  const [ore, oreSet] = useState("");
  const [coal, coalSet] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const oreTime = Number(ore) * 30;
  const coalTime = Number(coal) * 15;
  const [isRunning, setIsRunning] = useState(false);

  const shortestTime = Math.min(coalTime || Infinity, oreTime || Infinity);

  const startTimer = () => {
    if (shortestTime === Infinity) return;
    setTimeLeft(shortestTime);
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev: number) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const coalLeft = Math.max(Number(coal) - Math.floor((coalTime - timeLeft) / 15), 0);
  const oreLeft = Math.max(Number(ore) - Math.floor((oreTime - timeLeft) / 30), 0);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <div>
        <input
          type="Number"
          value={coal}
          placeholder="place amount of coal here"
          onChange={(e) => coalSet(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="Number"
          value={ore}
          placeholder="place amount of ore here"
          onChange={(e) => oreSet(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={startTimer}>Start</button>
        <p>
          TimeLeft: {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </p>
        <p>
          coal left: {coalLeft} <br />
          ore left: {oreLeft}
        </p>
      </div>
    </div>
  );
}
