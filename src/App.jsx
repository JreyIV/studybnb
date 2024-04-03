import { Routes, Route } from "react-router-dom";
import { Home, Location } from "./pages/index.js";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Location />} />
    </Routes>
  );
}
