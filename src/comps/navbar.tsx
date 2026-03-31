import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white shadow-md">
      <Link to="/">
        <h2 className="text-xl font-bold flex items-center gap-2">
          Game
          <img
            src="/tf2-icon.png"
            alt="TF2 icon"
            className="w-6 h-6 inline-block"
          />
          Clock
        </h2>
      </Link>
      <div className="flex gap-6">
        <Link to="/about" className="hover:text-gray-300 transition">
          {" "}
          About{" "}
        </Link>
        <Link to="/gamePage" className="hover:text-gray-300 transition">
          {" "}
          Game Page{" "}
        </Link>
      </div>
    </nav>
  );
}
