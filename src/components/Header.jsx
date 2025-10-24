import { Link } from "react-router"
import { ThemeContext } from "../context/ThemeContent"
import { useContext, useState } from "react"

import logoImg from "../assets/logo.png"
import LuaImg from "../assets/lua.png"
import SolImg from "../assets/sol.png"

export function Header() {
  const { theme, toggle } = useContext(ThemeContext)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <header className="w-full border-b border-gray-300 bg-white dark:bg-[rgb(2,8,23)]">
      <div className="flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link to="/Home" className="flex items-center gap-2">
          <img src={logoImg} alt="Logo JADIO" className="h-7 w-auto md:h-8" />
          <h1 className="text-black font-bold text-lg md:text-xl dark:text-white">JADIO</h1>
        </Link>

        {/* Desktop Navigation - Centralized */}
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

        {/* Theme Toggle Button (Desktop) */}
        <button
          onClick={toggle}
          className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full cursor-pointer"
        >
          {theme === "dark" ? (
            <img className="h-5 w-5" src={SolImg} alt="Light Mode" />
          ) : (
            <img className="h-5 w-5" src={LuaImg} alt="Dark Mode" />
          )}
        </button>

        {/* Hamburger Menu (Mobile) */}
        <button 
          className="lg:hidden text-gray-700 dark:text-white" 
          onClick={handleSidebarToggle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
        onClick={handleSidebarToggle}
      ></div>

      <div 
        className={`fixed left-0 top-0 w-64 h-full bg-white dark:bg-[rgb(2,8,23)] transform transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
      >
        <div className="flex items-center justify-between p-6">
          <Link to="/Home" className="flex items-center gap-2">
            <img src={logoImg} alt="Logo JADIO" className="h-7 w-auto md:h-8" />
            <h1 className="text-black font-bold text-lg md:text-xl dark:text-white">JADIO</h1>
          </Link>
          <button onClick={handleSidebarToggle} className="text-gray-700 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <nav className="flex flex-col items-start p-6 space-y-4">
          <Link 
            to="/Materiais" 
            className="text-[#686F82] text-sm md:text-base hover:text-black transition dark:hover:text-white"
            onClick={handleSidebarToggle}
          >
            Materiais
          </Link>
          <Link 
            to="/Instrucoes" 
            className="text-[#686F82] text-sm md:text-base hover:text-black transition dark:hover:text-white"
            onClick={handleSidebarToggle}
          >
            Instruções
          </Link>
          <Link 
            to="/Sobre" 
            className="text-[#686F82] text-sm md:text-base hover:text-black transition dark:hover:text-white"
            onClick={handleSidebarToggle}
          >
            Sobre
          </Link>
          <Link 
            to="/Jogo" 
            className="text-[#686F82] text-sm md:text-base hover:text-black transition dark:hover:text-white"
            onClick={handleSidebarToggle}
          >
            Jogo
          </Link>
          <Link 
            to="/Referencias" 
            className="text-[#686F82] text-sm md:text-base hover:text-black transition dark:hover:text-white"
            onClick={handleSidebarToggle}
          >
            Referências
          </Link>
        </nav>
        <div className="absolute bottom-6 left-6">
          <button
            onClick={toggle}
            className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer"
          >
            {theme === "dark" ? (
              <img className="h-5 w-5" src={SolImg} alt="Light Mode" />
            ) : (
              <img className="h-5 w-5" src={LuaImg} alt="Dark Mode" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
