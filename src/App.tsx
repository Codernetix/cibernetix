import logo from "./assets/logo.png";
import ciberSeguridad from "./assets/ciberseguridad.png";
import service from "./assets/service.png";
import www from "./assets/www.png";
import servidor from "./assets/servidor.png";

function App() {
  return (
    <>
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

      <main className="mt-2 w-full flex flex-col gap-2 justify-center items-center select-none">
        <div className="w-[98vw] h-[80vh] bg-[url(./assets/slogan-back3.jpg)] bg-cover flex flex-col justify-center rounded-xl">
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
        </div>

        <div className="w-[98vw] h-[100vh] bg-white rounded-xl p-8">
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
              <div  className="flex flex-col items-center p-4">
                <img src={ciberSeguridad} alt="Ciberseguridad" className="w-[150px]" />
                <h3>CIBERSEGURIDAD</h3>
                <p>
                  Protegemos la información y sistemas de tu empresa con
                  soluciones integrales de ciberseguridad, incluyendo
                  auditorías, análisis de vulnerabilidades, firewalls,
                  protección contra malware y formación en seguridad.
                  Garantizamos la protección de tus datos en un entorno digital
                  cada vez más desafiante.
                </p>
              </div>
              <div className="flex flex-col items-center p-4">
                <img src={service} alt="TELEFONIA IP" className="w-[150px]"/>
                <h3>TELEFONIA IP</h3>
                <p>
                  Mejoramos la comunicación de tu empresa con soluciones VoIP.
                  Ofrecemos instalación, configuración y mantenimiento para
                  optimizar costos, mejorar la eficiencia y potenciar la
                  productividad.
                </p>
              </div>{" "}
              <div className="flex flex-col items-center p-4">
                <img src={www} alt="DESARROLLO WEB" className="w-[150px]" />
                <h3>DESARROLLO WEB</h3>
                <p>
                  Creamos páginas web personalizadas que se ajustan a tu
                  negocio, desde sitios informativos hasta tiendas en línea.
                  Ofrecemos diseño responsive, integración de pagos, SEO y
                  mantenimiento, asegurando una presencia digital atractiva y
                  funcional.
                </p>
              </div>{" "}
              <div className="flex flex-col items-center p-4">
                <img src={servidor} alt="SERVIDORES" className="w-[150px]"/>
                <h3>SERVIDORES</h3>
                <p>
                  Ofrecemos servidores dedicados, virtualizados o en la nube
                  según las necesidades de tu empresa. Gestionamos su
                  instalación, configuración y mantenimiento, garantizando alto
                  rendimiento, seguridad y escalabilidad para tu crecimiento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
