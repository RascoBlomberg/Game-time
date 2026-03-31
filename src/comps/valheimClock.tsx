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

  const coalLeft = coalTime / 15;
  const oreLeft = oreTime / 30;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-orange-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 w-full">
      <h2 className="text-2xl font-bold text-center mb-2 drop-shadow-lg">
        Smelter Timer
      </h2>
      <div className="flex flex-col gap-3">
        <input
          type="Number"
          value={coal}
          placeholder="place amount of coal here"
          onChange={(e) => coalSet(e.target.value)}
          className="w-full max-w-md p-3 rounded-xl bg-stone-800 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        ></input>
      </div>
      <div>
        <input
          type="Number"
          value={ore}
          placeholder="place amount of ore here"
          onChange={(e) => oreSet(e.target.value)}
          className="w-full max-w-md p-3 rounded-xl bg-stone-800 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        ></input>
      </div>
      <div>
        <button
          onClick={startTimer}
          className="mt-2 bg-orange-700 hover:bg-orange-600 transition p-3 rounded-xl font-semibold shadow-md ml-10"
        >
          Start
        </button>
        <div className="text-center text-xl font-semibold mt-4">
          <p>
            TimeLeft: {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </p>
        </div>
        <div className="text-center text-sm mt-2 opacity-90">
          <p>
            coal left: {coalLeft} <br />
            ore left: {oreLeft}
          </p>
        </div>
      </div>
    </div>
  );
}
