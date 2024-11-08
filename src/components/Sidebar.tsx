import { Link } from "react-router-dom";
import { FaHome, FaRegComment, FaCog, FaUser } from "react-icons/fa"; // Íconos de navegación

export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full bg-blue-600 text-white w-48 p-4 shadow-md transition-all duration-300">
      <Link to="/">
        <div className="text-xl font-bold mb-8">SeguChamba</div>
      </Link>
      <ul className="space-y-6">
        <li>
          <Link
            to="/"
            className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded-lg"
          >
            <FaHome size={20} />
            <span>Inicio</span>
          </Link>
        </li>
        <li>
          <Link
            to="/chats"
            className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded-lg"
          >
            <FaRegComment size={20} />
            <span>Chats</span>
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded-lg"
          >
            <FaUser size={20} />
            <span>Perfil</span>
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded-lg"
          >
            <FaCog size={20} />
            <span>Configuración</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
