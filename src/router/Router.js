import { Routes, Route } from "react-router-dom";
import Home from "../pages";
import DetailPokemon from "../pages/DetailPokemon";
import MyPokemon from "../pages/MyPokemon";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-pokemon" element={<DetailPokemon />} />
      <Route path="/my-pokemon" element={<MyPokemon />} />
    </Routes>
  );
}