import type { TurnosInterface } from "../../interfaces/TurnosInterface";

const TurnoArticle = ({ id, cliente, servicio, fecha, hora }: TurnosInterface) => {
  return (
    <article className="bg-[#3b2416]/90 border border-[#c97a36]/40 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 text-[#f7e1c3]">
      
      <h2 className="text-xl font-bold text-[#c97a36] mb-2">
        Turno #{id}
      </h2>

      <p className="mb-1">
        <span className="font-semibold text-[#f2b544]">Cliente:</span> {cliente}
      </p>

      <p className="mb-1">
        <span className="font-semibold text-[#f2b544]">Servicio:</span> {servicio}
      </p>

      <p className="mb-1">
        <span className="font-semibold text-[#f2b544]">Fecha:</span> {fecha}
      </p>

      <p className="mb-4">
        <span className="font-semibold text-[#f2b544]">Hora:</span> {hora}
      </p>

      <button className="w-full bg-gradient-to-r from-[#c97a36] via-[#f2b544] to-[#c97a36] text-[#3b2416] font-semibold py-2 rounded-lg shadow-md hover:brightness-110 transition-all">
        Ver Detalles
      </button>
    </article>
  );
};

export default TurnoArticle;