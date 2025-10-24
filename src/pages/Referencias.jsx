import LinkImg from "../assets/Link.png"

export function Referencias() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white px-6 py-10 px-30 mx-auto dark:bg-[rgb(2,8,23)]">
      <h1 className="text-4xl font-semibold mb-4 text-center dark:text-white">Referências</h1>
      <p className="text-gray-500 max-w-3xl mb-10 text-center">
        A base de conhecimento que tornou o JADIO possível. Explore os links e recursos que guiaram nosso projeto.
      </p>

      
      <div className="grid gap-6">
        
        
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-2xl p-6 dark:bg-[rgb(35,41,55)]">
          <div className="flex items-center gap-2 mb-3">
            <img src={LinkImg} alt="Link" className="w-6 h-6" />
            <span className="bg-blue-500/50  text-blue-600 px-2 py-1 rounded-md font-medium">
              Hardware
            </span>
          </div>
          <h2 className="font-bold mb-2 dark:text-white">Arduino - Documentação Oficial</h2>
          <p className="text-gray-500 mb-3">
            Plataforma open-source de prototipagem eletrônica usada como base para o controle do JADIO.
          </p>
          <a href="https://docs.arduino.cc/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-blue-500 font-medium hover:underline">
            Visitar Link →
          </a>
        </div>

        
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-2xl p-6 dark:bg-[rgb(35,41,55)]">
          <div className="flex items-center gap-2 mb-3">
            <img src={LinkImg} alt="Link" className="w-6 h-6" />
            <span className="bg-blue-500/50 text-blue-600 px-2 py-1 rounded-md font-medium">
              Hardware
            </span>
          </div>
          <h2 className="font-bold mb-2 dark:text-white">ESP32 - Documentação Espressif</h2>
          <p className="text-gray-500 mb-3">
            Microcontrolador com Wi-Fi e Bluetooth integrados, o cérebro do nosso robô.
          </p>
          <a href="https://www.espressif.com/en/products/socs/esp32/resources" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-10 inline-block font-medium hover:underline">
            Visitar Link →
          </a>
        </div>

        
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-2xl p-6 dark:bg-[rgb(35,41,55)]">
          <div className="flex items-center gap-2 mb-3">
            <img src={LinkImg} alt="Link" className="w-6 h-6" />
            <span className="bg-green-500/50 text-green-600 px-2 py-1 rounded-md font-medium">
              Software
            </span>
          </div>
          <h2 className="font-bold mb-2 dark:text-white">React - Documentação Oficial</h2>
          <p className="text-gray-500 mb-3">
            Biblioteca JavaScript para construir a interface de usuário do nosso aplicativo de controle.
          </p>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 font-medium hover:underline">
            Visitar Link →
          </a>
        </div>

        
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-2xl p-6 dark:bg-[rgb(35,41,55)]">
          <div className="flex items-center gap-2 mb-3">
            <img src={LinkImg} alt="Link" className="w-6 h-6" />
            <span className="bg-green-500/50 text-green-600 px-2 py-1 rounded-md font-medium">
              Software
            </span>
          </div>
          <h2 className="font-bold mb-2 dark:text-white">Tailwind CSS - Documentação</h2>
          <p className="text-gray-500 mb-3">
            Framework CSS utility-first que usamos para estilizar este site e o aplicativo.
          </p>
          <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="mt-14 inline-block text-blue-500 font-medium hover:underline">
            Visitar Link →
          </a>
        </div>

        
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-2xl p-6 dark:bg-[rgb(35,41,55)]">
          <div className="flex items-center gap-2 mb-3">
            <img src={LinkImg} alt="Link" className="w-6 h-6" />
            <span className="bg-purple-500/50 text-purple-600 px-2 py-1 rounded-md font-medium">
              Pesquisa
            </span>
          </div>
          <h2 className="font-bold mb-2 dark:text-white">Bioinspiration & Biomimetics - IOPscience</h2>
          <p className="text-gray-500 mb-3">
            Jornal científico com pesquisas sobre robótica inspirada na natureza, fundamental para o design do JADIO.
          </p>
          <a href="https://iopscience.iop.org/journal/1748-3190" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-blue-500 font-medium hover:underline">
            Visitar Link →
          </a>
        </div>

       
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-2xl p-6 dark:bg-[rgb(35,41,55)]">
          <div className="flex items-center gap-2 mb-3">
            <img src={LinkImg} alt="Link" className="w-6 h-6" />
            <span className="bg-purple-500/50 text-purple-600 px-2 py-1 rounded-md font-medium">
              Pesquisa
            </span>
          </div>
          <h2 className="font-bold mb-2 dark:text-white">IEEE Xplore - Robotics</h2>
          <p className="text-gray-500 mb-3">
            Biblioteca digital com artigos e conferências sobre robótica, essencial para o estado da arte.
          </p>
          <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" rel="noopener noreferrer" className="mt-7 inline-block  text-blue-500 font-medium hover:underline">
            Visitar Link →
          </a>
        </div>

      </div>
    </main>
  )
}
