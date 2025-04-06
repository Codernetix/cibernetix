import SectionContainer from "../main/components/SectionContainer";

export default function PosMainScreen() {
  return (
    <SectionContainer custom="bg-white">
      <div className="text-center">
        <h1 className="text-6xl">POS</h1>
      </div>

      <div className="grid grid-cols-2">
        <div>Lista compra</div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-amber-100 hover:bg-gray-400 p-2 rounded-md">
            <div>
              <img
                src="https://razafolklorica.com/wp-content/uploads/2021/02/Salchipapas.jpg"
                alt="salchipapas"
              />
              <h3>Salchipapas</h3>
              <p>12000</p>
            </div>
            <p>Menu salchipapas 2</p>
          </div>

          <div className="bg-amber-100 hover:bg-gray-400 p-2 rounded-md">
            <div>
              <img
                src="https://razafolklorica.com/wp-content/uploads/2021/02/Salchipapas.jpg"
                alt="salchipapas"
              />
              <h3>Salchipapas</h3>
              <p>12000</p>
            </div>
            <p>Menu salchipapas 2</p>
          </div>

          <div className="bg-amber-100 hover:bg-gray-400 p-2 rounded-md">
            <div>
              <img
                src="https://razafolklorica.com/wp-content/uploads/2021/02/Salchipapas.jpg"
                alt="salchipapas"
              />
              <h3>Salchipapas</h3>
              <p>12000</p>
            </div>
            <p>Menu salchipapas 2</p>
          </div>

          <div className="bg-amber-100 hover:bg-gray-400 p-2 rounded-md">
            <div>
              <img
                src="https://razafolklorica.com/wp-content/uploads/2021/02/Salchipapas.jpg"
                alt="salchipapas"
              />
              <h3>Salchipapas</h3>
              <p>12000</p>
            </div>
            <p>Menu salchipapas 2</p>
          </div>
        </div>
      </div>

      <div>Informacion de Punto de venta</div>
    </SectionContainer>
  );
}
