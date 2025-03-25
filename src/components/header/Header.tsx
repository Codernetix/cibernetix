import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Header() {
  const [isToggle, setToggle] = useState(false);

  return (
    <header className="flex justify-between p-4 bg-black text-white items-center">
      <div className="flex items-center justify-evenly">
        {" "}
        <img src={logo} alt="Logo" className="w-[75px]" />
        <p>CIBERNETIX</p>
      </div>
      <button className="bg-white text-black">&lt;/&gt;</button>
      <nav>
        <ul className="w-[50vw] hidden left-0 md:relative md:flex justify-evenly text-3xl">
          <li>Inicio</li>
          <li>Sobre nosotros</li>
          <li>Servicios</li>
          <li>Contactanos</li>
        </ul>
      </nav>
    </header>
  );
}
