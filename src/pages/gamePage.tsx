import DisplayCard from "../comps/display-card";
import Navbar from "../comps/navbar";
export default function GamePage() {
  return (
    <div>
      <Navbar />
      <div className="flex gap-6 p-2 m-2 justify-center">
        <DisplayCard
          title="Clash of Clans"
          link="/coc"
          image="src\assets\coc (2).png"
        />
        <DisplayCard
          title="Valheim"
          link="/valheimPage"
          image="src\assets\valheim-displaycard.png"
        />
      </div>
    </div>
  );
}
