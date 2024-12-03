import { useState } from "react";
import Card from "./Card";

function Carousel() {
  const cards = [
    {
      titulo: "1. Abra o MindBody",
      subtitulo: "Para checar a saúde",
      imagem: "/card1.png",
    },
    {
      titulo: "2. Selecione sua situação",
      subtitulo: "Encontre a melhor análise",
      imagem: "./card2.png",
    },
    {
      titulo: "3. Receba orientações",
      subtitulo: "Planeje seus próximos passos",
      imagem: "/card1.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 2 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex w-full max-w-6xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-0 mt-16 sm:mt-24">
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
            className="flex-shrink-0 w-full sm:w-[80%] lg:w-[60%] px-2 mx-auto"
          >
            <Card
              titulo={card.titulo}
              subtitulo={card.subtitulo}
              imagem={card.imagem}
            />
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

export default Carousel;
