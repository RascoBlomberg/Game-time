import DisplayCard from "../comps/display-card";
import Navbar from "../comps/navbar";
export default function GamePage() {
  return (
    <div>
      <Navbar />
      <div className="flex gap-6 p-2 m-2">
        <DisplayCard
          title="Clash of Clans"
          link="/coc"
          image="src\assets\hero.png"
        />
        <DisplayCard
          title="Clash of Clans"
          link="/coc"
          image="src\assets\hero.png"
        />
      </div>
    </div>
  );
}
