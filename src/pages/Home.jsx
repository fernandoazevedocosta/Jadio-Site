import { Link } from "react-router-dom";

import PeixeImg from "../assets/peixe.png";
import OndinhasImg from "../assets/ondinhas.png";
import RaioImg from "../assets/raio.png";
import EscudoImg from "../assets/escudo.png";
import ControleRosaImg from "../assets/controle rosa.png";
import SetaImg from "../assets/seta.svg";

export function Home() {
  return (
    <main className="flex flex-col items-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-10 bg-white min-h-screen text-gray-800 dark:bg-[rgb(2,8,23)]">

      <section className="max-w-5xl w-full text-center mt-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#00A6B0] leading-tight">
          JADIO
        </h1>
        <p className="mt-3 text-sm sm:text-lg md:text-xl text-gray-600 font-semibold">
          O Futuro da Limpeza de Piscinas!
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-xs sm:text-base md:text-lg text-gray-500 leading-relaxed dark:text-white">
          Um peixe robô revolucionário que combina tecnologia avançada com design biomimético para manter sua piscina sempre limpa de forma autônoma e sustentável.
        </p>

        <div className="mt-10">
          <img
            src={PeixeImg}
            alt="Peixe robô JADIO"
            className="rounded-2xl shadow-lg w-full max-w-4xl mx-auto h-auto object-cover"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10 w-full">
      <Link
        to="/instrucoes"
        className="w-full sm:w-[307px] h-[70px] sm:h-[96px] flex items-center justify-center rounded-[30px] sm:rounded-[41px] bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg sm:text-[22px] font-semibold hover:opacity-90 transition"
      >
        Como Funciona
        <img src={SetaImg} alt="Seta" className="w-4 sm:w-8 h-auto ml-1 relative top-[2px]" />
      </Link>
      <Link
        to="/sobre"
        className="w-full sm:w-[307px] h-[70px] sm:h-[96px] flex items-center justify-center rounded-[30px] sm:rounded-[41px] border-4 border-blue-400 text-blue-500 text-lg sm:text-[22px] font-semibold hover:bg-blue-50 transition"
      >
        Conheça o Projeto
      </Link>
    </div>

      </section>

      
      <section className="max-w-6xl w-full text-center mt-20 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Características Inovadoras
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed dark:text-[rgb(146,153,173)]">
          O JADIO incorpora tecnologias de ponta para oferecer uma solução completa de limpeza aquática.
        </p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 px-2">
         
          <article className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition bg-white dark:bg-[rgb(35,41,55)]">
            <img src={OndinhasImg} alt="Ondinhas" className=" mx-auto w-10 sm:w-12 h-auto" />
            <h3 className="mt-5 font-semibold text-lg sm:text-xl dark:text-white">Navegação Inteligente</h3>
            <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed text-justify text-left dark:text-white">
              Com sistema de navegação autônoma, o JADIO percorre toda a superfície da piscina, desviando de obstáculos e garantindo uma limpeza rápida e eficiente.
            </p>
          </article>

         
          <article className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition bg-white dark:bg-[rgb(35,41,55)]">
            <img src={RaioImg} alt="Raio" className=" mx-auto w-10 sm:w-12 h-auto" />
            <h3 className="mt-5 font-semibold text-lg sm:text-xl dark:text-white">Energia Sustentável</h3>
            <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed text-justify text-left dark:text-white">
              Movido por baterias recarregáveis de longa duração, com tecnologia de carregamento por indução, o JADIO funciona de forma contínua e ecológica.
            </p>
          </article>

         
          <article className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition bg-white dark:bg-[rgb(35,41,55)]">
            <img src={EscudoImg} alt="Escudo" className=" mx-auto w-10 sm:w-12 h-auto" />
            <h3 className="mt-5 font-semibold text-lg sm:text-xl dark:text-white">Design Biomimético</h3>
            <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed text-justify text-left dark:text-white">
              Produzido em material 3D e inspirado na anatomia de peixes reais, o JADIO nada naturalmente, reduzindo perturbações na água e aumentando a eficiência da limpeza.
            </p>
          </article>
        </div>
      </section>

      
      <section className="max-w-3xl w-full mt-20 mb-24 px-8 ">
        <div className="p-12 border shadow-lg rounded-3xl bg-white text-center dark:bg-[rgb(35,41,55)]">
          <img
            src={ControleRosaImg}
            alt="Controle Rosa"
            className="mx-auto mb-6 w-20 sm:w-24 lg:w-28 h-auto"
          />
          <h3 className="font-semibold text-3xl sm:text-4xl mb-3 text-gray-900 dark:text-white">
            Conheça o EcoShark!
          </h3>
          <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed dark:text-white">
            Salve os oceanos jogando com o tubarão mais consciente do planeta!
          </p>
          <Link
            to="/jogo"
            className="mt-8 inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-4 px-20 rounded-3xl text-lg sm:text-xl hover:opacity-90 transition"
          >
            Jogar
          </Link>
        </div>
      </section>
    </main>
  );
}
