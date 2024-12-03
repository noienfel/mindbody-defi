import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
const API_URL = "http://localhost:3001/usuarios";

function Entrevista() {
  const [paginaAtual, setPaginaAtual] = useState(0);

  const [respostas, setRespostas] = useState({
    avaliacaoPara: "",
    sexo: "",
    burnout: false,
    ansiedadepressao: false,
    ansiedadeconcentra: false,
    cansaco: false,
    dor: false,
    batimentos: false,
    tensao: false,
    transpiração: false,
  });

  const etapas = [
    { titulo: "Informações iniciais" },
    { titulo: "Selecione os sintomas" },
    { titulo: "Nível de estresse" },
    { titulo: "Resultado" },
  ];

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setRespostas({ ...respostas, [name]: checked });
  };

  const salvarEntrevista = async () => {
    try {
      const usuario = {
        nome: respostas.avaliacaoPara,
        sexo: respostas.sexo,
        sintomas: Object.keys(respostas)
          .filter((key) => respostas[key] === true && key !== "avaliacaoPara" && key !== "sexo"),
        avaliacao: renderResultadoTexto(), // Aqui, ajuste para salvar somente o texto.
        comentarios: [],
      };

      // Extrair apenas o texto da avaliação, removendo o JSX.
      const resultadoTexto = renderResultadoTexto().props.children;
      usuario.avaliacao = resultadoTexto; // Salve apenas o texto da avaliação.

      await axios.post(API_URL, usuario);
      alert("Entrevista salva com sucesso!");
      setPaginaAtual(0); // Volta para a primeira etapa
      setRespostas({
        avaliacaoPara: "",
        sexo: "",
        burnout: false,
        ansiedadepressao: false,
        ansiedadeconcentra: false,
        cansaco: false,
        dor: false,
        batimentos: false,
        tensao: false,
        transpiração: false,
      });
    } catch (error) {
      console.error("Erro ao salvar a entrevista:", error);
    }
  };

  const renderResultadoTexto = () => {
    const {
      estresseTarefas,
      estresseSocial,
      burnout,
      ansiedadepressao,
      ansiedadeconcentra,
      cansaco,
      dor,
      batimentos,
      tensao,
      transpiracao,
    } = respostas;

    let resultado = "Você está bem!";

    // Estresse moderado
    if (estresseTarefas && cansaco && dor) {
      resultado = "Você apresenta sinais de estresse moderado.";
    }
    // Estresse alto
    else if ((estresseSocial && dor) || (estresseSocial && batimentos)) {
      resultado = "Você apresenta sinais de estresse alto. Recomendamos atenção.";
    }
    // Burnout
    else if ((burnout && dor) || (burnout && ansiedadeconcentra)) {
      resultado = "Você apresenta sinais de burnout. É importante buscar ajuda.";
    }
    // Ansiedade
    else if (
      (ansiedadepressao && tensao) ||
      (ansiedadepressao && transpiracao) ||
      (ansiedadepressao && ansiedadeconcentra) ||
      (ansiedadeconcentra && tensao) ||
      (ansiedadeconcentra && transpiracao) ||
      (ansiedadeconcentra && ansiedadepressao)
    ) {
      resultado = "Você apresenta sinais de ansiedade. Considere buscar suporte.";
    }
    // Consulta médica (casos não mapeados)
    else if (cansaco || dor || batimentos || tensao || transpiracao) {
      resultado =
        "Os sintomas informados não correspondem a um diagnóstico direto. Consulte um dos médicos que indicamos.";
    }

    return <p className="text-lg">{resultado}</p>;
  };

  const renderPagina = () => {
    if (paginaAtual === 0) {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">Quem gostaria de fazer a avaliação?</h2>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setRespostas({ ...respostas, avaliacaoPara: "Maior de 18 anos" })}
              className={`py-2 px-4 rounded-lg ${respostas.avaliacaoPara === "Maior de 18 anos" ? "bg-green-500 text-white" : "bg-gray-200"
                }`}
            >
              Sou maior de 18 anos
            </button>
            <button
              onClick={() => setRespostas({ ...respostas, avaliacaoPara: "Outra pessoa" })}
              className={`py-2 px-4 rounded-lg ${respostas.avaliacaoPara === "Outra pessoa" ? "bg-green-500 text-white" : "bg-gray-200"
                }`}
            >
              Outra pessoa
            </button>
          </div>
        </>
      );
    }

    if (paginaAtual === 1) {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">Você tem algum dos seguintes sintomas?</h2>
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="transpiração"
                onChange={handleChange}
                className="mr-2"
              />
              Transpiração excessiva
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="tensao"
                onChange={handleChange}
                className="mr-2"
              />
              tensao muscular

            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="batimentos"
                onChange={handleChange}
                className="mr-2"
              />
              Batimentos cardíacos acelerados
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="cansaco"
                onChange={handleChange}
                className="mr-2"
              />
              Cansaço excessivo, fisico e mental
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="dor"
                onChange={handleChange}
                className="mr-2"
              />
              Dor de cabeça
            </label>
          </div>

        </>
      );

    }
    if (paginaAtual === 2) {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">Selecione os sintomas que você está sentindo:</h2>
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="burnout"
                onChange={handleChange}
                className="mr-2"
              />
              Não consigo produzir no meu trabalho por causa do estresse
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="ansiedadepressao"
                onChange={handleChange}
                className="mr-2"
              />
              Estresse com tarefas do dia a dia
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="ansiedadeconcentra"
                onChange={handleChange}
                className="mr-2"
              />
              Dificuldade de concentração
            </label>
          </div>
        </>
      );
    }
    if (paginaAtual === 3) {
      return (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">Resultado:</h2>
          <p className="text-lg text-center">{renderResultadoTexto()}</p>
          <button
            onClick={salvarEntrevista}
            className="bg-green-500 text-white py-2 px-4 rounded mt-4"
          >
            Salvar Entrevista
          </button>
        </>
      );
    }
  };

  const irParaProximaPagina = () => {
    if (paginaAtual < etapas.length - 1) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const irParaPaginaAnterior = () => {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  return (
    <>
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <div className="w-8 bg-gray-200 rounded-full flex flex-col items-center py-4 fixed left-4">
        {etapas.map((_, index) => (
          <div
          key={index}
          className={`w-4 h-4 rounded-full mb-4 ${index <= paginaAtual ? "bg-green-500" : "bg-gray-400"
          }`}
          />
        ))}
      </div>

      <div className="w-11/12 sm:w-1/2 bg-white p-8 rounded-lg shadow-md mt-16">
        {renderPagina()}
        <div className="mt-6 flex justify-between">
          {paginaAtual > 0 && (
            <button
            onClick={irParaPaginaAnterior}
            className="bg-gray-200 py-2 px-4 rounded-lg"
            >
              Anterior
            </button>
          )}
          {paginaAtual < etapas.length - 1 && (
            <button
            onClick={irParaProximaPagina}
            className="bg-green-500 text-white py-2 px-4 rounded-lg"
            >
              Próximo
            </button>
          )}
        </div>
      </div>
    </div>
     </>
       
     );
   }

export default Entrevista;
