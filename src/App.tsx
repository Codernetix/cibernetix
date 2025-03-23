import Header from "./components/header/Header.tsx";
import MainContainer from "./components/main/MainContainer.tsx";

import ciberSeguridad from "./assets/ciberseguridad.png";
import service from "./assets/service.png";
import www from "./assets/www.png";
import servidor from "./assets/servidor.png";
import SectionContainer from "./components/main/SectionContainer.tsx";
import WorkGalleryCard from "./components/main/WorkGalleryCard.tsx";

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <SectionContainer custom=" h-[100vh] bg-[url(./assets/slogan-back3.jpg)] bg-cover flex flex-col justify-center rounded-xl">
          <div>
            <p className="text-white text-2xl md:text-5xl [text-shadow:_0px_0px_16px_#000] font-bold text-center ">
              Conectamos tu camino digital, ofreciéndote soluciones innovadoras
              que transforman tu empresa, optimizan procesos y te conectan con
              el futuro&nbsp;tecnológico.
            </p>
          </div>
          <div className="h-[50vh] grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-10 p-10">
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

        <SectionContainer custom="bg-white rounded-xl p-8">
          <div>
            <div className="text-center">
              <h3 className="text-5xl">Como trabajamos . . .</h3>
              <br />
              <p className="text-2xl">
                Analizamos y adaptamos nuestras soluciones a las necesidades
                específicas de cada cliente.
              </p>
            </div>
            <div className="w-full h-full grid grid-cols-3 grid-rows-2 p-8 gap-8">
              {" "}
              <WorkGalleryCard
                imagen={ciberSeguridad}
                imgdesc={"Ciberseguridad"}
                titulo={"Ciberseguridad"}
                descripcion={`Protegemos la información y sistemas de tu empresa con
                  soluciones integrales de ciberseguridad, incluyendo
                  auditorías, análisis de vulnerabilidades, firewalls,
                  protección contra malware y formación en seguridad.
                  Garantizamos la protección de tus datos en un entorno digital
                  cada vez más desafiante.`}
              />
              <WorkGalleryCard
                imagen={service}
                imgdesc={"TELEFONIA IP"}
                titulo={"TELEFONIA IP"}
                descripcion={`Mejoramos la comunicación de tu empresa con soluciones VoIP.
                  Ofrecemos instalación, configuración y mantenimiento para
                  optimizar costos, mejorar la eficiencia y potenciar la
                  productividad.`}
              />
              <WorkGalleryCard
                imagen={www}
                imgdesc={"DESARROLLO WEB"}
                titulo={"DESARROLLO WEB"}
                descripcion={`Creamos páginas web personalizadas que se ajustan a tu
                  negocio, desde sitios informativos hasta tiendas en línea.
                  Ofrecemos diseño responsive, integración de pagos, SEO y
                  mantenimiento, asegurando una presencia digital atractiva y
                  funcional.`}
              />
              <WorkGalleryCard
                imagen={servidor}
                imgdesc={"SERVIDORES"}
                titulo={"SERVIDORES"}
                descripcion={`Ofrecemos servidores dedicados, virtualizados o en la nube
                  según las necesidades de tu empresa. Gestionamos su
                  instalación, configuración y mantenimiento, garantizando alto
                  rendimiento, seguridad y escalabilidad para tu crecimiento.`}
                gridPosition={"col-start-2"}
              />
            </div>
          </div>
        </SectionContainer>
      </MainContainer>
    </>
  );
}

export default App;
