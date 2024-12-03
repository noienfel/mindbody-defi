import { Link } from "react-router-dom";

export default function Card({ titulo, paragrafo, imagem }) {
  return (
    <>
      <div className="card bg-cardColor  w-96 shadow-xl text-corTexto">
        <div className="card-body shadow-2xl flex flex-col items-center">
          {/* Título */}
          <h2 className="card-title text-4xl text-center mb-6">{titulo}</h2>

          {/* Parágrafo */}
          <p className="text-xl text-center mb-6">{paragrafo}</p>

          {/* Imagem */}
          <div className="w-full flex justify-center mt-4">
            <img
              src={imagem}
              className="w-40 h-40 object-contain" // Aumenta a imagem e ajusta a proporção
            />
          </div>
        </div>
      </div>
    </>
  );
}
