import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaRegComment, FaCog, FaUser } from "react-icons/fa"; // Íconos de navegación

export const Sidebar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="relative">
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
            <button
              onClick={togglePopup}
              className="flex items-center space-x-3 hover:bg-blue-700 p-3 rounded-lg w-full text-left"
            >
              <FaCog size={20} />
              <span>Configuración</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Pop-up */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 h-80 flex flex-col justify-between">
            <h2 className="text-lg font-semibold mb-4">Configuración</h2>

            {/* Espacio dividido para futuras opciones */}
            <div className="flex-grow p-4 bg-gray-100 rounded-lg mb-4">
              {/* Aquí se pueden agregar futuras opciones o configuraciones */}
              <p className="text-gray-500">
                Espacio para futuras configuraciones...
              </p>
            </div>

            {/* Botones con más separación */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => alert("Botón Agregar presionado")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Agregar
              </button>
              <button
                onClick={togglePopup}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
