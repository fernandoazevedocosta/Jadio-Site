import { Routes, Route } from "react-router";

import { Home } from "../pages/Home";
import { Materiais } from "../pages/Materiais/";
import { Instrucoes } from "../pages/Instrucoes";
import { Sobre } from "../pages/Sobre";
import { Jogo } from "../pages/Jogo";
import { Referencias } from "../pages/Referencias";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Materiais" element={<Materiais />} />
      <Route path="/Materiais/Home" element={<Home />} />
      <Route path="/Instrucoes" element={<Instrucoes />} />
      <Route path="/Instrucoes/Home" element={<Home />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Sobre/Home" element={<Home />} />
      <Route path="/Jogo" element={<Jogo />} />
      <Route path="/Jogo/Home" element={<Home />} />
      <Route path="/Referencias" element={<Referencias />} />
      <Route path="/Referencias/Home" element={<Home />} />
    </Routes>
  );
}
