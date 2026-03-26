import { Route, Routes } from "react-router";
import CoCPage from "./pages/cocpage";
import HomePage from "./pages/homepage";

function About() {
  return <h1>About</h1>;
}

function NotFound() {
  return <h1>404</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/coc" element={<CoCPage />} />
    </Routes>
  );
}