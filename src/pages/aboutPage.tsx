import Navbar from "../comps/navbar";
import Footer from "../comps/footer";
export default function About() {
  return (
    <div className="min-h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: "url(/gameselect-bg.jpg)" }}>
      <Navbar />
      <div className=" flex justify-center min-h-screen">
        About
      </div>
      <Footer/>
    </div>
  );
}
