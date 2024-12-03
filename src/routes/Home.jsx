import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../index.css";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import AvaliacaoCarousel from "../components/AvaliacaoCarousel"


function Home() {
  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="text-corTexto mt-10 flex flex-col sm:flex-row justify-between items-center lg:items-start">
        {/* Texto */}
        <div className="px-6 sm:ml-10 sm:pt-16 lg:ml-32 lg:pt-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 lg:mb-7">
            Seu médico portátil. <br />
            Verifique seus sintomas. <br />
            Cure suas doenças. <br />
          </h1>
          <div className="text-base sm:text-lg lg:text-2xl">
            <p>✓ Analise sintomas mentais e físicos</p>
            <p>✓ Entenda sua saúde</p>
            <p>✓ Planeje seus próximos passos</p>
            <p>✓ Prepare-se para consultar</p>
          </div>
          <button className="bg-verdeBotao btn text-white mt-5 p-4"><Link to="/Entrevista">Iniciar entrevista</Link></button>

        </div>

        {/* Imagem */}
        <img
          className="w-4/6 max-lg:hidden lg:w-max mt-6 lg:mr-44"
          src="./balao.png"
          alt="Ilustração"
        />
      </section>

      {/* Sobre Nós */}
      <section className="text-corTexto mt-16 sm:mt-24 lg:mt-96">
        <div className="flex flex-col items-center px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl mb-6 sm:mb-10 lg:mb-20">
            Sobre nós
          </h1>
          <p className="text-sm sm:text-base lg:text-2xl text-center lg:text-left">
            Na Mindbody, acreditamos que a saúde mental e física <br /> caminham juntas para o bem-estar pessoal. Com uma <br /> abordagem personalizada e humana, reunimos recursos <br /> inovadores e profissionais qualificados para ajudar você e <br /> sua família  a cuidar da mente e do corpo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row ml-28 flex-wrap justify-center gap-6 lg:gap-8 mt-10 sm:mt-16 lg:mt-28">
          <Card titulo="120.000+" paragrafo="Horas de trabalho por médicos e psicólogos." />
          <Card titulo="20M+" paragrafo="Entrevistas realizadas" />
          <Card titulo="200.000+" paragrafo="Horas de trabalho por médicos e psicólogos." />
        </div>
      </section>

      {/* Para Empresas */}
      <section className="text-corTexto mt-16 sm:mt-20 lg:mt-32">
        <div className="flex flex-col sm:flex-row items-center lg:items-start">
          {/* Imagem */}
          <img
            src="./obtenha.png"
            className="w-full sm:w-4/6 lg:w-3/6 px-6 sm:px-0"
            alt="Logo Grande"
          />

          {/* Texto */}
          <div className="px-6 lg:px-0 m-6 sm:m-10 lg:m-32">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl mb-6 sm:mb-10 lg:mb-20">
              Obtenha um verificador <br />
              de saúde para <br />
              sua empresa!
            </h1>
            <p className="text-sm sm:text-base lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
              voluptatem corrupti consectetur doloribus ipsam perferendis incidunt quae
              sequi quam asperiores repudiandae maiores. Voluptates illum sequi dolorem
              debitis cupiditate, expedita quasi!
            </p>
            <button className="bg-verdeBotao text-white text-sm sm:text-lg lg:text-xl mt-6 px-4 py-2 rounded">
              Entre em contato
            </button>
          </div>
        </div>
      </section>
      <section className="text-corTexto mt-60">
        <div className="flex flex-col ml-12 lg:ml-96">

          <h1 className="text-3xl sm:text-4xl lg:text-6xl mb-6 sm:mb-10 lg:mb-20">Como funciona?</h1>
          <p className="text-sm sm:text-base lg:text-2xl">

            Nosso sistema coleta informações essenciais sobre a saúde física e mental, oferece análises <br />
            personalizadas e sugestões práticas. Simples, rápido e eficaz para promover bem-estar e <br />
            produtividade!
          </p>
        </div>

      </section>

      <Carousel />
      <section className="text-corTexto mt-60">
        <div className="flex flex-col ml-12 lg:ml-96">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl mb-6 sm:mb-10 lg:mb-20">
            Avalie nosso trabalho:
          </h1>
        </div>
      </section>
      <AvaliacaoCarousel />
      <Footer />
    </>
  );
}

export default Home;
