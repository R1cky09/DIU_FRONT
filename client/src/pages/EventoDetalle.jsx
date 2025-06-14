import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import eventos from '../data/eventosData';

export default function EventoDetalle() {
  const { id } = useParams();
  const evento = eventos.find(e => e.id === parseInt(id));

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarInscripcion = (e) => {
    e.preventDefault();
    console.log('Inscripción:', { nombre, correo, evento: evento.titulo });
    setMensaje(`Gracias por inscribirte, ${nombre}. Te enviaremos información al correo ${correo}.`);
    setNombre('');
    setCorreo('');
  };

  if (!evento) return <p className="text-center text-red-600">Evento no encontrado.</p>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <img src={`/${evento.imagen}`} alt={evento.titulo} className="w-full rounded-md shadow mb-6" />

      <p className="text-sm text-gray-600 mb-1">{evento.fecha} | {evento.lugar}</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{evento.titulo}</h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">{evento.descripcion}</p>

      <div className="border border-gray-200 rounded-md p-4 shadow-sm bg-gray-50">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">Detalles del evento</h2>
        <table className="w-full text-sm text-left">
          <tbody>
            <tr className="border-b">
              <td className="py-2 font-medium text-gray-700 w-32">Fecha</td>
              <td className="py-2 text-gray-800">{evento.fecha}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-medium text-gray-700">Hora</td>
              <td className="py-2 text-gray-800">{evento.hora}</td>
            </tr>
            <tr>
              <td className="py-2 font-medium text-gray-700">Lugar</td>
              <td className="py-2 text-gray-800">{evento.lugar}</td>
              <td className="py-2 text-gray-800">{evento.Campus}</td>
              
            </tr>
          </tbody>
        </table>
      </div>

      {/* Formulario de inscripción */}
      <div className="mt-10 border border-gray-200 rounded-md p-6 shadow-sm bg-white">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">Inscribirse en este evento</h2>
        {mensaje && <p className="text-green-600 mb-4">{mensaje}</p>}
        <form onSubmit={manejarInscripcion} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Inscribirse
          </button>
        </form>
      </div>
           

      <div className="text-center mb-8">
        <Link
          to="/"
          className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Regresar a la página principal
        </Link>
      </div>
    </div>
  );
}
