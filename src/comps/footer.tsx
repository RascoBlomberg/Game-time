import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-8 py-6 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Game Clock
        </p>

        <div className="flex gap-6 text-sm">
          <Link to="/about">
            <div className="hover:text-gray-300 transition">About</div>
          </Link>
          <Link to="/gamePage">
            <div className="hover:text-gray-300 transition">Game Page</div>
          </Link>
        </div>

        <p className="text-sm text-gray-500">Built with React ⚛️</p>
      </div>
    </footer>
  );
}
