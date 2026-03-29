import { Route, Routes } from "react-router";
import CoCPage from "./pages/cocPage";
import HomePage from "./pages/homePage";
import About from "./pages/aboutPage";
import GamePage from "./pages/gamePage";
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
      <Route path="/gamePage" element={<GamePage />} />
    </Routes>
  );
}