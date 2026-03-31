import Footer from "../comps/footer";
import Navbar from "../comps/navbar";
import ValheimClock from "../comps/valheimClock";

export default function ValheimPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white flex flex-col"
      style={{ backgroundImage: "url(/valheim-bg.jpg)" }}
    >
        
        <Navbar />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
            <main className="flex flex-col items-center p-8 max-w-lg mx-auto w-full bg-stone-900/60 backdrop-blur-md rounded-3xl shadow-lg mt-28 mb-12 border border-orange-800">
                <h1 className="text-4xl font-extrabold mb-6 tracking-wide text-orange-400 drop-shadow-lg">
                    Valheim
                </h1>
                <div className="w-full max-w-md">
                    <ValheimClock />
                </div>
            </main>
        </div>
        <Footer/>
    </div>
  );
}
