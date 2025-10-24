import ControleAzulImg from "../assets/controle azul.png"
import ReciclavelImg from "../assets/reciclavel.png"
import NintendoImg from "../assets/nintendo.png"
import OndasImg from "../assets/ondas.png"
import PeixeFeioImg from "../assets/peixe feio.png"

export function Jogo() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white px-4 sm:px-8 lg:px-20 py-10 dark:bg-[rgb(2,8,23)]">
      

      
      <div className="flex flex-col items-center text-center mt-10">
        <img src={ControleAzulImg} alt="Controle" className="w-40 sm:w-40 mb-2 " />
        <h1 className="font-bold dark:text-white">EcoShawk</h1>
        <p className="text-gray-600 max-w-lg mt-2">
          Salve os oceanos jogando com o tubarão mais consciente do planeta
        </p>
      </div>

     
      <div className="mt-6 w-full max-w-3xl">
        <img
          src={PeixeFeioImg}
          alt="EcoShark Game"
          className="rounded-2xl shadow-md w-full object-cover"
        />
      </div>

      
      <h2 className="font-semibold mt-10 mb-6">Como Jogar</h2>

     
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
       
        <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow hover:shadow-lg transition dark:bg-[rgb(35,41,55)]">
          <img src={ReciclavelImg} alt="Reciclável" className="w-10 mb-2" />
          <h3 className="font-semibold dark:text-white">Como Funciona</h3>
          <p className="text-gray-600 text-center mt-1">
            Colete lixo e desvie de armadilhas
          </p>
        </div>

       
        <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow hover:shadow-lg transition dark:bg-[rgb(35,41,55)]">
          <img src={NintendoImg} alt="Nintendo" className="w-10 mb-2" />
          <h3 className="font-semibold dark:text-white">Personagem</h3>
          <p className="text-gray-600 text-center mt-1">
            Você joga como o EcoShawk!
          </p>
        </div>

        
        <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow hover:shadow-lg transition dark:bg-[rgb(35,41,55)]">
          <img src={OndasImg} alt="Ondas" className="w-10 mb-2" />
          <h3 className="font-semibold dark:text-white">Objetivo</h3>
          <p className="text-gray-600 text-center mt-1">
            Passe de fase e limpe o mar!
          </p>
        </div>
      </div>

    
      <button className="mt-10 mb-20 px-8 py-3 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition">
        Download Game
      </button>
    </main>
  )
}
