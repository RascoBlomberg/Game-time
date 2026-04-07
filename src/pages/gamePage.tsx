import DisplayCard from "../comps/display-card";
import Footer from "../comps/footer";
import Navbar from "../comps/navbar";
import PageTitle from "../comps/title";

export default function GamePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center relative text-white"
      style={{ backgroundImage: "url(/gameselect-bg.jpg)" }}>
      <PageTitle title="GamePage" />
      <Navbar />
      <div className="flex gap-60 p-15 m-2 justify-center">
        <DisplayCard
          title="Clash of Clans"
          link="/coc"
          image="/coc (2).png"
        />
        <DisplayCard
          title="Valheim"
          link="/valheimPage"
          image="/valheim-displaycard.png"
        />
      </div>
      <Footer/>
    </div>
  );
}
