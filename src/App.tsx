import Header from "./components/header/Header.tsx";
import MainContainer from "./components/main/components/MainContainer.tsx";
import SectionContainer from "./components/main/components/SectionContainer.tsx";
import WorkGallery from "./components/main/WorkGallery.tsx";

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
            <WorkGallery />
          </div>
        </SectionContainer>

        <SectionContainer custom="bg-white rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-5xl">Contactanos</h3>
            <br />
            <p className="text-2xl">
              Dejanos tus datos y te llamamos, o contactanos por medio de Whatsapp
            </p>

            <div className="flex justify-center mt-10">
              <form className="grid grid-cols-2 gap-4 text-start text-top px-10">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" className="border-2 border-amber-300" placeholder="Ingresa tu nombre"/>
                <label htmlFor="email">Correo electronico</label>
                <input type="email" name="email" id="email" className="border-2 border-amber-300" placeholder="Ingresa tu direccion de email"/>
                <label htmlFor="solicitud">Solicitud</label>
                <input type="text" name="solicitud" id="solicitud" className="border-2 border-amber-3001 h-30 text-clip" maxLength={300} placeholder="Ingresa los detalles de tu solicitud"/>

                <input type="button" value="Enviar"  className="col-span-2 bg-amber-300"/>
              </form>
            </div>
          </div>
        </SectionContainer>
      </MainContainer>
    </>
  );
}

export default App;
