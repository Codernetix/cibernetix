import SectionContainer from "./components/SectionContainer";

export default function ContactForm() {
  return (
    <SectionContainer custom="bg-white rounded-xl p-8">
      <div className="text-center">
        <h3 className="text-3xl">
          ¿ Tienes un proyecto en mente ? <br /> Contáctanos y hagámoslo
          realidad.
        </h3>

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
  );
}
