import Navbar from "../comps/navbar";
import Footer from "../comps/footer";
import PageTitle from "../comps/title";
export default function About() {
  return (
    <div className="min-h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: "url(/gameselect-bg.jpg)" }}>
      <Navbar />
      <PageTitle title="About" />
      <div className=" flex justify-center min-h-screen">
        About
      </div>
      <Footer/>
    </div>
  );
}
