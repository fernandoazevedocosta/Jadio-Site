import { Header } from "../components/Header"
import ChipImg from "../assets/chip.png"
import ConfigImg from "../assets/config.png"
import EnergiaImg from "../assets/energia.png"
import EscudoLaranjaImg from "../assets/escudo laranja.svg"
import DollarImg from "../assets/dollar.png"

export function Materiais() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white px-6 py-10 text-center dark:bg-[rgb(2,8,23)]">
      <Header />
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Materias e Custos</h1>
      <p className="text-gray-500 max-w-3xl mb-10">
        Uma análise transparente dos compostos e do investimento necessário
        para a construção do protótipo do JADIO
      </p>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 w-full max-w-4xl place-items-center">
        
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col w-full h-full dark:bg-[rgb(35,41,55)]">
          <img src={ChipImg} alt="Chip" className="w-8 mb-2" />
          <h2 className="font-semibold text-lg dark:text-white">Componentes Eletrônicos</h2>
          <p className="text-gray-600 mt-1">Esp32</p>
          <p className="text-gray-600">Cabo</p>
          <p className="text-gray-600">Ponte H</p>
        </div>

        
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col w-full h-full dark:bg-[rgb(35,41,55)]">
          <img src={EnergiaImg} alt="Energia" className="w-8 mb-2" />
          <h2 className="font-semibold text-lg dark:text-white">Sistema de Energia</h2>
          <p className="text-gray-600 mt-1">Bateria</p>
        </div>

       
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col w-full h-full dark:bg-[rgb(35,41,55)]">
          <img src={ConfigImg} alt="Config" className="w-8 mb-2" />
          <h2 className="font-semibold text-lg dark:text-white">Sistema Mecânico</h2>
          <p className="text-gray-600 mt-1">Motor Dc</p>
          <p className="text-gray-600">Peneira</p>
        </div>

       
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col w-full h-full dark:bg-[rgb(35,41,55)]">
          <img src={EscudoLaranjaImg} alt="Escudo" className="w-8 mb-2" />
          <h2 className="font-semibold text-lg dark:text-white">Materiais Estruturais</h2>
          <p className="text-gray-600 mt-1">Cloro</p>
          <p className="text-gray-600">Filamento</p>
          <p className="text-gray-600">Isopor</p>
        </div>
      </div>

      
      <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center mt-12 w-full max-w-2xl mb-24 dark:bg-[rgb(35,41,55)]">
        <img src={DollarImg} alt="Dollar" className="w-10 mb-3" />
        <h3 className="font-bold text-2xl dark:text-white">Custo Total do Protótipo</h3>
        <h4 className="text-cyan-500 text-3xl font-bold mt-2">R$500</h4>
      </div>
    </main>
  )
}
