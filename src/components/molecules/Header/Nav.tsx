import { Link } from "react-router-dom";
import LogButton from "../../atoms/LogButton";

const Logo = () => (
  <nav className="flex justify-end">
    <ul className="flex gap-6 items-center pr-8">
      <li>
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/servicios"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Sevicios
        </Link>
      </li>
      <li>
        <Link
          to="/turnos"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Turnos
        </Link>
      </li>
      <li>
        <LogButton />
      </li>
    </ul>
  </nav>
);

export default Logo;