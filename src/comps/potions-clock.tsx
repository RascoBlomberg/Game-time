import { useState } from "react";

export default function PotionsClock() {
    const [hours, setHours] = useState("");
    const [potions, setPotions] = useState("");
    const timeLeft = Number(hours) - 10 * Number(potions);
  return (
    <div>
      <div>
        <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} placeholder="Hours Left"></input>
      </div>
      <div>
        <input type="number" value={potions} onChange={(e) => setPotions(e.target.value)} placeholder="Potion Amount"></input>
      </div>
      <div>
        <p> Time Left: {timeLeft} Hours</p>
      </div>
    </div>
  );
}
