import { useState } from "react";

export default function PotionsClock() {
  const [hours, setHours] = useState("");
  const [potions, setPotions] = useState("");
  const timeLeft = Number(hours) - 10 * Number(potions);
  return (
    <div className="text-yellow-300 rounded-2xl p-6 flex flex-col gap-4 w-full">
      <h2 className="text-2xl font-bold text-center mb-2 drop-shadow-lg">
        Potion Timer
      </h2>

      <div className="flex flex-col gap-2">
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="Hours Left"
          className="p-3 rounded-xl bg-yellow-800 text-white placeholder-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></input>
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="number"
          value={potions}
          onChange={(e) => setPotions(e.target.value)}
          placeholder="Potion Amount"
          className="p-3 rounded-xl bg-yellow-800 text-white placeholder-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></input>
      </div>
      <div className="text-center text-xl font-semibold mt-2">
        <p> Time Left: {timeLeft} Hours</p>
      </div>
    </div>
  );
}
