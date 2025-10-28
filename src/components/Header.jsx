import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContent";
import { useContext, useState } from "react";

import logoImg from "../assets/logo.png";
import LuaImg from "../assets/lua.png";
import SolImg from "../assets/sol.png";

export function Header() {
  const { theme, toggle } = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="w-full border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-[rgb(2,8,23)]">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/Home" className="flex items-center gap-2">
          <img src={logoImg} alt="Logo JADIO" className="h-7 w-auto md:h-8" />
          <h1 className="text-black font-bold text-lg md:text-xl dark:text-white">
            JADIO
          </h1>
        </Link>

        <nav className="hidden lg:flex flex-grow justify-center items-center space-x-6">
          <Link
            to="/Materiais"
            className="text-[#686F82] text-sm md:text-base hover:text-black transition dark:hover:text-white"
          >
            Materiais
          </Link>
          <Link
            to="/Instrucoes"
            className="text-[#686F82] text-sm md:text-base hover:text-black transition dark:hover:text-white"
          >
            Instruções
          </Link>
          <Link
            to="/Sobre"
            className="text-[#686F82] text-sm md:text-base hover:text-black transition dark:hover:text-white"
          >
            Sobre
          </Link>
          <Link
            to="/Jogo"
            className="text-[#686F82] text-sm md:text-base hover:text-black transition dark:hover:text-white"
          >
            Jogo
          </Link>
          <Link
            to="/Referencias"
            className="text-[#686F82] text-sm md:text-base hover:text-black transition dark:hover:text-white"
          >
            Referências
          </Link>
          
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/Jogo">
            
          </Link>
          <button onClick={toggle} className="w-6 h-6 md:w-7 md:h-7">
            <img
              src={theme === "light" ? LuaImg : SolImg}
              alt="Theme Icon"
              className="w-full h-full"
            />
          </button>
          <button
            onClick={handleSidebarToggle}
            className="lg:hidden w-6 h-6 md:w-7 md:h-7"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-full h-full text-black dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="lg:hidden bg-white dark:bg-[rgb(2,8,23)] border-t border-gray-200 dark:border-gray-700">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/Materiais"
              className="text-[#686F82] text-base hover:text-black transition dark:hover:text-white"
              onClick={handleSidebarToggle}
            >
              Materiais
            </Link>
            <Link
              to="/Instrucoes"
              className="text-[#686F82] text-base hover:text-black transition dark:hover:text-white"
              onClick={handleSidebarToggle}
            >
              Instruções
            </Link>
            <Link
              to="/Sobre"
              className="text-[#686F82] text-base hover:text-black transition dark:hover:text-white"
              onClick={handleSidebarToggle}
            >
              Sobre
            </Link>
            <Link
              to="/Referencias"
              className="text-[#686F82] text-base hover:text-black transition dark:hover:text-white"
              onClick={handleSidebarToggle}
            >
              Referências
            </Link>
            <Link to="/Jogo" onClick={handleSidebarToggle}>
              <button className="bg-[#0057FF] text-white font-semibold text-sm rounded-md px-4 py-2 hover:bg-blue-600 transition">
                Jogue agora
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
