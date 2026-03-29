import Navbar from "../comps/navbar";
import PotionsClock from "../comps/potions-clock";

export default function CoCPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white flex flex-col"
      style={{ backgroundImage: "url(/coc-bg.png)" }}
    >
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-0"></div>
      <Navbar />
      <div className="relative z-10 flex item-center justify-center min-h-screen">
        
        <main className="flex flex-col items-center p-8 max-w-lg mx-auto w-full max-h-[370px] bg-yellow-900 rounded-3xl shadow-lg mt-28 mb-12">
          <h1 className="text-4xl font-extrabold mb-6 tracking-wide text-yellow-300 select-none drop-shadow-lg">
            clash of clans
          </h1>
          <div className="w-full max-w-md">
            <PotionsClock />
          </div>
        </main>
      </div>
    </div>
  );
}
