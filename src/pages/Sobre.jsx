import FlechaImg from "../assets/flecha.png"
import LuzImg from "../assets/luz.png"
import MedalhaImg from "../assets/medalha.png"
import UsersImg from "../assets/Users.png"
import FernandoImg from "../assets/fernando.png"
import GabiImg from "../assets/gabi.png"
import TavaresImg from "../assets/tavares.png"
import RyanImg from "../assets/ryan.png"
import HenriqueImg from "../assets/henrique.png"

export function Sobre() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white px-6 py-10 text-center dark:bg-[rgb(2,8,23)]">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Quem Somos?</h1>
      <p className="text-gray-500 max-w-3xl mb-10">
        Somos cinco estudantes do Colégio Adventista UNASP. Este site faz parte do nosso TCC,
        que tem como foco a sustentabilidade. Criamos o projeto <b>JADIO</b>, um robô que ajuda a
        limpar piscinas, e o app <b>JApp</b>, que permite acompanhar tudo em tempo real. Queremos mostrar
        que a tecnologia pode ser uma aliada do meio ambiente.
      </p>

      
      <div className="grid gap-6 md:grid-cols-3 mb-16 max-w-6xl">
        <div className="bg-white shadow rounded-2xl p-6 dark:bg-[rgb(35,41,55)]">
          <img src={FlechaImg} alt="Missão" className="w-10 h-10 mx-right mb-3" />
          <h2 className="font-bold text-lg mb-2 text-justify text-left dark:text-white">Nossa Missão</h2>
          <p className="text-gray-500 text-justify text-left">
            Revolucionar a manutenção de piscinas através de tecnologia robótica sustentável e
            inteligente, proporcionando praticidade e eficiência.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 dark:bg-[rgb(35,41,55)]">
          <img src={LuzImg} alt="Visão" className="w-10 h-10 mx-right mb-3" />
          <h2 className="font-bold text-lg mb-2 text-justify text-left dark:text-white">Nossa Visão</h2>
          <p className="text-gray-500 text-justify text-left">
            Ser referência em soluções robóticas aquáticas, tornando a limpeza de piscinas
            completamente autônoma e ecológica.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 dark:bg-[rgb(35,41,55)]">
          <img src={MedalhaImg} alt="Valores" className="w-10 h-10 mx-right mb-3" />
          <h2 className="font-bold text-lg mb-2 text-justify text-left dark:text-white">Nossos Valores</h2>
          <p className="text-gray-500 text-justify text-left">
            Inovação, sustentabilidade, qualidade e compromisso com a satisfação do cliente são os pilares que guiam nosso trabalho.
          </p>
        </div>
      </div>

    
      <div className="mb-8">
        <img src={UsersImg} alt="Equipe" className="w-12 h-12 mx-auto mb-2" />
        <h3 className="text-2xl font-bold dark:text-white">Nossa Equipe</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl">
  <div>
    <img src={FernandoImg} alt="Fernando Azevedo" className="w-28 h-28 rounded-full mx-auto object-cover" />
    <p className="mt-3 font-medium dark:text-white">Fernando Azevedo</p>
    <a href="https://instagram.com/feacostaa" 
       target="_blank" 
       rel="noopener noreferrer" 
       className="text-[var(--color-black)] hover:underline text-sm dark:text-white">
      @feacostaa
    </a>
  </div>

  <div>
    <img src={GabiImg} alt="Gabrielle Costa" className="w-28 h-28 rounded-full mx-auto object-cover" />
    <p className="mt-3 font-medium dark:text-white">Gabrielle Costa</p>
    <a href="https://instagram.com/gabiietz_" 
       target="_blank" 
       rel="noopener noreferrer" 
       className="text-[var(--color-black)]hover:underline text-sm dark:text-white">
      @gabiietz_
    </a>
  </div>

  <div>
    <img src={TavaresImg} alt="Gustavo Tavares" className="w-28 h-28 rounded-full mx-auto object-cover" />
    <p className="mt-3 font-medium dark:text-white">Gustavo Tavares</p>
    <a href="https://instagram.com/gutoarcangelo" 
       target="_blank" 
       rel="noopener noreferrer" 
       className="text-[var(--color-black)] hover:underline text-sm dark:text-white">
      @gutoarcangelo
    </a>
  </div>

  <div>
    <img src={RyanImg} alt="Ryan Kavamoto" className="w-28 h-28 rounded-full mx-auto object-cover" />
    <p className="mt-3 font-medium dark:text-white">Ryan Kavamoto</p>
    <a href="https://instagram.com/vg.japa" 
       target="_blank" 
       rel="noopener noreferrer" 
       className="text-[var(--color-black)] hover:underline text-sm dark:text-white">
      @vg.japa
    </a>
  </div>

  <div>
    <img src={HenriqueImg} alt="Henrique Alves" className="w-28 h-28 rounded-full mx-auto object-cover" />
    <p className="mt-3 font-medium dark:text-white">Henrique Alves</p>
    <a href="https://instagram.com/r3cky3lves" 
       target="_blank" 
       rel="noopener noreferrer" 
       className="text-[var(--color-black)] hover:underline text-sm dark:text-white">
      @r3cky3lves
    </a>
  </div>
</div>

    </main>
  )
}
