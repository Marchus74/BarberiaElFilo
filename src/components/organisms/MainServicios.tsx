import servicios from "../../data/servicios";
import ServiciosArticle from "../molecules/ServiciosArticle";

const MainServicios = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {servicios.map((servicio) => (
      <div className="h-full">
        <ServiciosArticle 
          key={servicio.name}
          {...servicio}
        />
      </div>
    ))}
  </div>
)

export default MainServicios;

