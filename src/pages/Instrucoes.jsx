import BateriaImg from "../assets/bateria.png";
import WifiImg from "../assets/wifi.png";
import MapaImg from "../assets/mapa.png";
import CelularImg from "../assets/celular.png";
import CheckImg from "../assets/Check.png";
import WarningImg from "../assets/warning.png";

export function Instrucoes() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white p-4 sm:p-6 md:p-10 font-sans dark:bg-[rgb(2,8,23)]">
      <section className="max-w-4xl text-center mb-12 px-4">
        <h1 className="text-4xl font-display font-semibold text-black  mb-2 dark:text-white ">Instruções de Uso</h1>
        <p className="text-gray-400 font-display max-w-xl mx-auto leading-tight md:leading-relaxed">
          Guia completo para operar o JADIO de forma segura e eficiente. Siga estas instruções para
          obter o máximo desempenho do seu peixe robô.
        </p>
      </section>

      
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
       
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-default dark:bg-[rgb(35,41,55)] self-stretch">
          <img src={BateriaImg} alt="icone bateria" className="mb-3 w-6 h-6" />
          <h2 className="text-2xl font-display font-semibold text-black mb-1 dark:text-white">
            <span className="font-extrabold font-display">1. Ligar o Protótipo</span>
          </h2>
          <p className="text-gray-700 font-display leading-snug dark:text-[rgb(146,153,173)]">
            Pressione o botão de energia localizado na parte superior do peixe até o LED acender. Aguarde
            alguns segundos até que o sistema inicialize completamente.
          </p>
        </div>

      
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-default dark:bg-[rgb(35,41,55)] self-stretch">
          <img src={WifiImg} alt="icone wifi" className="mb-3 w-6 h-6" />
          <h2 className="text-2xl font-display font-semibold text-black mb-1 dark:text-white">
            <span className="font-extrabold font-display">2. Conexão com o Aplicativo</span>
          </h2>
          <p className="text-gray-700 font-display leading-snug dark:text-[rgb(146,153,173)]">
            Baixe o aplicativo (Android e ios). Ligue o app, ative o Bluetooth no seu celular e toque em Conectar Dispositivo e selecionar.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-default dark:bg-[rgb(35,41,55)] self-stretch">
          <img src={MapaImg} alt="icone mapa" className="mb-3 w-6 h-6" />
          <h2 className="text-2xl font-display font-semibold text-black mb-1 dark:text-white">
            <span className="font-extrabold">3. Escolha do Local</span>
          </h2>
          <p className="text-gray-700 font-display leading-snug dark:text-[rgb(146,153,173)]">Posicione o peixe suavemente na piscina</p>
        </div>

      
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-default dark:bg-[rgb(35,41,55)] self-stretch">
          <img src={CelularImg} alt="icone celular" className="mb-3 w-6 h-6" />
          <h2 className="text-2xl font-display font-semibold text-black mb-1 dark:text-white">
            <span className="font-extrabold">4. Acompanhamento pelo app</span>
          </h2>
          <p className="text-gray-700 font-display leading-snug dark:text-[rgb(146,153,173)]">
            Veja ao vivo a quantidade de lixo recolhido. Acompanhe e controle a rota do peixe e visualize os pontos.
          </p>
        </div>

      
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-default dark:bg-[rgb(35,41,55)] self-stretch">
          <img src={CheckImg} alt="icone check" className="mb-3 w-6 h-6" />
          <h2 className="text-2xl font-display font-semibold text-black mb-1 dark:text-white">
            <span className="font-extrabold ">5. Retirada e limpeza</span>
          </h2>
          <p className="text-gray-700 font-display leading-snug dark:text-[rgb(146,153,173)]">
            Use o app para chamar o peixe de volta após a coleta. Retire e descarte a capsula de residuos adequadamente.
          </p>
        </div>
      </section>
      
      <section className="max-w-6xl w-full mt-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className=" rounded-xl p-6 shadow-lg cursor-default flex flex-col items-center self-stretch">
        <iframe 
          className="w-full aspect-video rounded-xl"
          src="https://www.youtube.com/embed/GwpKsT4j3eY?si=B44q9mg0kxSymoFU" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
        </iframe>
        
        </div>
        
        <div className="bg-red-50 border border-red-300 rounded-xl p-6 shadow-lg text-red-700 cursor-default dark:bg-[rgb(35,41,55)] self-stretch">
          <div className="flex items-center gap-2 mb-4">
            <img src={WarningImg} alt="icone warning" className="w-7 h-7" />
            <h3 className="text-2xl font-display font-bold">Instruções de Segurança</h3>
          </div>
          <div className="font-display space-y-2 leading-snug">
            <p>• Nunca opere o JADIO enquanto houver pessoas na piscina.</p>
            <p>• Remova objetos grandes ou pontiagudos da água antes de iniciar o funcionamento.</p>
            <p>• Evite expor o dispositivo e a base de carregamento a produtos químicos corrosivos.</p>
            <p>• O JADIO não deve ser colocado debaixo da água, pois foi projetado para atuar apenas na superfície.</p>
            <p>• Tenha cuidado para que água não caia diretamente sobre o dispositivo fora da piscina.</p>
            <p>• Não coloque pesos sobre o JADIO, pois isso pode fazê-lo afundar ou danificar sua estrutura.</p>
          </div>
        </div>
      </section>
    </main>
  );
}