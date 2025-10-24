import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Materiais } from "../pages/Materiais/";
import { Instrucoes } from "../pages/Instrucoes";
import { Sobre } from "../pages/Sobre";
import { Jogo } from "../pages/Jogo";
import { Referencias } from "../pages/Referencias";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Materiais" element={<Materiais />} />
        <Route path="/Instrucoes" element={<Instrucoes />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Jogo" element={<Jogo />} />
        <Route path="/Referencias" element={<Referencias />} />
      </Route>
    </Routes>
  );
}
