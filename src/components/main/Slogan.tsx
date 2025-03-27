import OfferedItem from "./components/OfferedItem";
import SectionContainer from "./components/SectionContainer";

export default function Slogan() {
  return (
    <SectionContainer custom=" h-[100vh] bg-[url(./assets/slogan-back3.jpg)] bg-cover flex flex-col justify-evenly">
      <div className="p-12">
        <p className="text-white text-2xl md:text-5xl [text-shadow:_0px_0px_16px_#000] font-bold text-justify">
          Conectamos tu camino digital, ofreciéndote soluciones innovadoras que
          transforman tu empresa, optimizan procesos y te conectan con el
          futuro&nbsp;tecnológico.
        </p>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-10 p-10">
        <OfferedItem imageUrl="url(./assets/dinero.png)"/>
        <div className="rounded-lg bg-[url(./assets/dinero.png)] bg-center bg-[auto_250px] bg-no-repeat hover:bg-none transition-all duration-300 text-[40px] text-[rgba(255,255,255,0)] hover:text-black font-bold hover:[text-shadow:_0px_0px_16px_#fff] flex justify-center items-center">
          <p className=" text-center">
            Invertir con nosotros es tu estrategia segura.
          </p>
        </div>
        <div className="rounded-lg bg-[url(./assets/solucion.png)] bg-center bg-[auto_250px] bg-no-repeat hover:bg-none transition-all duration-300 text-4xl text-[rgba(255,255,255,0)] hover:text-black font-bold hover:[text-shadow:_0px_0px_16px_#fff] flex justify-center items-center">
          <p className=" text-center">Nos adaptamos a tus necesidades.</p>
        </div>
        <div className="rounded-lg bg-[url(./assets/gestion-de-proyectos.png)] bg-center bg-[auto_250px] bg-no-repeat hover:bg-none transition-all duration-300 text-4xl text-[rgba(255,255,255,0)] hover:text-black font-bold hover:[text-shadow:_0px_0px_16px_#fff] flex justify-center items-center">
          <p className=" text-center">Resultados garantizados.</p>
        </div>
      </div>
    </SectionContainer>
  );
}
