import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import logo from "../../assets/logo.png";

export default function Header() {
  const [isToggle, setToggle] = useState(false);

  return (
    <header className="h-[10vh] flex justify-between p-4 bg-black text-white items-center">
      <div className="flex items-center justify-evenly">
        {" "}
        <img src={logo} alt="Logo" className="w-[75px]" />
        <p>CIBERNETIX</p>
      </div>
      <nav>
        <button
          className={`md:hidden text-2xl ${
            isToggle ? "bg-yellow-300 text-black" : "bg-black text-yellow-300"
          }`}
          onClick={() => setToggle(!isToggle)}
        >
          <FaBars />
        </button>
        <ul
          className={`w-[55vw] absolute md:relative top-[10vh] md:top-0 left-0 transition-all duration-1000 bg-black  -translate-x-full md:translate-0 ${
            isToggle ? "translate-x-0" : ""
          }  flex flex-col md:flex-row gap-4 justify-evenly text-3xl p-8 md:p-0`}
        >
          <li>Inicio</li>
          <li>Sobre nosotros</li>
          <li>Servicios</li>
          <li>Contactanos</li>
        </ul>
      </nav>
    </header>
  );
}
