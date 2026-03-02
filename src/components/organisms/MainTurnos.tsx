import TurnoArticle from "../molecules/TurnoArticle";
import Turnos from "../../data/turnos";

const MainTurnos = () => (
  <div className="p-6 min-h-screen bg-gradient-to-b from-[#3b2416] via-[#5a341d] to-[#c97a36]/40">
    <h1 className="text-3xl font-bold text-[#f7e1c3] mb-6 text-center drop-shadow">
      Turnos de la Semana
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Turnos.map((turno) => (
        <div key={turno.id} className="h-full">
          <TurnoArticle {...turno} />
        </div>
      ))}
    </div>
  </div>
);

export default MainTurnos;