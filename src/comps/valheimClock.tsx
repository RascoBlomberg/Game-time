import { useState } from "react";

export default function ValheimClock () {
    const [ore, oreSet] = useState("");
    const [coal, coalSet] = useState("");
    const timeLeft = Number(coal) * 15 - Number(ore) * 30;

    return(
        <div>
            <div>
                <input type="Number" value={coal} placeholder="place amount of coal here" onChange={(e) => coalSet(e.target.value)}>
                </input>
            </div>
            <div>
                <input type="Number" value={ore} placeholder="place amount of ore here" onChange={(e) => oreSet(e.target.value)}>
                </input>
            </div>
            <div>
                <p>
                    TimeLeft: {timeLeft}
                </p>
            </div>
        </div>
    )
}