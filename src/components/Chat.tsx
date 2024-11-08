import { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5"; // Para el ícono de enviar mensaje

export const Chat = () => {
  const [message, setMessage] = useState(""); // Estado para almacenar el mensaje
  const [messages, setMessages] = useState<string[]>([]); // Estado para almacenar todos los mensajes
  const messageEndRef = useRef<HTMLDivElement>(null); // Referencia para hacer scroll al final de los mensajes

  // Función para enviar mensaje
  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage(""); // Limpiar el campo después de enviar
    }
  };

  // Función para enviar mensaje con Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Hacer scroll al final del chat cada vez que se agregue un nuevo mensaje
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="flex flex-col bg-gray-100 rounded-lg shadow-lg max-w-5xl mx-auto"
      style={{ height: "80vh" }}
    >
      {" "}
      {/* Altura fija para el chat */}
      {/* Área de mensajes */}
      <div
        className="flex-1 overflow-y-auto p-4 bg-gray-50 rounded-t-lg"
        style={{ maxHeight: "calc(100% - 80px)", minHeight: "300px" }} // Altura fija para la sección de mensajes
      >
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${
                index % 2 === 0
                  ? "bg-blue-100 self-start"
                  : "bg-blue-500 text-white self-end"
              } max-w-xs`}
            >
              <p>{msg}</p>
            </div>
          ))}
        </div>
        {/* Espacio vacío al final para permitir el scroll */}
        <div ref={messageEndRef}></div>
      </div>
      {/* Área de entrada de texto */}
      <div className="bg-gray-200 p-4 flex items-center rounded-b-lg">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress} // Detecta la tecla "Enter"
          className="w-full p-3 border border-gray-300 rounded-lg mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition duration-200 ease-in-out"
        >
          <IoSend size={20} />
        </button>
      </div>
    </div>
  );
};
