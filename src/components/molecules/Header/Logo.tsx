import { Link } from "react-router-dom";

const Logo = () => (
  <Link  to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
    <div className="w-10 h-10  from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
      <span className="text-[#f7e1c3]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-7 h-7"
    >
      <path d="M13.42 12.01 21 4.41 19.59 3l-7.59 7.59L9.41 8l1.3-1.29L9.29 5.3 7.99 6.59 6.7 5.29 5.29 6.7l1.29 1.29L5.3 9.29l1.41 1.41 1.29-1.29 2.59 2.59-7.59 7.59L5.41 21l7.59-7.59L18.59 21 21 18.59l-7.58-7.58z"/>
    </svg>
  </span>
    </div>
    <span className="text-xl font-bold text-white">Barberia El Filo </span>
  </Link>
);

export default Logo;

