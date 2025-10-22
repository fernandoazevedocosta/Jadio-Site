import { Header } from "../components/Header"
import BateriaImg from "../assets/bateria.png";
import WifiImg from "../assets/wifi.png";
import MapaImg from "../assets/mapa.png";
import CelularImg from "../assets/celular.png";
import CheckImg from "../assets/Check.png";
import WarningImg from "../assets/warning.png";

export function Instrucoes() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white p-10 font-sans dark:bg-[rgb(2,8,23)]">
    <Header />
      <section className="max-w-4xl text-center mb-12 px-5">
        <h1 className="text-black font-bold text-lg md:text-xl mb-2 dark:text-white ">Instruções de Uso</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-tight md:leading-relaxed">
          Guia completo para operar o JADIO de forma segura e eficiente. Siga estas instruções para
          obter o máximo desempenho do seu peixe robô.
        </p>
      </section>

      
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 max-w-6xl w-full px-5 md:px-0">
       
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-default dark:bg-[rgb(35,41,55)]">
          <img src={BateriaImg} alt="icone bateria" className="mb-3 w-6 h-6" />
          <h2 className="font-semibold text-black text-sm mb-1 dark:text-white">
            1.<span className="font-extrabold">Ligar o Protótipo</span>
          </h2>
          <p className="text-gray-700 text-xs leading-snug dark:text-[rgb(146,153,173)]">
            Pressione o botão de energia localizado na parte superior do peixe até o LED acender. Aguarde
            alguns segundos até que o sistema inicialize completamente.
          </p>
        </div>

      
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-default dark:bg-[rgb(35,41,55)]">
          <img src={WifiImg} alt="icone wifi" className="mb-3 w-6 h-6" />
          <h2 className="font-semibold text-black text-sm mb-1 dark:text-white">
            2.<span className="font-extrabold">Conexão com o Aplicativo</span>
          </h2>
          <p className="text-gray-700 text-xs leading-snug dark:text-[rgb(146,153,173)]">
            Baixe o aplicativo (Android e ios). Ligue o app, ative o Bluetooth no seu celular e toque em Conectar Dispositivo e selecionar.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-default dark:bg-[rgb(35,41,55)]">
          <img src={MapaImg} alt="icone mapa" className="mb-3 w-6 h-6" />
          <h2 className="font-semibold text-black text-sm mb-1 dark:text-white">
            3.<span className="font-extrabold">Escolha do Local</span>
          </h2>
          <p className="text-gray-700 text-xs leading-snug dark:text-[rgb(146,153,173)]">Posicione o peixe suavemente na piscina</p>
        </div>

  
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-default dark:bg-[rgb(35,41,55)]">
          <img src={CelularImg} alt="icone celular" className="mb-3 w-6 h-6" />
          <h2 className="font-semibold text-black text-sm mb-1 dark:text-white">
            4.<span className="font-extrabold">Acompanhamento pelo app</span>
          </h2>
          <p className="text-gray-700 text-xs leading-snug dark:text-[rgb(146,153,173)]">
            Veja ao vivo a quantidade de lixo recolhido. Acompanhe e controle a rota do peixe e visualize os pontos.
          </p>
        </div>

      
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-default dark:bg-[rgb(35,41,55)]">
          <img src={CheckImg} alt="icone check" className="mb-3 w-6 h-6" />
          <h2 className="font-semibold text-black text-sm mb-1 dark:text-white">
            5.<span className="font-extrabold ">Retirada e limpeza</span>
          </h2>
          <p className="text-gray-700 text-xs leading-snug dark:text-[rgb(146,153,173)]">
            Use o app para chamar o peixe de volta após a coleta. Retire e descarte a capsula de residuos adequadamente.
          </p>
        </div>
      </section>

     
      <section className="max-w-6xl w-full mt-12 px-5 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10">
       
        <div className="bg-red-50 border border-red-300 rounded-xl p-6 shadow-sm text-red-700 cursor-default dark:bg-[rgb(35,41,55)]">
          <div className="flex items-center gap-2 mb-4">
            <img src={WarningImg} alt="icone warning" className="w-7 h-7" />
            <h3 className="font-bold text-base">Instruções de Segurança</h3>
          </div>
          <ul className="list-disc list-inside text-xs space-y-2 leading-snug">
            <li>Nunca opere o JADIO enquanto houver pessoas na piscina.</li>
            <li>Remova objetos grandes ou pontiagudos da água antes de iniciar o funcionamento.</li>
            <li>Evite expor o dispositivo e a base de carregamento a produtos químicos corrosivos.</li>
            <li>O JADIO não deve ser colocado debaixo da água, pois foi projetado para atuar apenas na superfície.</li>
            <li>Tenha cuidado para que água não caia diretamente sobre o dispositivo fora da piscina.</li>
            <li>Não coloque pesos sobre o JADIO, pois isso pode fazê-lo afundar ou danificar sua estrutura.</li>
          </ul>
        </div>


        <div className="border border-gray-200 rounded-xl h-56 flex items-center justify-center text-gray-500 font-semibold text-sm shadow-sm cursor-default">
          VIDEO DEMONSTRATIVO:
        </div>
      </section>
    </main>
  );
}
