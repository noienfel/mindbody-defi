import { useState } from "react";
import { FaStar } from "react-icons/fa";

function AvaliacaoCarousel() {
  const cards = [
    {
      estrelas: 5,
      texto: "Tive uma crise de alérgica e não sabia o que fazer, procurei um site/aplicativo que pudesse me ajudar e encontrei o Mindbody. Me instruiu passo a passo do que fazer antes de ir para o pronto socorro. Nota 5, muito bom!",
      nome: "Adilson Domingues",
      profissao: "Autônomo",
    },
    {
      estrelas: 5,
      texto: "Este aplicativo faz várias perguntas relacionadas aos sintomas apresentados, o que fornece sugestões mais precisas. Até discuti as possíveis opções com o médico.",
      nome: "Abner Hagrid",
      profissao: "Segurança",
    },
    {
      estrelas: 5,
      texto: "Sintomas apresentados, o que fornece sugestões mais precisas. Até discuti as possíveis opções com o médico.",
      nome: "Marcele Nunes",
      profissao: "Advogada",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-0 mt-16 sm:mt-24">
      {/* Contêiner dos slides */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-[80%] lg:w-[60%] px-2"
          >
            <div className="bg-white shadow-lg rounded-lg p-6">
              {/* Estrelas */}
              <div className="flex mb-4 text-yellow-400">
                {Array(card.estrelas)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>

              {/* Texto */}
              <p className="text-gray-700 text-lg mb-4">{card.texto}</p>

              {/* Nome e Profissão */}
              <div>
                <p className="text-gray-900 font-bold">{card.nome}</p>
                <p className="text-gray-500">{card.profissao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de Navegação */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        &#8592;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        &#8594;
      </button>
    </div>
  );
}

export default AvaliacaoCarousel;
