import Footer from "../comps/footer";
import Navbar from "../comps/navbar";
import { useNavigate } from "react-router";
import PageTitle from "../comps/title";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: "url(/valheim-bg1.jpg)" }}
    >
      <Navbar />
        <PageTitle title="Game Clock" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-orange-400 drop-shadow-lg">
          Game Clock
        </h1>

        <p className="mt-4 text-lg text-stone-300 max-w-lg">
          Optimize your smelting, manage resources and become a true gamer.
        </p>

        <button
          onClick={() => navigate("/gamePage")}
          className="mt-8 bg-orange-700 hover:bg-orange-600 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
        >
          Enter Gamepage
        </button>
      </div>
      <Footer />
    </div>
  );
}
