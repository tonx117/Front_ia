import { Link } from "react-router-dom";
import "/public/css/pages/LoginRegister.css"; 

export const Register = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/public/css/stockin.gif')`,
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Registrarse
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="correo@ejemplo.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            Registrarse
          </button>
        </form>
        <div className="botonRedireccion">
          <p className="login-text">¿Ya tienes una cuenta?</p>
          <Link to="/Login">
            <button type="button" className="botonRedireccion text-blue-500">
              Ingresa aquí
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
