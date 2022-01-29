import { Routes, Route } from "react-router-dom";
import Home from "../pages";
import DetailPokemon from "../pages/DetailPokemon";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-pokemon" element={<DetailPokemon />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}