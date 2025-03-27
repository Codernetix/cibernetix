import OfferedItem from "./components/OfferedItem";
import SectionContainer from "./components/SectionContainer";

export default function Slogan() {
  return (
    <SectionContainer custom="bg-[url(./assets/slogan-back3.jpg)] bg-cover flex flex-col justify-evenly">
      <div className="p-12">
        <p className="text-white text-2xl md:text-5xl [text-shadow:_0px_0px_16px_#000] font-bold text-justify">
          Conectamos tu camino digital, ofreciéndote soluciones innovadoras que
          transforman tu empresa, optimizan procesos y te conectan con el
          futuro&nbsp;tecnológico.
        </p>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-10 p-10 place-items-center">
        <OfferedItem
          imageUrl="bg-[url(./assets/dinero.png)]"
          text="Invertir con nosotros es tu estrategia segura."
        />

        <OfferedItem
          imageUrl="bg-[url(./assets/solucion.png)]"
          text="Nos adaptamos a tus necesidades."
        />

        <OfferedItem
          imageUrl="bg-[url(./assets/gestion-de-proyectos.png)]"
          text="Resultados garantizados."
        />
      </div>
    </SectionContainer>
  );
}
