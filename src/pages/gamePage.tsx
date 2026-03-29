import DisplayCard from "../comps/display-card";
import Navbar from "../comps/navbar";
export default function GamePage () {
    return (
        <div>
            <Navbar />
            <DisplayCard title="Clash of Clans" link="/coc" />
        </div>
    )
}