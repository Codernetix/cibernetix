import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="flex justify-between p-4 bg-black text-white items-center">
      <div className="w-[3vw] h-[3vw] flex items-center justify-evenly">
        {" "}
        <img src={logo} alt="Logo" className="w-full" />
        <p>CIBERNETIX</p>
      </div>
      <nav>
        <ul className="w-[50vw] flex justify-evenly text-3xl">
          <li>Inicio</li>
          <li>Sobre nosotros</li>
          <li>Servicios</li>
          <li>Contactanos</li>
        </ul>
      </nav>
    </header>
  );
}
