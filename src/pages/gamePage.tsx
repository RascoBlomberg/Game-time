import Footer from "../comps/footer";
import DisplayCard from "../comps/display-card";
import Navbar from "../comps/navbar";
export default function GamePage() {
  return (
    <div className="min-h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: "url(/gameselect-bg.jpg)" }}>
      <Navbar />
      <div className="flex gap-60 p-15 m-2 justify-center">
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
      <Footer/>
    </div>
  );
}
