import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContent";
import { useContext, useState } from "react";

import logoImg from "../assets/logo.png";
import LuaImg from "../assets/lua.png";
import SolImg from "../assets/sol.png";

export function Header() {
  const { theme, toggle } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-[rgb(2,8,23)]">
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
          <button onClick={toggle} className="w-6 h-6 md:w-7 md:h-7 hidden lg:block">
            <img
              src={theme === "light" ? LuaImg : SolImg}
              alt="Theme Icon"
              className="w-full h-full"
            />
          </button>
          <button
            onClick={handleMenuToggle}
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

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full right-4 mt-2 w-auto bg-white dark:bg-[rgb(35,41,55)] rounded-xl shadow-2xl p-6 z-50">
          <nav className="flex flex-col items-start space-y-4">
            <Link
              to="/Materiais"
              className="text-[#686F82] text-base font-semibold hover:text-black transition dark:hover:text-white"
              onClick={handleMenuToggle}
            >
              Materiais
            </Link>
            <Link
              to="/Instrucoes"
              className="text-[#686F82] text-base font-semibold hover:text-black transition dark:hover:text-white"
              onClick={handleMenuToggle}
            >
              Instruções
            </Link>
            <Link
              to="/Sobre"
              className="text-[#686F82] text-base font-semibold hover:text-black transition dark:hover:text-white"
              onClick={handleMenuToggle}
            >
              Sobre
            </Link>
            <Link
              to="/Jogo"
              className="text-[#686F82] text-base font-semibold hover:text-black transition dark:hover:text-white"
              onClick={handleMenuToggle}
            >
              Jogo
            </Link>
            <Link
              to="/Referencias"
              className="text-[#686F82] text-base font-semibold hover:text-black transition dark:hover:text-white"
              onClick={handleMenuToggle}
            >
              Referências
            </Link>
          
            <div className="flex items-center justify-between w-full pt-2">
                <span className="text-[#686F82] text-base font-semibold dark:text-white"></span>
                <button onClick={() => {toggle(); handleMenuToggle();}} className="w-7 h-7">
                    <img
                        src={theme === "light" ? LuaImg : SolImg}
                        alt="Theme Icon"
                        className="w-full h-full"
                    />
                </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
