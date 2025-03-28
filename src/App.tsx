import Header from "./components/header/Header.tsx";
import MainContainer from "./components/main/components/MainContainer.tsx";
import SectionContainer from "./components/main/components/SectionContainer.tsx";
import Slogan from "./components/main/Slogan.tsx";
import WorkGallery from "./components/main/WorkGallery.tsx";

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <Slogan />

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
              Dejanos tus datos y te llamamos, o contactanos por medio de
              Whatsapp
            </p>

            <div className="flex justify-center mt-10">
              <form className="grid md:grid-cols-2 gap-4 text-start text-top px-10">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  className="border-2 border-amber-300 p-2"
                  placeholder="Ingresa tu nombre"
                />
                <label htmlFor="email">Correo electronico</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border-2 border-amber-300 p-2"
                  placeholder="Ingresa tu direccion de email"
                />
                <label htmlFor="solicitud">Solicitud</label>
                <input
                  type="text"
                  name="solicitud"
                  id="solicitud"
                  className="border-2 border-amber-3001 h-30 p-2 overflow-x-clip"
                  maxLength={300}
                  placeholder="Ingresa los detalles de tu solicitud"
                />

                <input
                  type="button"
                  value="Enviar"
                  className="md:col-span-2 bg-amber-300"
                />
              </form>
            </div>
          </div>
        </SectionContainer>
      </MainContainer>
    </>
  );
}

export default App;
