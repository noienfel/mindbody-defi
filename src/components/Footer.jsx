import { FaEnvelope, FaPhoneAlt, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-footerBg mt-24 sm:mt-32 flex flex-col sm:flex-row sm:gap-8 lg:gap-96 p-6 sm:p-14 text-white">
        {/* Logo */}
        <div className="flex justify-center sm:justify-start mb-6 sm:mb-0">
          <img src="./logo.png" alt="Logo MindBody" className="w-32 sm:w-40" />
        </div>

        {/* Links de Navegação */}
        <div className="hidden sm:block sm:text-base lg:text-2xl">
          <ul className="leading-loose text-center sm:text-left max-lg:hidden ">
            <li>MindBody</li>
            <li>Sobre nós</li>
            <li>Para empresas</li>
            <li>Contato</li>
          </ul>
        </div>

        {/* Informações de Contato */}
        <div className="text-sm sm:text-base lg:text-2xl text-center sm:text-left">
          <ul className="leading-loose">
            <li className="flex justify-center sm:justify-start items-center">
              Entre em contato com a gente
            </li>
            <li className="flex justify-center sm:justify-start items-center">
              <FaEnvelope className="mr-2 text-green-500" /> mbody@gmail.com
            </li>
            <li className="flex justify-center sm:justify-start items-center">
              <FaPhoneAlt className="mr-2 text-blue-500" /> 5399999-9999
            </li>
            <li className="flex justify-center sm:justify-start items-center">
              <FaInstagram className="mr-2 text-pink-500" /> @Mindbody_rs
            </li>
            <li className="flex justify-center sm:justify-start items-center">
              <FaTwitter className="mr-2 text-sky-500" /> Mindbody_rs
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-copyright">
        <h1 className="flex items-center justify-center text-white text-sm sm:text-base lg:text-2xl p-4">
          © 2024 Copyright
        </h1>
      </div>
    </>
  );
}

export default Footer;
