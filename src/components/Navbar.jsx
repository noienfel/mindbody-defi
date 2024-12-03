import { Link } from "react-router-dom";


export default function Navbar() {

  return (
    <>
      <nav className={`flex flex-row justify-evenly gap-80 items-center mt-5  h-16`}>
        <img src="./logo.png" alt="" className='w-[6.725rem] mt-16 ' />

        <ul className="flex text-corTexto flex-row font-bold gap-20 max-lg:hidden">

          <h2 className="text-xl">Mindbody</h2>
          <li className="hover:underline text-xl underline-offset-8">Sobre nós
          </li>
          <li className="hover:underline text-xl underline-offset-8">
            Para empresas
          </li>
          <li className="hover:underline text-xl underline-offset-8">
            Contato
          </li>
          <li className="hover:underline text-xl underline-offset-8">
            Português
          </li>
        </ul>

        <div className="max-lg:hidden">
        <button className="bg-verdeBotao text-white btn p"><Link to="/Entrevista">Iniciar entrevista</Link></button>
        </div>
        <div className="lg:hidden z-10">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn drawer-button bg-transparent border-none shadow-none" >☰</label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">

              <button className="bg-verdeBotao btn mt-5 p-4"><Link to="/Entrevista">Iniciar entrevista</Link></button>
              <li className="bg-verdeBotao btn mt-5 p-4"> Sobre nós</li>
              <li className="bg-verdeBotao btn mt-5 p-4">Para empresas</li>
              <li className="bg-verdeBotao btn mt-5 pc-4">Contato</li>
              <li><Link to="/Admin">Admin</Link></li>

            </ul>

          </div>
        </div>

      </nav >
    </>
  )
}
