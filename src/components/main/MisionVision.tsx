import SectionContainer from "./components/SectionContainer";
import fenix from "../../assets/fenix.png";
import swordshield from "../../assets/swordshield.png";

export default function MisionVision() {
  return (
    <SectionContainer custom="bg-gradient-to-bl from-orange-200 to-cyan-100 p-8 grid md:grid-cols-2 gap-4">
      <div className="md:col-start-2 md:row-start-1">
        <img src={fenix} alt="" className="w-[300px] mx-auto"/>
      </div>
      <div className="grid gap-8 md:col-start-1 md:row-start-1">
        <h2 className="text-center font-bold text-3xl">MISIÓN.</h2>
        <p className="text-2xl">
          Proveer soluciones innovadoras y seguras en infraestructura
          tecnológica, seguridad informática y desarrollo de software,
          garantizando la continuidad operativa y el crecimiento sostenible de
          nuestros clientes. Nos enfocamos en ofrecer servicios de alta calidad,
          optimización de recursos y protección de la información, asegurando un
          entorno digital eficiente, confiable y seguro.
        </p>
      </div>
      <div className="md:col-start-1 md:row-start-2">
        <img src={swordshield} alt="" className="w-[300px] mx-auto"/>
      </div>
      <div className="grid gap-8 md:col-start-2 md:row-start-2">
        <h2 className="text-center font-bold text-3xl">VISIÓN.</h2>
        <p className="text-2xl">
          Ser una empresa reconocida por nuestra capacidad de innovar,
          garantizar la seguridad y optimizar los recursos de nuestros clientes.
          Nos esforzamos por ser un referente en infraestructura tecnológica,
          desarrollo de software y protección de la información, contribuyendo a
          la creación de entornos digitales más inteligentes, seguros y
          sostenibles para nuestros clientes.
        </p>
      </div>
    </SectionContainer>
  );
}
